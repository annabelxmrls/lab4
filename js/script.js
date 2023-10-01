
document.addEventListener('DOMContentLoaded', init)

function init() {

  const prev_btn = 
document.querySelector(".prev.btn");
  const next_btn = 
document.querySelector(".next-btn");
  const frame = 
document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");


// images controls
slides.forEach((slide) => {
  slide.classList.add("hide");
});

slides[0].classList.remove("hide");

next_btn.addEventListener("click",changeSlide);
prev_btn.addEventListener("click",changeSlide);

}

//slideshow
function changeSlide(e) {

  e.preventDefault();

  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
  let showing = document.querySelector(".current");
  let nextUp = "";

  if(e.target.className == 'next-btn') {
    nextUp = showing.nextElementSibling;
  }

  if(e.target.className == 'prev-btn') {
    nextUp = showing.previousElementSibling
  }

  showing.classList.toggle("hide");
  showing.classList.toggle("current");

  if (!nextUp) {
    nextUp = slides[slides.length - 1];
  }

  if (nextUp.nodeName !== "IMG") {
    nextUp = slides[0];
  }

  nextUp.classList.toggle("hide");
  nextUp.classList.toggle("current");
}