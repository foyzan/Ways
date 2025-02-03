function loadingAnimation() {
  gtl = gsap.timeline();
  gtl.to("#loader", {
    display: "block",
  });
  gtl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  gtl.from(".line1-left", {
    opacity: 0,
    duration: 0.3,
    onStart: function () {
      const h5timer = document.querySelector(".line1-left h5");
      let grow = 0;
      let timer = setInterval(function () {
        if (grow === 100) {
          clearInterval(timer);
        } else {
          grow++;
          h5timer.innerHTML = grow;
        }
      }, 40);
    },
  });

  gtl.to(".line3 h2", {
    animationName: "anime",
    opacity: 1,
  });

  gtl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 4,
  });

  gtl.from("#page1", {
    delay: 0.2,
    y: "100vh",
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });
  gtl.to("#loader", {
    display: "none",
  });
  gtl.from(".hero-line h1",{
    y: 150,
    stagger:0.2,
    delay: -0.5
  })
}


function cusrEffect(){
  document.addEventListener("mousemove", function(event){
    gsap.to("#crsr", {
      left:event.x,
      top:event.y
    })
  })
  
  Shery.makeMagnet(".logo, nav ul li");
}
loadingAnimation()
cusrEffect()