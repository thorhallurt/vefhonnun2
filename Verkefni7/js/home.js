let object = document.querySelector('#title');
let bodys = document.querySelector('#top');

bodys.addEventListener('animationend', function() {

    object.classList.add('titleAnim');
    object.addEventListener('animationend', function() {
        object.classList.add('underscore');
    });
 
});