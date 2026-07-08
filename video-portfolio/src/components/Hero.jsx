import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Hero.css";

import heroVideo from "../assets/Hero.mp4";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const title = useRef(null);
  const subtitle = useRef(null);
  const buttons = useRef(null);
  const playBtn = useRef(null);
  const videoRef = useRef(null);
  const leftRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const hasAnimated = useRef(false);

  // ENSURE VIDEO STARTS PAUSED
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setPlaying(false);
  }, []);

  // GSAP ANIMATION
  useEffect(() => { 
    const ctx = gsap.context(() => {

      gsap.from(".left > *", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".social-icons > *", {
        x: -100,
        opacity: 0,

        duration: 2.5,
        ease: "power4.out",
      });
      gsap.from(".right > *", {

        opacity: 0,

        duration: 2,
        scale: 0.5,
        ease: "power4.out",
      });
      gsap.from(videoRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      });

    });

    return () => ctx.revert();
  }, []);
  // PLAY / PAUSE TOGGLE
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="hero">

      <div className="social-icons">
        <div>
          <a href="#">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a href="#">
           <FaInstagram />
          </a>
        </div>



      </div>

      {/* BACKGROUND VIDEO */}
      <div>

      </div>
      <video
        ref={videoRef}
        
        loop
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* HERO CONTENT */}
      <div className="hero-content">

        <div className="left" ref={leftRef}>
 
          <p className="intro">Hi, I'm</p>

          <h1>
            Rishabh Raj
            <span>Full Stack Developer</span>
          </h1>

          <p>
            I build modern web experiences using React, GSAP,
            Three.js and creative animations that make users stop scrolling.
          </p>

          <div className="buttons">
            <button className="primary">View My Work</button>
            <button className="secondary">Contact Me</button>

            <a href="/resume.pdf" download>
              <button className="resume">Download Resume</button>
            </a>
          </div>

        </div>

        <div className="right">
          <button
            ref={playBtn}
            className="playButton"
            onClick={toggleVideo}
          >
            {playing ? "❚❚" : "▶"}
          </button>
        </div>

      </div>

      <div className="scroll">Scroll ↓</div>

    </section>
  );
}