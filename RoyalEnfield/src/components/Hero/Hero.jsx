import React, { useEffect, useRef, useState } from 'react';
import { useScrollVideo } from '../../hooks/useScrollVideo';
import { gsap, ScrollTrigger } from '../../utils/animations';
import './Hero.css';

// Five hero headlines, each owns a slice of the 0-1 scroll progress range.
const HEADLINES = [
  { text: 'Pure Motorcycling.', start: 0, end: 0.2 },
  { text: 'Built for Every Journey.', start: 0.2, end: 0.4 },
  { text: 'The Legend Lives.', start: 0.4, end: 0.6 },
  { text: 'Crafted with Passion.', start: 0.6, end: 0.8 },
  { text: 'Ride Beyond Roads.', start: 0.8, end: 1 },
];

const SUBTITLES = ['120 Years of Legacy', 'Handcrafted Excellence', 'Timeless Engineering'];

const SPEC_SETS = [
  ['349cc', 'Single Cylinder', 'Air-Oil Cooled'],
  ['5 Speed Gearbox', '20.2 BHP', 'Disc Front Brake'],
  ['27 Nm Torque', 'Telescopic Fork', '36 kmpl'],
];

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const headlineRefs = useRef([]);
  const subtitleRef = useRef(null);
  const specRef = useRef(null);
  const [activeHeadline, setActiveHeadline] = useState(0);
  const [activeSubtitle, setActiveSubtitle] = useState(0);
  const [activeSpec, setActiveSpec] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,

      onUpdate: (self) => {
        const progress = self.progress;

        const headlineIndex = HEADLINES.findIndex(
          (h) => progress >= h.start && progress < h.end
        );

        if (headlineIndex !== -1) {
          setActiveHeadline(headlineIndex);
        }

        const chunk = Math.min(
          SUBTITLES.length - 1,
          Math.floor(progress * SUBTITLES.length)
        );

        setActiveSubtitle(chunk);
        setActiveSpec(chunk % SPEC_SETS.length);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Animate headline swap
  useEffect(() => {
    headlineRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeHeadline) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' }
        );
      } else {
        gsap.to(el, { opacity: 0, y: -30, scale: 0.96, duration: 0.5, ease: 'power2.in' });
      }
    });
  }, [activeHeadline]);

  useEffect(() => {
    if (!subtitleRef.current) return;
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [activeSubtitle]);

  useEffect(() => {
    if (!specRef.current) return;
    const items = specRef.current.querySelectorAll('.hero__spec-item');
    gsap.fromTo(
      items,
      { opacity: 0, x: 16 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    );
  }, [activeSpec]);
 
  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero__sticky">
        <video
          ref={videoRef}
          className="hero__video"
          src="/src/assets/videos/hero4.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero__overlay" />

        <div className="hero__headline-stack">
          {HEADLINES.map((headline, i) => (
            <h1
              key={headline.text}
              ref={(el) => (headlineRefs.current[i] = el)}
              className="hero__headline"
              style={{ opacity: i === activeHeadline ? 1 : 0 }}
            >
              {headline.text}
            </h1>
          ))}
        </div>

        <div className="hero__subtitle" ref={subtitleRef}>
          <span className="eyebrow">{SUBTITLES[activeSubtitle]}</span>
        </div>

        <div className="hero__specs" ref={specRef}>
          {SPEC_SETS[activeSpec].map((spec) => (
            <div key={spec} className="hero__spec-item">
              {spec}
            </div>
          ))}
        </div>

        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
