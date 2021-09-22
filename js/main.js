const swiper = new Swiper('.swiper', {
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