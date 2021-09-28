const hotelSwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },
  
  keyboard: {
    enablet: 'true'
  }

});

const reviewsSwiper = new Swiper('.reviews-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-swiper__button_next',
    prevEl: '.reviews-swiper__button_prev',
  },
  
  keyboard: {
    enablet: 'true'
  }

});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function(){
  console.log('Клик по кнопке'),
  document.querySelector('.header-bottom').classList.toggle('header-bottom_mobile_visible')
});