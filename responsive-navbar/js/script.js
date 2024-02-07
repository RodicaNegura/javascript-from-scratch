const navToggle = document.querySelector(".nav-hamburger");
const links = document.querySelector("links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
})
