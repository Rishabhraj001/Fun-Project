import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { vertexShader, fragmentShader } from './HeroShaders';

import videosrc from "../assets/front2.mp4";
import manVideo from "../assets/back2.mp4";

export default function Hero() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const textRef = useRef(null);


  const uniformRef = useRef(null);
  const mouseTarget = useRef({ x: 0.5, y: 0.5 });
  const mouseCurrent = useRef({ x: 0.5, y: 0.5 });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

   
    gsap.fromTo(container,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.1 }
    );

    
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        { opacity: 0, y: -60 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.8 }
      );
    }

    
    const scene = new THREE.Scene();

    
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });

    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // ✅ ADD THIS BLOCK HERE (IMPORTANT)
const uniforms = {
  uTexture1: { value: null },
  uTexture2: { value: null },
  uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  uHovered: { value: 0.0 },
  uRadius: { value: 0.25 },
  uSoftness: { value: 0.15 },
  uScale: { value: 0.05 },
  uResolution: { value: new THREE.Vector2(width, height) },
  uImageResolution: { value: new THREE.Vector2(1920, 1080) }
};

uniformRef.current = uniforms;

   
   let isTexturesLoaded = false;

// ---------- Video 1 ----------
const video1 = document.createElement("video");
video1.src = videosrc;
video1.loop = true;
video1.muted = true;
video1.playsInline = true;
video1.autoplay = true;
video1.crossOrigin = "anonymous";

// ---------- Video 2 ----------
const video2 = document.createElement("video");
video2.src = manVideo;
video2.loop = true;
video2.muted = true;
video2.playsInline = true;
video2.autoplay = true;
video2.crossOrigin = "anonymous";

// Play both videos
Promise.all([
  video1.play(),
  video2.play()
]).then(() => {

  const tex1 = new THREE.VideoTexture(video1);
  tex1.minFilter = THREE.LinearFilter;
  tex1.magFilter = THREE.LinearFilter;
  tex1.generateMipmaps = false;
  tex1.colorSpace = THREE.SRGBColorSpace;

  const tex2 = new THREE.VideoTexture(video2);
  tex2.minFilter = THREE.LinearFilter;
  tex2.magFilter = THREE.LinearFilter;
  tex2.generateMipmaps = false;
  tex2.colorSpace = THREE.SRGBColorSpace;

  uniforms.uTexture1.value = tex1;
  uniforms.uTexture2.value = tex2;

  uniforms.uImageResolution.value.set(
    video1.videoWidth,
    video1.videoHeight
  );

  isTexturesLoaded = true;
});

   
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

   
    const renderTick = () => {
      if (!isTexturesLoaded) return;

  
      mouseCurrent.current.x = gsap.utils.interpolate(mouseCurrent.current.x, mouseTarget.current.x, 0.1);
      mouseCurrent.current.y = gsap.utils.interpolate(mouseCurrent.current.y, mouseTarget.current.y, 0.1);

      uniforms.uMouse.value.set(mouseCurrent.current.x, mouseCurrent.current.y);

      
      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: mouseCurrent.current.x * width,
          y: mouseCurrent.current.y * height,
         
        });
      }

      renderer.render(scene, camera);
    };

    gsap.ticker.add(renderTick);


    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width;
     
      const y = 1.0 - ((e.clientY - rect.top) / height);

      mouseTarget.current.x = x;
      mouseTarget.current.y = y;

  
      if (cursorRef.current) {
        
    
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };

    const onMouseEnter = () => {
      setIsHovered(true);
      gsap.to(uniforms.uHovered, {
        value: 1.0,
        duration: 1.2,
        ease: "power3.out"
      });
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      }
    };

    const onMouseLeave = () => {
      setIsHovered(false);
      gsap.to(uniforms.uHovered, {
        value: 0.0,
        duration: 1.2,
        ease: "power3.out"
      });
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);

   
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener('resize', onResize);

  
    const onTouch = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseTarget.current.x = (touch.clientX - rect.left) / width;
        mouseTarget.current.y = 1.0 - ((touch.clientY - rect.top) / height);

        
        if (!isHovered) {
          onMouseEnter();
        }
      }
    };

    container.addEventListener('touchstart', onTouch);
    container.addEventListener('touchmove', onTouch);

    // 7. Cleanup
   // 7. Cleanup
return () => {
  gsap.ticker.remove(renderTick);

  window.removeEventListener("resize", onResize);
  container.removeEventListener("mousemove", onMouseMove);
  container.removeEventListener("mouseenter", onMouseEnter);
  container.removeEventListener("mouseleave", onMouseLeave);
  container.removeEventListener("touchstart", onTouch);
  container.removeEventListener("touchmove", onTouch);

  // Stop videos
  video1.pause();
  video2.pause();

  video1.removeAttribute("src");
  video2.removeAttribute("src");

  video1.load();
  video2.load();

  // Dispose video textures
  uniforms.uTexture1.value?.dispose();
  uniforms.uTexture2.value?.dispose();

  // Three.js cleanup
  container.removeChild(renderer.domElement);
  renderer.dispose();
  material.dispose();
  geometry.dispose();
};
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 select-none"
      />

     
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-52 h-52 rounded-full pointer-events-none z-20 mix-blend-screen opacity-0 scale-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          transform: 'translate(-50%, -50%)' // Center the glow on the mouse point
        }}
      />

     
       <div ref={textRef} className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center mx-auto w-full max-w-[90rem] px-8 lg:px-16 mt-90">
        <div
          className="w-full flex flex-col md:flex-row justify-between md:items-end transition-all duration-700 ease-out transform gap-10"
          style={{ transform: isHovered ? 'translateY(-20px)' : 'translateY(0px)' }}
        >

         
          <div className="flex-1 max-w-lg lg:max-w-xl text-left">
            

            <h1 className="text-2xl md:text-3xl text-yellow-300 xl:text-[3.5rem] font-bold tracking-tighter leading-[1.05]">
              STRANGER<br />
              <span className="text-transparent bg-clip-text text-yellow-300 font-mono tracking-wider uppercase pr-2">
               THINGS
              </span>
            </h1>
            <p className="w-110 text-lg md:text-xl text-black font-small mt-2   mb-8">
             Beyond the ordinary lies the Upside Down—a place where fear takes form and every choice matters. Step into a world of supernatural mysteries, unforgettable friendships 
            </p>
            <button className="pointer-events-auto px-8 py-4  rounded-[20px] border-white/30 text-white bg-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-sm shadow-xl inline-block">
              Enter the upside down
            </button>
          </div>

          
          <div className=" flex-1 max-w-md text-left  flex flex-col mb-8 ">
            <h1 className='text-yellow-300 text-5xl font-bold'> The Mind Flayer </h1>
            <p className="w-110 text-lg md:text-xl text-black font-small mt-2  mb-8">
             A creature born from the shadows of the Upside Down, the Mind Flayer is a powerful entity driven by control and destruction. Its presence brings darkness, fear
            </p>

            <button className="pointer-events-auto px-8 py-4 rounded-full border border-white/30 text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-sm shadow-xl inline-block">
              Start
            </button>
          </div>

        </div>
      </div>

      
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
