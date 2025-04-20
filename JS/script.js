document.addEventListener("DOMContentLoaded", function () {
    let lastScroll = 0;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling hacia abajo
        navbar.classList.add("ocultar");
      } else {
        // Scrolling hacia arriba
        navbar.classList.remove("ocultar");
      }

      lastScroll = currentScroll;
    });
});

document.querySelector('.btn-blanco').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector('#MisionVision');
  const headerOffset = 10; 
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = targetPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});
