const t1 = gsap.timeline();
tl=gsap.timeline();
t1.from(".left-panel img ,.right-panel img",{
    duration: 0.8,
    opacity:0,
    scale:0.5
})

// The "Jerk" Opening Effect
tl.to(".left-panel", {
    xPercent: -100,
    duration: 1,
    ease: "expo.inOut" // This gives that sudden, snappy "jerk" movement
},"+=1.4")
.to(".right-panel", {
    xPercent: 100,
    duration: 1,
    ease: "expo.inOut"
}, "<") // "<" means start at the same time as the left panel

// After the panels open, animate your hero text and cups



tl.from("#nav",{
    duration:0.2,
    y:-100,
    opacity:0,
   
    ease:"power2.out"
    
},"-=0.9")
tl.from("#right-top",{
    duration:1,
    x:100,
    opacity:0,
    ease:"power2.out",
    
},"-=0.5")
tl.from("#left-lower",{
    duration:2.5,
    y:100,
    opacity:0,
    ease:"power2.out"
},"<")

tl.from("#overlayImgred",{
    duration:2.5,
    opacity:0,
    x: "-=50",
    y: "-=100",
    rotate: 10,
    ease:"power2.out"
},"<")
tl.from("#overlayImgorange",{
    duration:2.5,
    opacity:0,
    x: "+=100",
    y: "+=150",
    rotate: 10,
    ease:"power2.out"
},"<")
tl.from("#overlayImggold",{
    duration:2.5,
    opacity:0,
    x: "-=50",
    y: "+=100",
    rotate: 10,
    ease:"power2.out"
},"<")
tl.from("#overlayImgbrown",{
    duration:2.5, 
    opacity:0,
    x: "+=150",
    y: "+=100",
    rotate: 30,
    ease:"power2.out"
},"<")
tl.from("#sticker1,#sticker2,#sticker3",{
    duration:2.5,
    opacity:0,  
    scale:0.5,
    rotate:15,
    ease:"power2.out"
},"-=0.2")

tl.fromTo("#overlayImgbrown", {
    rotate: 10,          // Rotates from 10deg (CSS) to 0deg
             // Moves 100px to the left from its current position
    duration: 1.5,
    ease: "power2.inOut"
}, {
    rotate: 0,
    scale:1.1,
    x: "-=270",
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        
        start:"top 60%",
        end: "top 30%",
        scrub: 3,
        
    }
});
tl.to("#sticker1,#sticker2,#sticker3",{
    duration:2.5,
    opacity:0,  
    scale:0.5,
    rotate:15,
    ease:"power2.out"
},"-=0.2")
