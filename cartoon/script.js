const track = document.querySelector(".slider-track");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
const totalImages = 10;
const imageWidth = 500; // Same as CSS width

nextBtn.addEventListener("click", () => {
    index++;

    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${index * imageWidth}px)`;

    // Infinite Loop Reset
    if (index === totalImages) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = `translateX(0px)`;
        }, 500);
    }
});

prevBtn.addEventListener("click", () => {
    if (index === 0) {
        // Jump to last duplicate set
        track.style.transition = "none";
        index = totalImages;
        track.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    setTimeout(() => {
        index--;
        track.style.transition = "transform 0.5s ease";
        track.style.transform = `translateX(-${index * imageWidth * 2}px)`;
    }, 20);
});



const pokemonImage = document.getElementById("left-img");
const pokemonName = document.getElementById("heading");
const pokemonDescription = document.getElementById("pokemon-description");
const container = document.getElementById("second");
const nextBtn2 = document.getElementById("next2")
const prevBtn2 = document.getElementById("prev2")
const nextimg = document.getElementById("upper-img")
const previmg = document.getElementById("lower-img")


// Remove curly braces because of 'export default'
import pokemonData from "./pokemondata.js";

// ... keep your slider code ...

let currentIndex = 0;

// I'll use nextBtn2 as the example, you can apply to prevBtn2 too
// Function to update the Pokemon Section UI
function updatePokemonUI(newIndex) {
    currentIndex = newIndex;

    // 1. Calculate safe neighbors using wrap-around logic
    const data = pokemonData[currentIndex];
    const nextIndex = (currentIndex + 1) % pokemonData.length;
    const prevIndex = (currentIndex - 1 + pokemonData.length) % pokemonData.length;

    const nextdata = pokemonData[nextIndex];
    const prevdata = pokemonData[prevIndex];

    // 2. Update Content
    pokemonName.textContent = data.name;
    pokemonDescription.textContent = data.description;
    pokemonImage.src = data.image;
    
    // Update Decoration images
    nextimg.src = nextdata.image;
    previmg.src = prevdata.image;
    
    // 3. Smooth background transition with GSAP
    gsap.to("#second", {
        backgroundImage: data.backgroundcolor,
        duration: 0.8,
        ease: "power2.out"
    });
    gsap.from("#lower-img",{
        opacity:1,
        x:100,
        y:-100,
        scale:1.4,
        duration:0.8,
    })
    gsap.from("#left-img",{
        opacity:1,
        x:100,
        y:-100,
        scale:0.4,
        duration:0.8,
    })
    gsap.from("#upper-img",{
        opacity:0,
        duration:0.8,
        scale:0.4
    })
    gsap.from("#heading",{
        opacity:0,
        y:-50,
        duration:0.5,
    })
    gsap.from("#pokemon-description",{
        opacity:0,
        x:50,
        duration:0.5,
    })
}

// Next Button Click
nextBtn2.addEventListener('click', () => {
    let nextIdx = (currentIndex + 1) % pokemonData.length;
    updatePokemonUI(nextIdx);
});

// Previous Button Click
prevBtn2.addEventListener('click', () => {
    // Formula to wrap backwards: (current - 1 + length) % length
    let prevIdx = (currentIndex - 1 + pokemonData.length) % pokemonData.length;
    updatePokemonUI(prevIdx);
});
