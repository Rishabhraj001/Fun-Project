import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import BikeShowcase from '../components/BikeShowcase/BikeShowcase.jsx';
import Collection from '../components/Collection/Collection.jsx';
import ScrollVideo from '../components/ScrollVideo/ScrollVideo.jsx';
import PopularBikes from '../components/PopularBikes/PopularBikes.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';
import FAQ from '../components/FAQ/FAQ.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Loader from '../components/Loader/Loader.jsx';
import { ScrollTrigger } from '../utils/animations';

const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Re-measure all ScrollTriggers once every section has mounted and
    // laid out — prevents mismatched trigger positions on first load.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="app">
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && <Navbar />}
      {!loading && <Hero />}
      {!loading && <BikeShowcase />}
      {!loading && <Collection />}
      {!loading && <ScrollVideo />}
      {!loading && <PopularBikes />}
      {!loading && <FAQ />}
      {!loading && <Reviews />}
      {!loading && <Footer />}
    </div>
  );
};
      
     
   
  

export default Home;
