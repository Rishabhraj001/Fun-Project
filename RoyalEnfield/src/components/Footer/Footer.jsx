import React, { useState } from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { FaInstagram, FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const NAV_COLUMNS = [
  {
    title: 'Motorcycles',
    links: ['Hunter 350', 'Classic 350', 'Meteor 350', 'Himalayan 450', 'Interceptor 650'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Dealerships', 'Careers', 'Press'],
  },
  {
    title: 'Support',
    links: ['Book a Test Ride', 'Genuine Accessories', 'Warranty', 'Contact Us'],
  },
];

const SOCIALS = [
  { icon: FaInstagram, href: '#' },
  { icon: FaYoutube, href: '#' },
  { icon: FaFacebookF, href: '#' },
  { icon: FaXTwitter, href: '#' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer id="footer" className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <h2 className="footer__logo">Royal Enfield</h2>
          <p className="footer__tagline">Pure motorcycling since 1901.</p>

          <form className="footer__newsletter" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe">
              <HiOutlineArrowUpRight size={20} />
            </button>
          </form>
          {submitted && <p className="footer__newsletter-success">You&rsquo;re on the list.</p>}
        </div>

        <div className="footer__columns">
          {NAV_COLUMNS.map((col) => (
            <div key={col.title} className="footer__column">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {new Date().getFullYear()} Royal Enfield. All rights reserved.</p>
        <div className="footer__socials">
          {SOCIALS.map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="footer__social-link" aria-label="Social link">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
