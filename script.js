var tl = gsap.timeline();


tl.from('nav img',{
    y : -30,
    opacity: 0,
    delay: .3,
    ease: 'expo.easeInOut'
})
.from('nav #links a',{
    stagger: .2,
    y : -40,
    opacity: 0,
    ease: 'expo.easeInOut'
})
.from('nav>a',{
    y : -30,
    opacity: 0,
    ease: 'expo.easeInOut'
})
.from('#main .elem',{
    stagger: .2,
    y : 30,
    opacity: 0,
    ease: 'expo.easeInOut'
})
.from('#bigimg img',{
    scale : 1.05,
    opacity: 0,
    y: 30,
    ease: 'expo.easeInOut'
})

gsap.from('#enterlevel .entrelem',{
    scrolltrigger:{
        trigger: '#enterlevel',
        toggleActions: "play pause resume revers",
    },
    stagger: .4,
    y: 30,
    duration: 1,
    opacity: 0,
    ease:'expo.easeInOut'
})
gsap.from('#crsbanner .crselem',{
    scrolltrigger:{
        trigger: '#crsbanner',
        toggleActions: "play pause resume revers",
    },
    stagger: .4,
    y: 50,
    duration: 1,
    delay: 2,
    opacity: 0,
    ease: 'expo.easeInOut'
})

gsap.from('#brandwork .brelem',{
    scrolltrigger:{
        trigger: '#brandwork',
        toggleActions: "play pause resume revers",
    },
    stagger: .2,
    y: 50,
    duration: 1,
    opacity: 0,
    ease: 'expo.easeInOut'
})


gsap.from('#showcase .shwelem',{
    scrolltrigger:{
        trigger: '#showcase',
        toggleActions: "play pause resume revers",
    },
    stagger: .4,
    x: -50,
    opacity: 0,
    ease: 'expo.easeInOut'
})

var tl2 = gsap.timeline();

tl2.from('#statstext .sttselem',{
    scrolltrigger:{
        trigger: '#statstext',
        toggleActions: "play pause resume revers",
    },
    stagger: .4,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut'
})

.from('#cards .card',{
    scrolltrigger:{
        trigger: '#cards',
        toggleActions: "play pause resume revers",
    },
    stagger: .4,
    x: 30,
    opacity: 0,
    ease: 'expo.easeInOut'
})


.from('#footer .footelem',{
    scrolltrigger:{
        trigger: '#footer',
        toggleActions: "play pause resume revers",
    },
    stagger: .4,
    x: 30,
    opacity: 0,
    ease: 'expo.easeInOut'
})
























