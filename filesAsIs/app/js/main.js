'use strict';
var mySwiper = new Swiper('#header-slider', {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.header-slider-pagination',
        bulletClass:'pagination-bullet',
        bulletActiveClass: 'pagination-bullet-active',
        clickable: true,
      },
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.navbar');
menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('navbar-active');
});
