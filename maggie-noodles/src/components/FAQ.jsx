import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './FAQ.css';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: 'How long does Maggie take to cook?', a: 'Just two minutes in boiling water — three if you like your noodles extra soft.' },
  { q: 'Is Maggie suitable for vegetarians?', a: 'Yes, our classic and veggie variants are fully vegetarian, made from quality plant-based ingredients.' },
  { q: 'Can I customize the spice level?', a: 'Absolutely — add extra chili flakes or chili oil for more heat, or skip the tastemaker for a milder bowl.' },
  { q: 'Where can I buy Maggie noodles?', a: 'Available at most grocery stores, supermarkets, and online marketplaces nationwide.' },
  { q: 'Does Maggie contain preservatives?', a: 'We use minimal processing and quality ingredients, with full nutritional info listed on every pack.' },
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  const answerRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === openIndex) {
        gsap.to(el, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.4, ease: 'power3.in' });
      }
    });
  }, [openIndex]);

  return (
    <section id="faq" ref={sectionRef} className="faq">
      <div className="container faq-container">
        <div className="faq-head">
          <span className="section-eyebrow">FAQ</span>
          <h2>Questions, answered</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div ref={(el) => (answerRefs.current[i] = el)} className="faq-answer" style={{ height: i === 0 ? 'auto' : 0, opacity: i === 0 ? 1 : 0 }}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
