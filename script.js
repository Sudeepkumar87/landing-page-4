const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// this code is for hamburger menu end here
const navBar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navBar.classList.add("navActive");
  } else {
    navBar.classList.remove("navActive");
  }
};
