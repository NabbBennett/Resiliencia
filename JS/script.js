let lastScroll = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scroll hacia abajo
    header.style.top = "-100px";
  } else {
    // scroll hacia arriba
    header.style.top = "0";
  }

  lastScroll = currentScroll;
});
