function loadingAnimation() {
  const tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#loader .line .line1-left", {
    opacity: 0,
    onStart: () => {
      const loaderTimerH5 = document.querySelector(
        "#loader .line .line1-left h5"
      );
      let time = 0;
      const timerFunction = setInterval(() => {
        if (time > 99) {
          clearInterval(timerFunction);
        } else {
          time++;
          loaderTimerH5.textContent = time;
        }
      }, 40);
    },
  });
  tl.to("#loader .line h2", {
    opacity: 1,
    AnimationName: "nowEffect",
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.6,
    delay: 2,
    display: "none",
  });
  tl.from("#page1", {
    opacity: 0,
    y: 1800,
    duration: 0.8,
    ease: "power4",
    delay: 0.2,
  });
  tl.from("nav", {
    opacity:0
  })
  tl.from("#page1 .hero .hero-line h1",{
    y: 150,
    stagger: 0.25,
    duration: 0.4,
    delay: 0.2,
  })
}

function cusrEffect() {
  document.addEventListener("mousemove", function (event) {
    gsap.to("#crsr", {
      left: event.x,
      top: event.y,
      duration: 0,
    });
  });

  Shery.makeMagnet("nav ul li", {});
}

loadingAnimation();
cusrEffect();
