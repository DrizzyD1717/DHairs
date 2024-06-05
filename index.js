let closeBtn = document.querySelector(".close-btn");
let mobileMenu = document.querySelector(".navigation");
let mobileMenuBrown = document.querySelector(".nav");
let openMenu = document.querySelector(".open-menu");

let hamburger = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
});

mobileMenuBrown.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
});

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
});
