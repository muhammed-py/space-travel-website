gsap.registerPlugin(ScrollTrigger);

let earth = document.querySelector('.earth'),
    moon = document.querySelector('.moon'),
    solar = document.querySelector('.solar'),
    earthImage = document.querySelector('.img_earth'),
    moonImage = document.querySelector('.img_moon'),
    solarImage = document.querySelector('.img_solar'),
    p1 = document.querySelector('.p1'),
    p2 = document.querySelector('.p2'),
    p3 = document.querySelector('.p3'),
    earthBook = document.querySelector('.earth_book');



earth.addEventListener('click', () =>{

    p1.classList.toggle('center');
    moon.classList.toggle('hidden');
    solar.classList.toggle('hidden');
    earthImage.classList.toggle('earth_enlarge');
    earthBook.classList.toggle('hide');
})

moon.addEventListener('click', () => {
    earth.classList.toggle('hidden');
    solar.classList.toggle('hidden');
    moonImage.classList.toggle('enlarge');
})

solar.addEventListener('click', () => {
    p3.classList.toggle('p3_center');
    solarImage.classList.toggle('solar_enlarge');
    earth.classList.toggle('hidden');
    moon.classList.toggle('hidden');
})
