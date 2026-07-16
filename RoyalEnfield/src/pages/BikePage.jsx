import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { getBikeById } from '../data/bikes.js';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import BikeDetails from '../components/BikeDetails/BikeDetails.jsx';
import './BikePage.css';

const BikePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bike = getBikeById(id);

  if (!bike) {
    return (
      <div className="bike-page bike-page--empty">
        <Navbar />
        <div className="bike-page__not-found">
          <h1>Motorcycle not found</h1>
          <button className="btn btn-outline" onClick={() => navigate('/')}>
            <HiArrowLeft /> Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bike-page">
      <Navbar />
      {/* Reuses the same full-screen detail component as the Collection
          modal, closing here simply navigates back to the collection. */}
      <BikeDetails bike={bike} onClose={() => navigate('/#collection')} />
    </div>
  );
};

export default BikePage;
