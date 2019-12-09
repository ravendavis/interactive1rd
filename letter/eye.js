let eye = $('.eyes');
var eyeCenterX = eye.width() / 2;
var eyeCenterY = eye.height() / 2;
let offset = eye.offset();

$(document).mousemove(mouseMove);

function mouseMove(e) {

    var center_x = (offset.left) + ( eyeCenterX );
    var center_y = (offset.top) + ( eyeCenterY );
    var mouse_x = e.pageX;
    var mouse_y = e.pageY;

    var radians = Math.atan2(mouse_x - center_x, center_y - mouse_y); //y is backwards from cartesian coordinate system. No need to convert to degrees.
    eye.css('-moz-transform', 'rotate('+radians+'rad)');
    eye.css('-webkit-transform', 'rotate('+radians+'rad)');
    eye.css('-o-transform', 'rotate('+radians+'rad)');
    eye.css('-ms-transform', 'rotate('+radians+'rad)');

}

setInterval(function() {
            $(".eye-lid").toggleClass('blink');
    }, 3500);
