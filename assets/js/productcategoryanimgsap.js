// let tl = gsap.timeline();

gsap.from(".filter-desc", {
  opacity: 0,
  x: -150,
  //   ease: "power4.inOut",
  // stagger: 0.2,
  scrollTrigger: {
    trigger: ".belowfiltersection",
    start: "top 80%",
    end: "top 50%",
    // markers: true, 
    scrub: true,
  },
});

gsap.from(".grid-item img", {
  scale: 1.3,
  opacity: 0,
  ease: "elastic.out(1, 0.3)",
  duration: 1,
  scrollTrigger: {
    trigger: ".belowfiltersection",
    start: "top 80%",
    end: "top 50%",
    // markers: true,
    scrub: true,
    toggleActions: "restart none none reverse",
  },
});
