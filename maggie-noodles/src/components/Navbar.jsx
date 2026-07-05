import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Navbar.css';

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
      lastY = y;
    };
    window.addEventListener('scroll', onScroll);

    gsap.fromTo(nav, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="logo magnetic">
          Maggie<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="magnetic">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="btn btn-dark nav-cta magnetic">Cook Happiness</a>
      </div>
    </nav>
  );
}
