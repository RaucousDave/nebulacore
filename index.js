document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const close = document.getElementById("close-icon");

  hamburger.addEventListener("click", () => {
    menu.classList.remove("hidden");
  });
  close.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});
