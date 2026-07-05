import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Recipes.css';

gsap.registerPlugin(ScrollTrigger);

const recipes = [
  {
    name: 'Spicy Maggie',
    img: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=800&auto=format&fit=crop',
    desc: 'Turned up the heat with extra chili and a smoky finish.',
    ingredients: 'Noodles, Chili Oil, Garlic, Spring Onion',
    time: '8 min',
  },
  {
    name: 'Cheese Maggie',
    img: 'https://images.unsplash.com/photo-1645696301387-0e7b3e3da9ee?q=80&w=800&auto=format&fit=crop',
    desc: 'Creamy, gooey, and irresistibly cheesy comfort food.',
    ingredients: 'Noodles, Cheddar, Butter, Milk',
    time: '10 min',
  },
  {
    name: 'Veggie Maggie',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop',
    desc: 'A garden-fresh bowl loaded with crunchy vegetables.',
    ingredients: 'Noodles, Carrot, Peas, Corn, Capsicum',
    time: '9 min',
  },
];

export default function Recipes() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 90, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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
    <section id="recipes" ref={sectionRef} className="recipes">
      <div className="container">
        <div className="recipes-head">
          <span className="section-eyebrow">Recipe Showcase</span>
          <h2>Three ways to fall in love</h2>
        </div>

        <div className="recipes-grid">
          {recipes.map((r, i) => (
            <div key={r.name} ref={(el) => (cardsRef.current[i] = el)} className="recipe-card cursor-grow">
              <div className="recipe-img-wrap">
                <img src={r.img} alt={r.name} />
                <span className="recipe-time">{r.time}</span>
              </div>
              <div className="recipe-body">
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
                <span className="recipe-ingredients">{r.ingredients}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
