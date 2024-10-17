// document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const dropdownToggle = document.querySelector("#sidebar .dropdown > a");
  const submenu = document.querySelector("#sidebar .submenu");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    this.classList.toggle("active");
  });

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });

  let lastScrollTop = 0;
  let isScrolling;

  window.addEventListener(
    "scroll",
    function () {
      hamburger.style.opacity = "0";
      clearTimeout(isScrolling);

      isScrolling = setTimeout(function () {
        hamburger.style.opacity = "1";
      }, 250);

      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    false
  );
// });
