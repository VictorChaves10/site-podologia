
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

 

  const toggleLogo = () => {
    let header = select('#header');
    let logoBranca = select('img[src="imagens/logo-branca-sm.svg"]');
    let logoVerde = select('img[src="imagens/logo-verde-sm.svg"]');

    if (header.classList.contains('header-scrolled')) {
      // Se o header possui a classe 'header-scrolled', exibe a logo verde
      logoBranca.style.display = 'none';
      logoVerde.style.display = 'inline';
    } else {
      // Se o header não possui a classe 'header-scrolled', exibe a logo branca
      logoBranca.style.display = 'inline';
      logoVerde.style.display = 'none';
    }
  }

  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }

      // Chama a função toggleLogo para alternar entre as imagens da logo
      toggleLogo();
    }

    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  // Chama a função toggleLogo quando a página é carregada
  window.addEventListener('load', toggleLogo);

  new PureCounter();
  

})()