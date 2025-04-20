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