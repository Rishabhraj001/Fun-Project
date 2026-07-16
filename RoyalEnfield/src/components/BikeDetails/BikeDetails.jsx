import React, { useEffect, useRef, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { gsap, spawnRipple } from '../../utils/animations';
import './BikeDetails.css';

const SPEC_LABELS = {
  engine: 'Engine',
  power: 'Power',
  torque: 'Torque',
  mileage: 'Mileage',
  topSpeed: 'Top Speed',
  fuelTank: 'Fuel Tank',
  brakes: 'Brakes',
  suspension: 'Suspension',
  gearbox: 'Gearbox',
  cooling: 'Cooling',
};

const BikeDetails = ({ bike, onClose }) => {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, scale: 0.92, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.1 }
    );

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    gsap.to(panelRef.current, { opacity: 0, scale: 0.94, y: 20, duration: 0.35, ease: 'power2.in' });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      delay: 0.1,
      onComplete: onClose,
    });
  };

  const gallery = bike.gallery && bike.gallery.length ? bike.gallery : [bike.image];

  return (
    <div className="bike-details" ref={overlayRef} role="dialog" aria-modal="true">
      <button className="bike-details__close" onClick={handleClose} aria-label="Close">
        <HiXMark size={26} />
      </button>

      <div className="bike-details__panel" ref={panelRef}>
        <div className="bike-details__gallery">
          <div className="bike-details__hero-image">
            <img src={gallery[activeImage]} alt={bike.name} />
          </div>
          {gallery.length > 1 && (
            <div className="bike-details__thumbs">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  className={`bike-details__thumb ${i === activeImage ? 'is-active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={src} alt={`${bike.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="bike-details__info">
          <div className="bike-details__scroll">
            <span className="eyebrow">{bike.tagline}</span>
            <h2 className="bike-details__name">{bike.name}</h2>
            <p className="bike-details__price">{bike.price}</p>

            <p className="bike-details__overview">{bike.overview}</p>

            <div className="bike-details__colors">
              <span className="bike-details__label">Colours</span>
              <div className="bike-details__swatches">
                {bike.colors.map((color, i) => (
                  <button
                    key={color}
                    className={`bike-details__swatch ${i === activeColor ? 'is-active' : ''}`}
                    style={{ background: color }}
                    onClick={() => setActiveColor(i)}
                    aria-label={`Colour option ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="bike-details__specs-grid">
              {Object.entries(bike.specs).map(([key, value]) => (
                <div key={key} className="bike-details__spec">
                  <span className="bike-details__spec-label">{SPEC_LABELS[key] || key}</span>
                  <span className="bike-details__spec-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="bike-details__features">
              <span className="bike-details__label">Features</span>
              <div className="bike-details__feature-list">
                {bike.features.map((feature) => (
                  <span key={feature} className="bike-details__feature-chip">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bike-details__sticky-actions">
            <div>
              <span className="bike-details__label">Starting at</span>
              <p className="bike-details__sticky-price">{bike.price}</p>
            </div>
            <button className="btn btn-primary" onClick={spawnRipple}>
              Book Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
