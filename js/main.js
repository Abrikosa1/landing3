'use strict';
new WOW().init();

const mySwiper = new Swiper('#header-slider', {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.header-slider-pagination',
        bulletClass:'pagination-bullet',
        bulletActiveClass: 'pagination-bullet-active',
        clickable: true,
      },
});

const menuButton = document.querySelector('.menu-button'),
      imgWrapper = document.querySelectorAll('.img-wrapper'),
      contactForm = document.querySelector('.contact-form'),
      navbar = document.querySelector('.navbar');


      

const formSubmit = event => {
  event.preventDefault();
    
/*   const data = new FormData(event.target);
  
  fetch('server.php', {
      method: 'POST',
      header: {
          'Content-Type': 'multipart/form-data'
      },
      body: data,
  }); */
};
    


imgWrapper.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.querySelector('img').style.transform = "scale(-1, 1)"; 
  });
});


imgWrapper.forEach(element => {
  element.addEventListener('mouseout', () => {
    element.querySelector('img').style.transform = "scale(1, 1)"; 
  });
});

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button-active');
  navbar.classList.toggle('navbar-active');
});


contactForm.addEventListener('submit', formSubmit);