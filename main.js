const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");
const offCanvas = document.querySelector(".offcanvas");

offCanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offCanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});
