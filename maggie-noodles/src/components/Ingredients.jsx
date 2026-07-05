import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Ingredients.css';

gsap.registerPlugin(ScrollTrigger);

const ingredients = [
  { emoji: '🍜', title: 'Golden Noodles', desc: 'Springy, slurp-worthy noodles steamed to perfect bite.' },
  { emoji: '🌶️', title: 'Fiery Chili', desc: 'A gentle kick of heat that wakes up every taste bud.' },
  { emoji: '🥕', title: 'Crunchy Carrot', desc: 'Sweet, fresh crunch folded into every spoonful.' },
  { emoji: '🟢', title: 'Garden Peas', desc: 'Tiny bursts of green sweetness in every bite.' },
  { emoji: '🧅', title: 'Caramel Onion', desc: 'Slow-cooked depth that rounds out the masala.' },
  { emoji: '🌽', title: 'Golden Corn', desc: 'A pop of sunshine sweetness in the broth.' },
  { emoji: '🌿', title: 'Fresh Herbs', desc: 'A fragrant finishing touch, picked at peak flavor.' },
];

export default function Ingredients() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0, rotate: -4 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.utils.toArray('.bg-ingredient').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -30 : 30,
          rotate: i % 2 === 0 ? 15 : -15,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = (i) => {
    gsap.to(cardsRef.current[i], { rotate: -4, scale: 1.04, duration: 0.4, ease: 'power3.out' });
  };
  const handleLeave = (i) => {
    gsap.to(cardsRef.current[i], { rotate: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.6)' });
  };

  return (
    <section id="ingredients" ref={sectionRef} className="ingredients">
      <span className="bg-ingredient bgi-1">🌶️</span>
      <span className="bg-ingredient bgi-2">🌿</span>
      <span className="bg-ingredient bgi-3">🥕</span>

      <div className="container">
        <div className="ingredients-head">
          <span className="section-eyebrow">What's Inside</span>
          <h2>Real ingredients, real flavor</h2>
        </div>

        <div className="ingredients-grid">
          {ingredients.map((ing, i) => (
            <div
              key={ing.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="ingredient-card cursor-grow"
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
            >
              <div className="ingredient-emoji">{ing.emoji}</div>
              <h3>{ing.title}</h3>
              <p>{ing.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
