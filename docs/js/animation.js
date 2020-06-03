let l1, l2, l3, outX, outY;

l1 = document.getElementsByClassName('bg_layer1')[0];
l2 = document.getElementsByClassName('bg_layer2')[0];
l3 = document.getElementsByClassName('bg_layer3')[0];

function move(x, y) {
    l1.style = "transform: translate3d(" + x / 20 + "px, " + y / 20 + "px, 0px)";
    l2.style = "transform: translate3d(" + x / 40 + "px, " + y / 40 + "px, 0px)";
    l3.style = "transform: translate3d(" + x / 200 + "px, " + y / 200 + "px, 0px)";
}

document.addEventListener('mousemove', (e) => {
    move(e.x, e.y);
    move(e.x, e.y);
    move(e.x, e.y);
});

document.addEventListener('mouseout', (e) => {
    outX = e.x;
    outY = e.y;
    let wx = window.innerWidth / 2;
    let wy = window.innerHeight / 2;

    setTimeout(function() {
        if (outX > wx) {
            move(outX - 10, outY);
        }
    }, 1000)

});

document.addEventListener('mouseenter', (e) => {
});