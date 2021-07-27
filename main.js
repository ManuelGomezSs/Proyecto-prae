const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const  intervalTime =5000;
let slideInterval;

const nextSlide = () =>{
    //getcurrent class
    const current = document.querySelector('.current');
    // remove current class 
    current.classList.remove('current');// check for next slide
    if(current.nextElementSibling) {
        // add custom to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () =>{
    //getcurrent class
    const current = document.querySelector('.current');
    // remove current class 
    current.classList.remove('current');
    // check for pevious slide
    if(current.previousElementSibling) {
        // add custom to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto Slide
if(auto) {
    // Run next slide ar interval time
    sliderInterval = setInterval(nextSlide, intervalTime);
}