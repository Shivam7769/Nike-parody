function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveanimation()

function videoanimation(){
    var video = document.querySelector("#videobox")
var crsr = document.querySelector(".playcrsr")

video.addEventListener("mouseenter",function(){
    gsap.to(crsr, {
        transform: "translate(-50%,-50%) scale(1)"
})
})
video.addEventListener("mouseleave",function(){
    gsap.to(crsr,{
        transform: "translate(-50%,-50%) scale(0)"
        })
})
video.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
       left: dets.x,
        top: dets.y,
        })
})
}

videoanimation()

function vid_text_animation(){
    gsap.from("#page1 h1",{
        y:60,
        duration:0.5,
        opacity:0,
        delay:0.4,
        stagger:0.5
    })
    gsap.from("#videobox",{
        y:60,
        scale:0.5,
        duration:0.5,
        opacity:0,
        delay:0.8,
    })
}

vid_text_animation()
Shery.makeMagnet("#elem2")

document.addEventListener("mousemove",function(dets){
    gsap.to("#crsrmain",{
        left:dets.x,
        top:dets.y
    })
})


    gsap.to(".HUGE h1",{
        transform: "translateY(-130%)",
        scrollTrigger:{
            trigger: "#page1",
            scroller: "#main",
            start: "100vh",
            end: "100vh",
            scrub: 2
        }
    })
    gsap.to(".HUGE img",{
        transform: "translateY(-70%)",
        scrollTrigger:{
            trigger: "#page1",
            scroller: "#main",
            start: "100vh",
            end: "100vh",
            scrub: 2
        }
    })

    gsap.to("#nav-elems a",{
        transform: "translateY(-250%)",
            opacity: 0,
        scrollTrigger:{
            trigger: "#page1",
            scroller: "#main",
            start: "100vh",
            end: "100vh",
            scrub: 1
        }

    })












