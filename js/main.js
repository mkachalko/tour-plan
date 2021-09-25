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

$('.subscription').parallax({
  imageSrc: 'img/bg-subscription.jpg',
  speed: 0.5
});