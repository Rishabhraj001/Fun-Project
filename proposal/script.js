function sayYes() {
  document.getElementById("Btn").addEventListener("click", () => {
  window.location.href = "proposal.html";
});
}

function gift() {
  document.getElementById("Btn").addEventListener("click", () => {
  window.location.href = "Gift.html";
});
}

function next() {
  document.getElementById("gift").addEventListener("click", () => {
  window.location.href = "surprise.html";
});
}
function next1() {
  document.getElementById("gift1").addEventListener("click", () => {
  window.location.href = "surprise3.html";
});
}
function next2() {
  document.getElementById("gift2").addEventListener("click", () => {
  window.location.href = "surprise4.html";
});
}
function nextgift() {
  document.getElementById("try").addEventListener("click", () => {
  window.location.href = "surprise1.html";
});
}
function backgift() {
  document.getElementById("back").addEventListener("click", () => {
  window.location.href = "Gift.html";
});
}



const img = document.getElementById("img");
const noBtn = document.getElementById("noBtn");
const Btn = document.getElementById("Btn");
 let scale = 1;
 let opacity = 1;
function sayNo() {
  noBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
  scale += 0.55;
  Btn.style.transform = `scale(${scale})`;
  noBtn.style.opacity = "0.7";
  opacity -= 0.25;
    // prevent disappearing completely
  noBtn.style.opacity = opacity;
});
}




const images = ["assets/images/cute.gif", "assets/images/cute2.gif", "assets/images/cute3.gif"];
let index = 0;


gsap.from(".gsap", {
  opacity: 0,
  scale: 0.2,
  
});



