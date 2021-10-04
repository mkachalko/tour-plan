$(document).ready(function() {
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
    document.querySelector('.header-bottom').classList.toggle('header-bottom_mobile_visible'),
    body.toggleClass('lock');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeButton = $('[data-toggle=close]');
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  var body = $('body');

  modalButton.on('click', openModal);
  closeButton.on('click', closeModal);

  function openModal() {
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
    body.addClass('lock');
  }
  function closeModal(event) {
    
    event.preventDefault()
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
    body.removeClass('lock');
    
  }

  $(document).on('keydown', function(event){
    if(event.key == 'Escape'){
      event.preventDefault();
      modalOverlay.removeClass('modal__overlay_visible');
      modalDialog.removeClass('modal__dialog_visible');
      body.removeClass('lock');
    }
  });

  $('.form, .subscription__form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 18
        }
      },
      messages: {
        name: {
          required: "Please specify your name"
        },
        phone: {
          required: "We need your phone number to contact you",
          minlength:"Your phone number must be 11 characters long"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
    });
  });

  $('[name=phone]').mask('+7 (999) 999-99-99', {
    translation: {9: {pattern: /[0-9]/}}
  });

})
