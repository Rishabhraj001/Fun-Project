const open = document.getElementById("open")
const close = document.getElementById("close")
tl = gsap.timeline()

open.addEventListener("click",()=>{
    tl.to("#triangle-down",{
   rotateX: 180,
  duration: 0.8,
  ease: "power2.inOut"
})
tl.to("#triangle-down",{
   zIndex: 10,
   duration:0.1,
},"-=0.4")

tl.to("#letter",{
   y:-70,
  duration: 0.8,
  ease: "power2.inOut"
},"<")
tl.to(".heart1", {
  y: -600,
  x:40,
  duration: 6,
  
  
  ease: "power2.inOut",
  
},"-=0.4");
tl.to(".heart2", {
  y: -600,
  x:40,
  duration: 6,
  
  
  ease: "power2.inOut",
  
},"<");
tl.to(".heart3", {
  y: -600,
  x:40,
  duration: 6,
  
  
  ease: "power2.inOut",
  
},"<");



tl.to("#myImage", {
  y: -20,
  duration: 1.5,
  
  yoyo: true,
  ease: "sine.inOut"
});

})

close.addEventListener("click",()=>{
    

tl.to("#letter",{
   y:0,
  duration: 0.8,
  ease: "power2.inOut"
})
tl.to("#triangle-down",{
   rotateX: 0,
  duration: 0.8,
  ease: "power2.inOut"
})
tl.to("#triangle-down",{
   zIndex: 1111,
   duration:0.1,
},"-=0.4")

})
