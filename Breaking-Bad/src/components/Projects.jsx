import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import jesse from '../assets/jesse.jpg';
import mike from '../assets/mike.jpg';
import saul from '../assets/saul.jpg';

gsap.registerPlugin(ScrollTrigger);

const MISSIONS = [
{
id: 'Cook',
name: 'Jesse Pinkman',
image: jesse,
link: '#',

},
{
id: 'Army',
name: 'Mike',
image: mike,
link: '#',

},
{
id: 'Lawyer',
name: 'Saul Goodman',
image: saul,
link: '#',

}
];


const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const imageRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
   
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
  
    gsap.to(cardRef.current, {
      rotateY: x * 15, 
      rotateX: -y * 15, 
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.4
    });
    
    
    gsap.to(glowRef.current, {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
      duration: 0.2
    });
    
   
    gsap.to(imageRef.current, {
      x: -x * 20,
      y: -y * 20,
      scale: 1.1,
      ease: 'power2.out',
      duration: 0.4
    });
  };

  const handleMouseLeave = () => {
    // Snap back everything cleanly
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: 'power3.out',
      duration: 0.6
    });
    
    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.4
    });
    
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1.0,
      ease: 'power3.out',
      duration: 0.6
    });
  };

  return (
    <div 
      className="project-card relative w-full h-[450px] rounded-xl overflow-hidden cursor-pointer group bg-black border border-white/10"
      style={{ transformStyle: 'preserve-3d' }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.name} 
          className={`absolute inset-0 w-full h-[120%] -top-[1%] object-cover object-center  transition-all duration-[1.5s]`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
      </div>

      
      <div 
        ref={glowRef}
        className="absolute w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 mix-blend-screen"
      />
      
     
      <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/40 rounded-xl transition-colors duration-500 z-20 pointer-events-none" />

      
      <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end pointer-events-none" style={{ transform: 'translateZ(30px)' }}> {/* Push text outward on Z axis */}
        
        {/* Dossier Code */}
        <div className="text-red-500/80 font-mono text-xs tracking-[0.3em] mb-2 font-bold uppercase transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
         // {project.id}
        </div>
        
        <h3 className="text-3xl font-bold tracking-tight text-white mb-3 leading-none drop-shadow-xl font-sans">
          {project.name}
        </h3>
        
       
        
        
        
       
      </div>
    </div>
  );
};


export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
      
      
      tl.fromTo(headerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
      
     
      const cards = sectionRef.current.querySelectorAll('.project-card');
      
      tl.fromTo(cards,
        { opacity: 0, y: 100, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
        "-=0.6"
      );
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="w-full min-h-screen bg-[#030303] py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto w-full relative z-10">
        
     
        <div ref={headerRef} className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white font-sans leading-none drop-shadow-lg mb-4">
              My Top <span className="font-serif italic font-light opacity-80 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white pr-2">Students</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light tracking-wide text-base md:text-lg max-w-sm mt-6 md:mt-0 leading-relaxed md:text-right">
            Selected projects engineered for supreme performance and scale.
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 place-items-center">
          {VISIONS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
      
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />
    </section>
  );
}


const VISIONS = MISSIONS;
