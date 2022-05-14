const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const autoPlayButton = document.querySelector('#autoPlayButton');

console.log("Starting slider")
const slider = [document.querySelector('#slide0'), document.querySelector('#slide1'), document.querySelector('#slide2')];
console.log(slider)
let direction = 1;
let current = 0;
let autoplay = true;
let allowArrow = true;
let allowArrowToggle = false;

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
        slider[current].addEventListener('animationend', function() {
            allowArrow = true;
        });
    }

    slider[current].classList.remove('loadInAbout');
    slider[current].classList.add('loadOutAbout');
    slider[current].addEventListener('animationend', animFinished);
}

function autoSlide() {
    if (autoplay == true) {
        if (allowArrow == true) {
            nextSlide();
        }
    }
}

function start() {
    slider[0].classList.add('loadInAbout');
    slider[1].classList.add('loadOutAbout');
    slider[2].classList.add('loadOutAbout');
    if (autoplay == true) {
        autoPlayButton.classList.add('autoPlayEnabled');
    }
    var autoPlayInterval = setInterval(autoSlide, 10000);
}

leftButton.onclick = function() {
    if (allowArrow == true) {
        allowArrow = false;
        direction = -1;
        nextSlide();
        direction = 1;
    }
}
rightButton.onclick = function() {
    if (allowArrow == true) {
        allowArrow = false;
        direction = 1;
        nextSlide();
    }
}

autoPlayButton.onclick = function() {
    console.log("Toggling autoplay");
    if (autoplay == true) {
        autoPlayButton.classList.remove('autoPlayEnabled');
        autoPlayButton.classList.add('autoPlayDisabled');
        autoplay = false;
        
    } else {
        autoPlayButton.classList.remove('autoPlayDisabled');
        autoPlayButton.classList.add('autoPlayEnabled');
        autoplay = true;
    }
}

start();