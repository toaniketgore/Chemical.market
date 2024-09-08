if (window.innerWidth > 1024) {
  gsap.from(
    ".animated-image",
    {
      opacity: 0,
      y: -300,
      scrollTrigger: {
        trigger: ".about-image-container",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        markers: false,
        scrub: true,
      },
    },
    "-=0.5"
  );

  const tl = gsap.timeline();

  tl.from(".video-container video", {
    opacity: 0.5,
    scale: 0.5,
    duration: 1,
    ease: "power1.out",
  }).from(
    ".video-text-content",
    {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "power1.out",
    },
    "-=0.5"
  );
  // .from(
  //   ".navigation-bar",
  //   {
  //     opacity: 0,
  //     scale: 0.7,
  //     duration: 1,
  //     ease: "power1.out",
  //   },
  //   "-=0.5"
  // );
}
