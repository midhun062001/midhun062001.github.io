document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;
});

const typed = new Typed('.auto-typed', {
  strings: ['Software Engineer','Java Developer','Traveller'],
  typeSpeed: 60,
  loop: true,
  cursorChar: '_'
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      600: {
          slidesPerView: 2,
      },
      1100: {
          slidesPerView: 3,
      },
  },
});

document.getElementById('drop-btn').addEventListener('click',openNav);
document.getElementById('close-btn').addEventListener('click',closeNav);

function openNav() {
  document.querySelector(".overlay").style.width = "100%";
}

function closeNav() {
  document.querySelector(".overlay").style.width = "0px";
}