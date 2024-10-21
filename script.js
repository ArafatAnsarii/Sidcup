var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})
document.addEventListener("mousemove", function(dets){
blur.style.left=dets.x-250+"px"
blur.style.top=dets.y-250+"px"
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 5
        crsr.style.border = "0.1px solid white"
        crsr.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"

    })
})


gsap.to("#nav", {
    backgroundColor: "black",
    delay:0.8,
    height: "115px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -50px",
        end: "top -12px",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start : "top -30%",
        end : "top -80%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub: 2
    }
})
