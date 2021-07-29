'use strict';

const menuBtn = document.querySelector('.menu-button');
const menuCloseBtn = document.querySelector('.close-menu');
const menu = document.querySelector('.navbar-panel');
menuBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
});
menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 10
    },
  },
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});