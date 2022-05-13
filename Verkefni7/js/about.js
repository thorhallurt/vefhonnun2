const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

console.log("Starting slider")
const slider = [document.querySelector('#slide0'), document.querySelector('#slide1'), document.querySelector('#slide2')];
console.log(slider)
let direction = 1;
let current = 0;
let autoplay = true;
let allowArrow = true;

function nextSlide() {

    function animFinished() {
        slider[current].removeEventListener('animationend', animFinished);
        current = current + direction;
        if (current < 0) {
            console.log("Setting current to 3");
            current = 2;
        } else if (current > 2) {
            current = 0;
            console.log("Setting current to 0");
        }
        slider[current].classList.remove('loadOutAbout');
        console.log(slider[current]);
        slider[current].classList.add('loadInAbout');
    }

    slider[current].classList.remove('loadInAbout');
    slider[current].classList.add('loadOutAbout');
    slider[current].addEventListener('animationend', animFinished);
}

function autoSlide() {
    if (autoplay == true) {
        nextSlide();
    }
}

function start() {
    slider[0].classList.add('loadInAbout');
    slider[1].classList.add('loadOutAbout');
    slider[2].classList.add('loadOutAbout');
    var autoPlayInterval = setInterval(autoSlide, 5000);
}

leftButton.onclick = function() {
    if (allowArrow == true) {
        allowArrow = false;
        direction = -1;
        nextSlide();
        direction = 1;
        autoplay = false;
        pauseAuto = setInterval(resetInterval, 15000);
        allowInterval = setInterval(allowArrowInterval, 3000);
    }
}
rightButton.onclick = function() {
    if (allowArrow == true) {
        allowArrow = false;
        direction = 1;
        nextSlide();
        autoplay = false;
        pauseAuto = setInterval(resetInterval, 15000);
        allowInterval = setInterval(allowArrowInterval, 3000);
    }
}

function resetInterval() {
    autoplay = true;
    resetInterval(pauseAuto);
}

function allowArrowInterval() {
    allowArrow = true;
    resetInterval(allowInterval);
}

start();