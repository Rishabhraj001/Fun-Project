const image = document.getElementById("image2");
const arrow = document.getElementById("arrow");
const head = document.getElementById("text");

image.addEventListener("click", () => {


  gsap.to("#image1", {
    scale: 1.1,
    duration: 0.5,
    x: 240,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image2", {
    scale: 1.35,
    duration: 0.5,
    x: 305,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image3", {
    scale: 1,
    duration: 0.5,
    x: 305,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image4", {
    scale: 0.75,
    duration: 0.5,
    x: 235,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image5", {

    duration: 0.5,
    x: 335,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image6", {

    duration: 0.5,
    x: 335,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });

});

tl = gsap.timeline()

tl.from("#text", {
  y: 200,
  scale: 3.6,
  duration:1,
  ease: "power2.out"
})
tl.from("#search", {
  y: -100,
  ease: "power2.out",
  duration:0.8
})
tl.from("#nav3", {
  y: -100,
  ease: "power2.out",
  duration:0.8,
  opacity:0
},"<")
tl.from("#small-text", {
  x: 100,
  ease: "power2.out",
  duration:0.8,
  opacity:0
})
tl.from("#bigger-text", {
  x: -100,
  ease: "power2.out",
  duration:0.8,
  opacity:0
},"<")
tl.from("#image3", {
  y: 200,
  ease: "power2.out",
  duration:0.8,
  opacity:0
},"<")
tl.from("#image4 ", {
  x: -300,
  ease: "power2.out",
  duration:0.8,
  opacity:0
})
tl.from("#image5", {
  x: -600,
  ease: "power2.out",
  duration:0.8,
  opacity:0
},"<")
tl.from("#image2 ", {
  x: 300,
  ease: "power2.out",
  duration:0.8,
  opacity:0
})
tl.from("#image1", {
  x: 600,
  ease: "power2.out",
  duration:0.8,
  opacity:0
},"<")

image.addEventListener("click", () => {


  gsap.to("#image1", {
    scale: 1.1,
    duration: 0.5,
    x: 240,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image2", {
    scale: 1.35,
    duration: 0.5,
    x: 305,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image3", {
    scale: 1,
    duration: 0.5,
    x: 305,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image4", {
    scale: 0.75,
    duration: 0.5,
    x: 235,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image5", {

    duration: 0.5,
    x: 335,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#image6", {

    duration: 0.5,
    x: 335,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });

});
image.addEventListener("dblclick", () => {
head.style.color= "white"
image.style.zIndex= 8888
tp=gsap.timeline()
tp.to("#image2", {
    scale: 6.8,
    duration: 0.5,
    y:260,
    
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  
  tp.to("#firstimage", {
    scale: 1,
    duration: 0.5,
    opacity:1,
    
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  
  tp.to("#image2", {
    scale: 6.8,
    duration: 1,
    y:290,
    
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  tp.to("#image2", {
    scale: 6.8,
    duration: 1,
    y:230,
    
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
tp.to("#firstimage", {
    
    duration: 2,
    opacity:0,
    x:650,
    
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  tp.to("#sidebar", {
    opacity:1,
    duration: 1.5,
    x:450,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  },"<");
  tp.to("#arrow", {
    opacity:1,
    duration: 1.5,
    x:815,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  },"<");
  

});
arrow.addEventListener("click", () => {

  gsap.to("#sidebar", {
    opacity:0,
    duration: 1,
    x:-450,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  gsap.to("#arrow", {
    opacity:0,
    duration: 1,
    x:-815,
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  tp.to("#firstimage", {
    
    duration: 2,
    opacity:1,
    x:0,
    
    transformOrigin: "center center", // IMPORTANT
    ease: "power2.out"
  });
  

});





