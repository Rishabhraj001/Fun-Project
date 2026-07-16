import React, { useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import bikes from '../../data/bikes.js';
import { staggerReveal } from '../../utils/animations';
import './PopularBikes.css';

const POPULAR = [bikes[0], bikes[4], bikes[5], bikes[1]];

const PopularBikes = () => {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    staggerReveal(listRef.current.querySelectorAll('.popular-card'), { trigger: listRef.current, stagger: 0.1 });
  }, []);

  return (
    <section className="popular">
      <div className="container">
        <span className="eyebrow">Rider Favourites</span>
        <h2 className="section-title popular__title">Most Popular Right Now</h2>

        <div className="popular__list" ref={listRef}>
          {POPULAR.map((bike) => (
            <article key={bike.id} className="popular-card">
              <img src={bike.image} alt={bike.name} className="popular-card__image" />
              <div className="popular-card__info">
                <h3>{bike.name}</h3>
                <div className="popular-card__stats">
                  <span>{bike.specs.engine.split(',')[0]}</span>
                  <span>{bike.specs.power.split('@')[0].trim()}</span>
                  <span>{bike.specs.mileage}</span>
                </div>
                <p className="popular-card__price">{bike.price}</p>
              </div>
              <button className="popular-card__explore">
                Explore <HiArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBikes;
