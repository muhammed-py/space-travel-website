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
        trigger: '.section_1',
        start: 'top bottom',
        toggleActions: 'restart pause reverse reset',
        scrub: 3,
    },
    x: 0,
    opacity:1,
    duration: 1,
})

gsap.to('.text_2', {
    scrollTrigger: {
        trigger: '.section_2',
        start: 'center bottom',
        toggleActions: 'restart pause reverse reset',
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
        end: 'center center',
        scrub: 3,
    },
    opacity:1,
    duration: 3,
})

gsap.to('.container_2', {
    scrollTrigger: {
        trigger: '.container_2',
        toggleActions: 'restart pause reverse none',
        end: 'bottom top',
        pin:true,
        scrub: 3,
    },
    opacity:1,
    duration: 3,
})

gsap.to('.section_5', {
    scrollTrigger: {
        trigger: '.section_5',
        toggleActions: 'restart pause reverse none',
        start:'top top',
        scrub: 3,
    },
    opacity: 1,
    duration: 3,
})

gsap.to('.section_6', {
    scrollTrigger: {
        trigger: '.section_6',
        toggleActions: 'restart pause reverse none',
        start: '50vh top',
        scrub: 3,
    },
    opacity: 1,
    duration: 3,
})

gsap.to('.section_7', {
    scrollTrigger: {
        trigger: '.section_7',
        start: 'top 10%',
        endTrigger:'.section_9',
        end:'center top',
        toggleActions: 'restart pause reverse none',
        scrub: 3,
        pin:true,
    },
    x:600,
    duration: 2,
})

gsap.to('.section_8', {
    scrollTrigger: {
        trigger: '.section_8',
        toggleActions: 'restart pause reverse none',
        start: 'center center',
        scrub: 3,
        pin:true,
    },
    opacity: 0,
    duration: 2,
})

gsap.to('.section_9', {
    scrollTrigger: {
        trigger: '.section_9',
        start: 'top 10%',
        endTrigger: '.section_9',
        end: 'center top',
        toggleActions: 'restart pause reverse none',
        scrub: 3,
        pin: true,
    },
    opacity:1,
    duration: 2,
})















