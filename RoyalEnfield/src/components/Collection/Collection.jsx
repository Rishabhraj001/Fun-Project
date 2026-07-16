import React, { useEffect, useRef, useState } from 'react';
import bikes from '../../data/bikes.js';
import BikeCard from '../BikeCard/BikeCard.jsx';
import BikeDetails from '../BikeDetails/BikeDetails.jsx';
import { staggerReveal } from '../../utils/animations';
import './Collection.css';

const Collection = () => {
  const gridRef = useRef(null);
  const [selectedBike, setSelectedBike] = useState(null);

  useEffect(() => {
    if (!gridRef.current) return;
    staggerReveal(gridRef.current.querySelectorAll('.bike-card'), { trigger: gridRef.current });
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedBike ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedBike]);

  return (
    <section id="collection" className="collection">
      <div className="container">
        <span className="eyebrow collection__eyebrow">Full Range</span>
        <h2 className="section-title collection__title">The Collection</h2>
        <p className="collection__subtitle">
          Nine motorcycles. One badge. Every one of them built to be ridden, not parked.
        </p>

        <div className="collection__grid" ref={gridRef}>
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} onClick={setSelectedBike} />
          ))}
        </div>
      </div>

      {selectedBike && (
        <BikeDetails bike={selectedBike} onClose={() => setSelectedBike(null)} />
      )}
    </section>
  );
};

export default Collection;
