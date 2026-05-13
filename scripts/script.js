
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


//Scroll Gallery 2
const slider2 = document.querySelector(".scroll-gallery-2");
const cards2 = document.querySelectorAll(".card");

console.log(slider2);
console.log(cards2);

const gap2= 30; 
const cardWidth2 = cards2[0].offsetWidth + gap2;

document.getElementById("next3").addEventListener("click", () => {
  slider2.scrollBy({
    left: cardWidth2,
    behavior: "smooth"
  });
});

document.getElementById("prev3").addEventListener("click", () => {
  slider2.scrollBy({
    left: -cardWidth2,
    behavior: "smooth"
  });
});
// for nav-bar
const menuBtn = document.querySelector(".menu");

const navLefttexts = document.querySelectorAll(".left-texts");
const navRighttexts = document.querySelectorAll(".right-texts");

let menuExpanded = false;

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        // if menu NOT expanded
        if(!menuExpanded){

            menuBtn.classList.add("show-menu");

            navLefttexts.forEach(item => {
                item.classList.add("hide-nav");
            });

            navRighttexts.forEach(item => {
                item.classList.add("hide-nav");
            });

        }

    }
    else{

        // top position reset
        menuExpanded = false;

        menuBtn.classList.remove("show-menu");

        navLefttexts.forEach(item => {
            item.classList.remove("hide-nav");
        });

        navRighttexts.forEach(item => {
            item.classList.remove("hide-nav");
        });

    }

});


menuBtn.addEventListener("click", () => {

    menuExpanded = true;

    // hide menu icon
    menuBtn.classList.remove("show-menu");

    // show navbar texts
    navLefttexts.forEach(item => {
        item.classList.remove("hide-nav");
    });

    navRighttexts.forEach(item => {
        item.classList.remove("hide-nav");
    });

});

// for top button
// for top button
const topBtn = document.querySelector(".box")
window.addEventListener("scroll", () => {

  if (window.scrollY > 200) {
    topBtn.classList.add("box-active")
  } 
  else {
    topBtn.classList.remove("box-active")
  }

})

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })

})