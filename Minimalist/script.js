
tl = gsap.timeline();


tl.from("#first-upper h1 ,#first-upper p",{
    duration: 1.5,
    y: 200,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.1
} )


tl.from("#nav",{
    duration: 1,
    y: -150,
    opacity: 0,
    
    ease: "power2.out",
    
},"<")
tl.fromTo("#overlayImg",
  {
    y: 300,
    opacity: 0,
    rotation: 0,
    duration:1,
    
  },
  {
    y: 0,
    opacity: 1,
    rotation: 25,
    duration: 1.5,
    ease: "power3.out",
    

    
  },"<"
);

tl.from("#first-lower-left",{
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    
},"-=0.6" )
tl.from("#first-lower-right",{
    duration: 0.8,
    x: 100,
    opacity: 0,
    ease: "power2.out",
    
},"<" )

tl.fromTo("#overlayImg",
  {
    y: 0,
    opacity: 1,
    rotation: 25,
    duration: 1.5,
    ease: "power3.out",
  },
  {
    duration: 1,
    y: 200,
    x:369,
    scale: 0.5,
    ease: "power3.out",
    
    rotation: 0,

    scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        
        start:"top 60%",
        end: "top 40%",
        scrub: 1,
        
    }
    

    
  },"-=0.2"
);
tl.to("#overlayImg",
    {
       opacity: 0,
       duration: 0.1,
       scrollTrigger: {
        trigger: "#second",
        scroller: "body",
        
        start:"top 40%",
        end: "top 40%",
        scrub: 3,
        
    }
    }

)

tl.to("#special",
    {
       opacity: 0,
       duration: 0.05,
       scrollTrigger: {
        trigger: "#third",
        scroller: "body",
       
        start:"top 75%",
        end: "top 75%",
        scrub: 3,
        
    }
    }

)
tl.to("#overlayImg2",{
    opacity: 1,
    rotation: 25,
    duration: 0.2,
    x:378,
    scale: 3,
    y: -50,
    ease: "power3.out",
     scrollTrigger: {
        trigger: "#desciption",
        scroller: "body",
        
        start:"top 75%",
        end: "bottom 25%",
        scrub: 3,
        
    }
})

tl.from("#desciption",{
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#third",
        scroller: "body",
        
        start:"top 99%",
        end: "top top",
        scrub: 3,
        
    }
    
},"-=0.6" )

tl.from("#thirdboth img",{
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#third",
        scroller: "body",
        
        start:"top 99%",
        end: "bottom 20%",
        scrub: 3,
        
    }
    
},"-=0.6" )


