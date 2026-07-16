import React, { useRef } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { gsap } from '../../utils/animations';
import './BikeCard.css';

const BikeCard = ({ bike, onClick }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleEnter = () => {
    gsap.to(imgRef.current, { scale: 1.08, duration: 0.7, ease: 'power3.out' });
    gsap.to(cardRef.current, { y: -8, duration: 0.4, ease: 'power2.out' });
  };

  const handleLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.7, ease: 'power3.out' });
    gsap.to(cardRef.current, { y: 0, duration: 0.4, ease: 'power2.out' });
  };

  return (
    <article
      className="bike-card"
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => onClick(bike)}
    >
      <div className="bike-card__image-wrap">
        <img ref={imgRef} src={bike.image} alt={bike.name} className="bike-card__image" />
      </div>
      <div className="bike-card__body">
        <div>
          <h3 className="bike-card__name">{bike.name}</h3>
          <p className="bike-card__price">{bike.price}</p>
        </div>
        <button className="bike-card__btn" aria-label={`View ${bike.name}`}>
          <HiArrowUpRight size={20} />
        </button>
      </div>
    </article>
  );
};

export default BikeCard;
