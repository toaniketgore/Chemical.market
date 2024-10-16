document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const slides = slider.getElementsByTagName("img");
  const navDots = document.querySelectorAll(".slider-nav a");
  let currentIndex = 0;
  let autoSlideInterval;

  // Function to change the slide
  function changeSlide(index) {
    slider.scrollTo({
      left: slides[index].offsetLeft,
      behavior: "smooth",
    });
    updateActiveDot(index);
    currentIndex = index;
  }

  // Function to update active dot
  function updateActiveDot(index) {
    navDots.forEach((dot) => dot.classList.remove("active"));
    navDots[index].classList.add("active");
  }

  // Auto sliding function
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      changeSlide(currentIndex);
    }, 3000); // Slide every 3 seconds
  }

  // Event listener for dots
  navDots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      clearInterval(autoSlideInterval); // Stop auto sliding when clicked
      changeSlide(index);
      startAutoSlide(); // Restart auto slide after click
    });
  });

  // Start auto slide on page load
  startAutoSlide();
});
