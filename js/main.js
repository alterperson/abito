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
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});