var header = document.getElementById("header");
let allow = true;
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 80 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    setTimeout(() => {
      header.classList.add("stick");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("stick");
    }, 190);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});

var closeBtn = document.getElementById("close-btn");
var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  // centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 6,
    },
  },
});
