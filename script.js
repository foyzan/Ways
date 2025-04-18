function LocomotiveScrollTriggerPlate(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


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
    delay: 3,
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
    opacity: 0
  })
  tl.from("#page1 .hero .hero-line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.4,
    delay: 0.2,
  })
  tl.from(".hero, #page2", {
    opacity:0,
  },"-=1.2")
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
LocomotiveScrollTriggerPlate()