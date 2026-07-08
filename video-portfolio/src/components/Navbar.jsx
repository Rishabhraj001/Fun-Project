import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef();
useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.from(".navbar > *", {
      y: -60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

  });

  return () => ctx.revert();
}, []);
  

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        Rishabh <span>Raj</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
     <div>
       <button className="hire-btn">
        Hire Me
      </button>
     </div>
      
    </nav>
  );
}