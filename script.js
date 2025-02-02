






gtl = gsap.timeline()

gtl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})
gtl.from(".line1-left, .line h2",{
    opacity: 0,
    duration: 0.3,
    onStart: function () {
        const h5timer = document.querySelector(".line1-left h5")
        let grow = 0
        let timer = setInterval(function () {
            if (grow === 100) {
                clearInterval(timer)
            }
            else {
                grow++
                h5timer.innerHTML = grow;
            }
        }, 40)
    }
})

gtl.to("#loader", {
    opacity:0,
    duration:0.4,
    delay:4
})





