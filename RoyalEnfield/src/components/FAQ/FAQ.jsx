import React, { useRef, useState } from 'react';
import { HiPlus } from 'react-icons/hi2';
import faqs from '../../data/faq.js';
import { gsap } from '../../utils/animations';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0].id);
  const contentRefs = useRef({});

  const toggle = (id) => {
    const isOpening = openId !== id;
    const nextOpenId = isOpening ? id : null;

    if (openId && contentRefs.current[openId]) {
      gsap.to(contentRefs.current[openId], { height: 0, duration: 0.4, ease: 'power2.inOut' });
    }
    if (nextOpenId && contentRefs.current[nextOpenId]) {
      const el = contentRefs.current[nextOpenId];
      gsap.set(el, { height: 'auto' });
      const h = el.offsetHeight;
      gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.45, ease: 'power2.inOut' });
    }
    setOpenId(nextOpenId);
  };

  return (
    <section className="faq">
      <div className="container faq__container">
        <span className="eyebrow">Questions</span>
        <h2 className="section-title faq__title">Frequently Asked</h2>

        <div className="faq__list">
          {faqs.map((item) => (
            <div key={item.id} className="faq__item">
              <button className="faq__question" onClick={() => toggle(item.id)}>
                <span>{item.question}</span>
                <HiPlus className={`faq__icon ${openId === item.id ? 'is-open' : ''}`} size={20} />
              </button>
              <div
                className="faq__answer-wrap"
                ref={(el) => (contentRefs.current[item.id] = el)}
                style={{ height: openId === item.id ? 'auto' : 0 }}
              >
                <p className="faq__answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
