let lastScrollY = window.scrollY;
const navBar = document.querySelector(".navigation-bar");

let scrollTimeout;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide the navbar
    navBar.classList.add("hidden");
  } else {
    // Scrolling up, show the navbar
    navBar.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;

  // Clear the previous timeout
  clearTimeout(scrollTimeout);

  // Set a new timeout to show the navbar after scrolling stops
  scrollTimeout = setTimeout(() => {
    navBar.classList.remove("hidden");
  }, 300); // Adjust this value to change how quickly the navbar appears after scrolling stops
});
