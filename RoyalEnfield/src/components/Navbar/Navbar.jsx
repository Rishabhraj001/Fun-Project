import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { gsap } from '../../utils/animations';
import './Navbar.css';
import logo from '../../assets/images/royallogo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Motorcycles', href: '#showcase' },
  { label: 'Collection', href: '#collection' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#footer' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'power3.out' }
      );
      gsap.fromTo(
        menuRef.current.querySelectorAll('a'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.06, delay: 0.2, duration: 0.5 }
      );
    }
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Royal Enfield Logo" />
        </Link>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#collection" className="btn btn-outline navbar__cta">
            Explore
          </a>
          <button
            className="navbar__burger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile-menu ${menuOpen ? 'is-open' : ''}`} ref={menuRef}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
