let slideIndex = 1;
showSlides(slideIndex);

const closemenu = document.getElementById("closeMenuIcon");
const menu = document.getElementById("nav-menu-container");
const burgerIcon = document.getElementById("burger-icon");

//slides open the mobile navigation bar into view onclick. 
burgerIcon.onclick=()=>{
menu.style.width="65%";
   }
 
   //closes the mobile navigation view onclick.
closemenu.onclick=()=>{
    menu.style.width="0";
    }


// CAROUSEL BUTTONS CONTROLS
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myCarousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


