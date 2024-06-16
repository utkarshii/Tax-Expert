var t = gsap.timeline()

t.from("nav .navbar .navbar-left img,nav .navbar .navbar-mid h1,nav .navbar .navbar-end a",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.2
})

t.from("main .main-body .main-right img",{
  x:100,
  opacity:0,
  duration:2
})

t.from("main .main-body .main-left .name h1 , main .main-body .main-left .name h4 , main .main-body .main-left .profile h2 , main .main-body .main-left .profile p",{
    x:-100,
    opacity:0,
    stagger:0.2,
    duration:1
})
// t.from("h5",{
//     scale:0,
//     opacity:0
// })

// t.to("h5",{
//     y:40,
//     repeat:-1,
//     duration:1,
//     yoyo:true
// })