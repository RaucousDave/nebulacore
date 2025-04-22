const menu = document.getElementById("mobile-menu");
const openBtn = document.getElementById("mobile-menu-btn");
const closeBtn = document.getElementById("close-icon");

openBtn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
  menu.classList.add("translate-x-0");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("translate-x-0");
  menu.classList.add("translate-x-full");
});
