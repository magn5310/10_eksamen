const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
  console.log("active");
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
});

document.querySelectorAll(".navknap").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
