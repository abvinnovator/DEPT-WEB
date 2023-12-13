

let slideIndex = 1;
let intervalId;

showSlides(slideIndex);

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function moveSlide(x) {
  showSlides((slideIndex += x));
  clearInterval(intervalId);
  intervalId = setInterval(() => moveSlide(1), 4000);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

next.addEventListener("click", () => moveSlide(1));
prev.addEventListener("click", () => moveSlide(-1));

const slideshowContainer = document.querySelector(".align-items-center");

function stopSlideShow() {
  clearInterval(intervalId);
}

function startSlideShow() {
  intervalId = setInterval(() => moveSlide(1), 4000);
}

slideshowContainer.addEventListener("mouseenter", stopSlideShow);
slideshowContainer.addEventListener("mouseleave", startSlideShow);

intervalId = setInterval(() => moveSlide(1), 4000);
