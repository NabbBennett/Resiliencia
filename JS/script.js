//header reaccion
document.addEventListener("DOMContentLoaded", function () {
  let lastScroll = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
      navbar.classList.add("ocult");
    } else {
      navbar.classList.remove("ocult");
    }

    lastScroll = currentScroll;
  });
});   

//testimonios animaciones
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.testimonials-swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: 40,
  speed: 600,
  effect: 'coverflow',
  coverflowEffect: {
      rotate: 0,
      stretch: -50, 
      depth: 150, 
      modifier: 1,
      slideShadows: false
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  });
});

// Acordeón FAQ
document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      
      header.addEventListener('click', function() {
          // Cierra otros acordeones primero
          document.querySelectorAll('.accordion-item').forEach(otherItem => {
              if (otherItem !== item) {
                  const otherHeader = otherItem.querySelector('.accordion-header');
                  const otherContent = otherItem.querySelector('.accordion-content');
                  
                  otherHeader.classList.remove('active');
                  otherContent.classList.remove('active');
                  otherContent.style.maxHeight = '0';
              }
          });
          
          // Alterna el acordeón clickeado
          const isActive = header.classList.contains('active');
          
          header.classList.toggle('active');
          content.classList.toggle('active');
          
          if (!isActive) {
              // Abre suavemente
              content.style.maxHeight = content.scrollHeight + 'px';
          } else {
              // Cierra suavemente
              content.style.maxHeight = '0';
          }
      });
      
      // Asegura que el contenido esté cerrado al inicio
      content.style.maxHeight = '0';
  });
});