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

// jump in effect below

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "animate__fadeInUpBig",
        entry.isIntersecting
      );
      console.log(entry);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: "0" }
);

const cards = document.querySelectorAll(".addEffect");
console.log(cards);

cards.forEach((card) => {
  observer.observe(card);
});
