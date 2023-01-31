// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika humburger menu di klik
document.querySelector("#hum-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hum-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
