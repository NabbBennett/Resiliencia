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
