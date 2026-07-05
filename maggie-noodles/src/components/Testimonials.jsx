import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: 'Aanya R.', avatar: '🧕', review: 'Tastes exactly like the bowl my mom used to make. Pure nostalgia in every spoon.' },
  { name: 'Devansh K.', avatar: '🧑', review: 'My go-to 2am meal during finals. Fast, filling, unbeatable masala flavor.' },
  { name: 'Priya M.', avatar: '👩', review: 'Cheese Maggie changed my life. I make it every single weekend now.' },
  { name: 'Rohan S.', avatar: '🧔', review: 'Quality you can taste — the veggies actually feel fresh, not an afterthought.' },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { x: (i) => (i % 2 === 0 ? -80 : 80), opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-head">
          <span className="section-eyebrow">Testimonials</span>
          <h2>Loved by noodle lovers everywhere</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={r.name} ref={(el) => (cardsRef.current[i] = el)} className="testimonial-card">
              <div className="testimonial-avatar">{r.avatar}</div>
              <p>"{r.review}"</p>
              <span className="testimonial-name">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
