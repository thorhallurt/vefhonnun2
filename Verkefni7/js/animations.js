let body = document.querySelector('#top');

body.onload = function() {

    function go() {
        console.log("Loading in animation");
        body.classList.add('loadIn');
    }

    function loadEnd() {
        console.log("Loading in animation finished");
        body.classList.remove('loadIn')
    }

    go();
    console.log("Starting event listener");
    body.addEventListener('animationend', loadEnd);
};