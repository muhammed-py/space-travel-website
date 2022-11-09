const earth = document.querySelector('.earth'),
    hiddenElement = document.querySelector('.hidden');





window.addEventListener('scroll', function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
    if (scroll >= 50) {
        earth.classList.add('earth_scroll')
    } else { earth.classList.remove('earth_scroll') }

    if (scroll >= 50) {
        hiddenElement.classList.add('show');
    } else { hiddenElement.classList.remove('show'); }
    
    // if (scroll >= 500) {
    //     hiddenElement.classList.add('show');
    // } else { hiddenElement.classList.remove('show'); }
    
})