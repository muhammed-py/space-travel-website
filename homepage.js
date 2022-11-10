gsap.registerPlugin(ScrollTrigger);


gsap.to('.section_2', {
    scrollTrigger: {
        trigger: '.section_2',
        toggleActions:'restart pause reverse pause',
        end:' top top',
        scrub: 3,
    },
    y:-100,
    duration: 1,
})

gsap.to('.text_1', {
    scrollTrigger: {
        trigger: '.text_1',
        toggleActions: 'restart pause reverse reset',
        scrub: 3,
    },
    x: 0,
    opacity:1,
    duration: 1,
})

gsap.to('.text_2', {
    scrollTrigger: {
        trigger: '.text_1',
        toggleActions: 'restart pause reverse reset',
        start:'top 25%',
        scrub: 1,
    },
    opacity: 1,
    duration: 1,
})


gsap.to('.section_3', {
    scrollTrigger: {
        trigger: '.text_2',
        toggleActions: 'restart pause reverse reverse',
        endTrigger:'.section_3',
        end:'top center',
        scrub: 3,
    },
    y: -250,
    duration: 3,
})

gsap.to('.section_4', {
    scrollTrigger: {
        trigger: '.section_4',
        toggleActions: 'restart pause reverse none',
        ennd: 'center center',
        scrub: 3,
    },
    opacity:1,
    duration: 3,
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
