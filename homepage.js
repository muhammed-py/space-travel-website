gsap.registerPlugin(ScrollTrigger);





gsap.to('.section_2', {
    scrollTrigger: {
        trigger: '.section_2',
        toggleActions:'restart pause reverse pause',
        end:' top top',
        scrub: 3,
    },
    y:-200,
    duration: 3,
})

gsap.to('.text_1', {
    scrollTrigger: {
        trigger: '.text_1',
        toggleActions: 'restart pause reverse reset',
        scrub: 3,
    },
    x: 0,
    opacity:1,
    duration: 3,
})

gsap.to('.text_2', {
    scrollTrigger: {
        trigger: '.text_1',
        toggleActions: 'restart pause reverse reset',
        scrub: 1,
    },
    opacity: 1,
    duration: 1,
})















gsap.to('.test', {
    scrollTrigger: {
        trigger: '.test',
        toggleActions: 'restart pause reverse pause',
        start: 'top center',
    },
    x: 700,
    rotation: 360,
    duration: 3,
})
