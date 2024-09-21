gsap.from(".animelem , .animelem2", {
  opacity: 0,
  x: -100,
  scrollTrigger: {
    trigger: ".maincontfood",
    // markers: true,
    scroller: "body",
    start: "top 75%",
    scrub: true,
    end: "top 45%",
  },
});
gsap.from(".animelem3, .animelem4", {
  opacity: 0,
  x: 100,
  scrollTrigger: {
    trigger: ".maincontfood",
    scrub: true,
    // markers: true,
    scroller: "body",
    start: "top 75%",
    end: "top 45%",
  },
});
