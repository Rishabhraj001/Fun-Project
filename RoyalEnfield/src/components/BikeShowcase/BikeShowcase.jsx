import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import bikes from '../../data/bikes.js';
import { gsap, spawnRipple } from '../../utils/animations';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './BikeShowcase.css';

const SHOWCASE_BIKES = bikes.slice(0, 5);

const TABS = ['Overview', 'Performance', 'Technology'];

const BikeShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');

  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const transitionRef = useRef(null);

  const bike = SHOWCASE_BIKES[activeIndex];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  // Animate active bike image
  useEffect(() => {
    gsap.killTweensOf('.showcase__image-stage');

    const activeImage = document.querySelector(
      '.showcase__swiper .swiper-slide-active .showcase__image-stage'
    );

    if (!activeImage) return;

    gsap.fromTo(
      activeImage,
      {
        opacity: 0,
        scale: 0.9,
        rotateY: -12,
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'all',
      }
    );
  }, [activeIndex]);

  // Animate text
  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current.querySelectorAll('.showcase__animate'),
      {
        opacity: 0,
        y: 16,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power2.out',
      }
    );
  }, [activeIndex, activeTab]);

  // Scroll animation
  useEffect(() => {
    if (!transitionRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(transitionRef.current, {
        y: 220,
        opacity: 0,
        scale: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 90%',
          end: 'bottom 20%',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tabContent = {
    Overview: bike.overview,
    Performance: bike.performance,
    Technology: bike.technology,
  };

  return (
    <section id="showcase" className="showcase" ref={sectionRef}>
      <div className="showcase__inner container" ref={transitionRef}>
        <span className="eyebrow showcase__eyebrow">The Line-Up</span>

        <h2 className="section-title showcase__title">
          Choose Your Machine
        </h2>

        <div className="showcase__grid">
          <div className="showcase__left" ref={contentRef}>
            <h3 className="showcase__bike-name showcase__animate">
              {bike.name}
            </h3>

            <p className="showcase__bike-tagline showcase__animate">
              {bike.tagline}
            </p>

            <div className="showcase__variants showcase__animate">
              {bike.variants.map((variant) => (
                <span
                  key={variant}
                  className="showcase__variant-chip"
                >
                  {variant}
                </span>
              ))}
            </div>

            <ul className="showcase__features showcase__animate">
              {bike.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="showcase__actions showcase__animate">
              <button
                className="btn btn-primary"
                onClick={spawnRipple}
              >
                Book Now
              </button>

              <button className="btn btn-outline">
                Explore
              </button>
            </div>
          </div>

          <div className="showcase__center">
            <Swiper
              modules={[EffectFade, Navigation]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              navigation
              speed={700}
              onSlideChange={handleSlideChange}
              className="showcase__swiper"
            >
              {SHOWCASE_BIKES.map((b) => (
                <SwiperSlide key={b.id}>
                  <div className="showcase__image-stage">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="showcase__image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="showcase__price">
              {bike.price}
            </div>
          </div>

          <div className="showcase__right">
            <div className="showcase__tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`showcase__tab ${
                    activeTab === tab ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <p className="showcase__tab-content showcase__animate">
              {tabContent[activeTab]}
            </p>

            <p className="showcase__tab-content showcase__tab-content--secondary showcase__animate">
              Every {bike.name} is assembled and quality-checked before it
              ever reaches a showroom floor, carrying the same badge that
              has marked every Royal Enfield since 1901.
            </p>
          </div>
        </div>

        <div className="showcase__pills">
          {bike.features.concat(['Tripper', 'Bluetooth']).map((pill) => (
            <span
              key={pill}
              className="showcase__pill"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase;