var hearts = document.querySelectorAll('.hearts');
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.style.backgroundColor = 'red';
        heart.style.transform = 'scale(1.2)';
        
        heart.addEventListener('click', () => {
        heart.style.backgroundColor = '#353535';
        heart.style.transform = 'scale(1)';

        
        });
    });
});
tl = gsap.timeline();

tl.from(".loader", {
    opacity: 0,
    onStart: function () {
        var h2timer = document.querySelector(".loaderH1");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
            h2timer.innerHTML = grow++;
        } else {
          h2timer.innerHTML = grow;
        }
    }, 27);
},
});
tl.from(".hero h1", {
    y: 150,
    duration:1.4
    
  })
  tl.to(".mains", {
    y: -1000,
    stagger: 0.6,
  })
tl.from("#nav img , #nav h3,#nav button,#nav i",{
    y:-500,
    stagger:0.2,
    duration:0.7
})
tl.from("#text h2 ,.elem h1, .btn",{
    y:500,
    stagger:0.2,
    duration:1
})