let step = 0;

const positions = [
  { x: 0, scale: 1 },
  { x: 200, scale: 1.5 },
  { x: -150, scale: 0.8 },
  { x: 0, scale: 2 }
];

document.getElementById("nextBtn").addEventListener("click", () => {
  step++;

  if (step >= positions.length) step = 0;

  gsap.to(".box", {
    x: positions[step].x,
    scale: positions[step].scale,
    duration: 1,
    ease: "power3.inOut"
  });
});
