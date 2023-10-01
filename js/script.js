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
