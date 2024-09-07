var swiper = new Swiper(".mySwiper", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,  
    // Breakpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },