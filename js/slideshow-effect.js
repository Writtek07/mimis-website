var slideIndex = 0;
var delayTime = 4000; // set delay time in milliseconds
var timer;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  clearTimeout(timer);
  timer = setTimeout(showSlides, delayTime); // Change image every 3 seconds
}

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
