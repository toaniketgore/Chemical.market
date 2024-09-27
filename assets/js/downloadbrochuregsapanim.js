gsap.from(".bottle", {
  opacity: 0,
  y: -140,
  x: 200,
  rotation: 40,
  scrollTrigger: {
    // markers: true,
    trigger: ".rightpart",
    scrub: true,
    start: "top 50%",
    end: "top 5%",
    rotate: 160,
  },
});
