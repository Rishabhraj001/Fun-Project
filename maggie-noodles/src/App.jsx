import { useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ markers: false });

import './index.css';
import './components/CustomCursor.css';
import './components/Loader.css';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Ingredients from './components/Ingredients';
import Features from './components/Features';
import ParallaxBanner from './components/ParallaxBanner';
import Recipes from './components/Recipes';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <div className={`page-wrap ${loaded ? 'visible' : ''}`}>
        <Navbar />
        <Hero />
        <Story />
        <Ingredients />
        <Features />
        <ParallaxBanner />
        <Recipes />
        <Experience />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
