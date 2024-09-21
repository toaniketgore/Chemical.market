gsap.from(".animelem1 , .animelem2", {
  opacity: 0,
  x: -50,
  scrollTrigger: {
    trigger: ".maincont",
    // markers: true,
    scroller: "body",
    start: "top 80%",
    scrub: true,
    end: "top 45%",
  },
});
gsap.from(".animelem3, .animelem4", {
  opacity: 0,
  x: 50,
  scrollTrigger: {
    trigger: ".maincont",
    scrub: true,
    // markers: true,
    scroller: "body",
    start: "top 80%",
    end: "top 45%",
  },
});

gsap.from(".champaflower", {
  y: -300,
  opacity: 0,
  rotate: 100,
  scrollTrigger: {
    trigger: ".maincont",
    scroller: "body",
    scrub: true,
    // markers: true,
    start: "top 90%",
    end: "top 20%",
  },
});

// gsap.fromTo(".champaflower",
//     { opacity: 0, y: 600 },
//     {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//             trigger: ".maincont",
//             scroller: "body",
//             start: "top 50%",
//             end: "top 20%",
//         }
//     }
// );
