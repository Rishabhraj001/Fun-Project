import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-block',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: footerRef.current, start: 'top 90%' },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const handleNewsletter = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = '✓ Subscribed!';
    btn.disabled = true;
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="container footer-grid">
        <div className="footer-block footer-brand">
          <a href="#hero" className="footer-logo">Maggie<span>.</span></a>
          <p>Two minutes of magic, a lifetime of memories. The noodle that started it all.</p>
          <div className="social-row">
            {['𝕏', '📘', '📸', '▶'].map((s, i) => (
              <a key={i} href="#" className="social-icon magnetic">{s}</a>
            ))}
          </div>
        </div>

        <div className="footer-block">
          <h4>Navigate</h4>
          <ul>
            {['Story', 'Ingredients', 'Recipes', 'Gallery', 'FAQ'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-block">
          <h4>Company</h4>
          <ul>
            {['About Us', 'Careers', 'Press', 'Contact', 'Blog'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-block footer-newsletter">
          <h4>Stay Tasty</h4>
          <p>Get recipes, tips, and Maggie magic straight to your inbox.</p>
          <form onSubmit={handleNewsletter} className="newsletter-form">
            <input type="email" placeholder="your@email.com" required />
            <button type="submit" className="btn btn-primary magnetic">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Maggie Noodles. All rights reserved.</span>
        <span>Made with 🍜 and love.</span>
      </div>
    </footer>
  );
}
