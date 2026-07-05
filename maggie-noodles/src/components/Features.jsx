import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: '⚡', title: 'Fast to Cook', desc: 'Ready in two minutes, no compromises on flavor.' },
  { icon: '😋', title: 'Delicious Taste', desc: 'A masala blend perfected over generations.' },
  { icon: '🌾', title: 'Quality Ingredients', desc: 'Sourced fresh, cooked with genuine care.' },
  { icon: '🌍', title: 'Loved Worldwide', desc: 'A bowlful of comfort in over 100 countries.' },
];

export default function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="features" ref={sectionRef}>
      <div className="container">
        <div className="features-head">
          <span className="section-eyebrow">Why People Love Maggie</span>
          <h2>Four reasons it never gets old</h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} ref={(el) => (cardsRef.current[i] = el)} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
