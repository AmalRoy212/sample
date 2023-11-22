
//scroll effect from locomotive

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

//video section animation 

function videoSectionAnimation(){
  const videoContainer = document.querySelector("#video-container");
  const playButton = document.querySelector("#play");

  videoContainer.addEventListener("mouseenter", function () {
    gsap.to(playButton, {
      scale: 1,
      opacity: 1
    })
  })

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(playButton, {
      scale: 0,
      opacity: 0
    })
  })

  videoContainer.addEventListener("mousemove", function (dets) {
    gsap.to(playButton, {
      left: dets.x - 50,
      top: dets.y - 60
    })
  })
}

//Title animation 

function headingAnimation(){
  gsap.from("#page1 h1", {
    y : 100,
    opacity : 0,
    delay : 0.5,
    duration : 0.9,
    stagger : 0.3,
  })

  gsap.from("#page1 #video-container", {
    scale : 0.9,
    opacity : 0,
    delay : 1.3,
    duration : 0.5,
  })
}

videoSectionAnimation();
headingAnimation();