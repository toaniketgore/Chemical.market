gsap.from(".animated-image", {
  opacity: 0,
  y: -300,
  //   duration:2,
  // rotate: -10,
  scrollTrigger: {
    trigger: ".about-image-container",
    scroller: "body",
    start: "top 50%",
    end: "top 10%",
    scrub: true,
  },
});
const tl = gsap.timeline();

tl.from(".video-container video", {
  opacity: 0.5,
  scale: 0.5,
  duration: 1,
  ease: "power1.out",
})
  .from(
    ".video-text-content",
    {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "power1.out",
    },
    "-=0.5"
  )
  .from(
    ".navigation-bar",
    {
      opacity: 0,
      scale: 0.7,
      duration: 1,
      ease: "power1.out",
    },
    "-=0.5"
  );

gsap.from(".owl-carousel", {
  x: 2900,
  scrollTrigger: {
    trigger: ".products-container",
    scroller: "body",
    start: "top 80%",
    end: "top 10%",
    scrub: true,
    markers: true,
  },
});
