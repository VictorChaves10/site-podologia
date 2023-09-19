window.addEventListener('resize', function () {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  var menuItems = document.querySelector('.itens-menu');
  var menuButton = document.querySelector('.navbar-toggler');

  if (screenWidth < 768) {
      menuItems.classList.add('d-none');
      menuButton.classList.remove('d-none');
  } else {
      menuItems.classList.remove('d-none');
      menuButton.classList.add('d-none');
  }
});

// Disparar o evento resize ao carregar a página
window.dispatchEvent(new Event('resize'));




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
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
