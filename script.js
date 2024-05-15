const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  // nav.classList.remove("openNav");
  // nav.classList.remove("closeNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.ad  ("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

var sliderImages = document.querySelectorAll('.slider img');

var i = 0;

function slider(){
  for(var j = 0; j < sliderImages.length; j++){
    sliderImages[j].style.opacity = 0;
  }
  sliderImages[i].style.opacity = 1;

  if(i < sliderImages.length - 1){
    i++; 
  } else { 
    i = 0;
  }

}

setInterval(slider, 2000);

document.addEventListener("DOMContentLoaded", function() {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle scroll event
  function handleScroll() {
      var aboutUsSection = document.getElementById('aboutUs');
      var gallerySection = document.getElementById('gallary');

      // Check if About Us section is in viewport
      if (isInViewport(aboutUsSection)) {
          var aboutUsImg = document.querySelector('#aboutUs .drop-effect-on-scroll');
          aboutUsImg.classList.add('drop-effect');
      }

      // Check if Gallery section is in viewport
      if (isInViewport(gallerySection)) {
          var galleryImgs = document.querySelectorAll('#gallary .drop-effect-on-scroll');
          galleryImgs.forEach(function(img) {
              img.classList.add('drop-effect');
          });
      }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});
