
document.addEventListener("DOMContentLoaded",function(){


  console.log("Page loaded!");
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

})

//Scroll Gallery 1
const slider = document.querySelector(".scroll-gallery");
const cards = document.querySelectorAll(".card");

const gap = 30; 
const cardWidth = cards[0].offsetWidth + gap;

document.getElementById("next2").addEventListener("click", () => {
  slider.scrollBy({
    left: cardWidth,
    behavior: "smooth"
  });
});

document.getElementById("prev2").addEventListener("click", () => {
  slider.scrollBy({
    left: -cardWidth,
    behavior: "smooth"
  });
});