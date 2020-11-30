var y = 20;
var x = 20;
var dy = 1;
var dx = 1;
var wright = 0;
var gameover = true;
var ball = document.getElementById('ball');
var wood = document.getElementById('wood');
var b = ball.offsetLeft;
var w = wood.offsetLeft;
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var stones1 = document.getElementsByClassName('bricks');

function setupbricks(num) {
    var row = {
        x: 5,
        y: 50
    };
    for (var x = 0; x < num; x++) {
        brickmaker(row);
        row.x += 100;
    }
}

function brickmaker(row) {
    var div = document.createElement('div');
    container1.appendChild(div);
    div.style.left = row.x + 'px';
    div.setAttribute('class', 'bricks');
    div.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
}
setupbricks(8);

function setupbricks2(num2) {
    var row2 = {
        x2: 5,
        y2: 50
    };
    for (var xx = 0; xx < num2; xx++) {
        brickmaker2(row2);
        row2.x2 += 100;
    }
}

function brickmaker2(row2) {
    var div2 = document.createElement('div');
    container2.appendChild(div2);
    div2.style.left = row2.x2 + 'px';
    div2.setAttribute('class', 'bricks2');
    div2.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
}
setupbricks2(8);


function move() {

    if (y > 570) {

        dy = -1;

    }

    if (x > 770) {
        dx = -1;
    }
    if (y < 0) {
        document.getElementById('gameover').style.display = 'block';
        document.getElementById('ball').style.display = 'none';
        document.getElementById('wood').style.display = 'none';
    }
    if (call(ball, wood)) {

        dy = 1;
    }

    var tempbricks = document.querySelectorAll('.bricks');
    if (tempbricks.length == 0) {
        ball.style.display = 'none';
        wood.style.display = 'none';
        document.getElementById('win').style.display = 'block';
    }
    for (var tarbrick of tempbricks) {
        if (call(tarbrick, ball)) {
            dy = -1;
            tarbrick.parentNode.removeChild(tarbrick);
        }
    }
    var tempbricks2 = document.querySelectorAll('.bricks2');
    for (var tarbrick2 of tempbricks2) {
        if (call(tarbrick2, ball)) {
            dy = -1;
            tarbrick2.parentNode.removeChild(tarbrick2);
        }
    }
    //            if(call(stones,ball)){
    //                
    //                console.log('hi');
    //                dy = -1;
    //            }


    if (x < 5) {
        dx = 1;
    }
    document.getElementById('ball').style.bottom = y + "px";
    document.getElementById('ball').style.left = x + "px";


    if (dy == -1) {
        y = y - 2;
    }


    if (dx == -1) {
        x = x - 2;
    }

    if (dx == 1) {
        x = x + 2;
    }

    if (dy == 1) {
        y = y + 2;
    }






}

function call(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();
    return (!(aRect.bottom < bRect.top || aRect.top > bRect.bottom || aRect.right < bRect.left || aRect.left > bRect.right));
}

var stopp = true;

function stop() {
    var key = event.keyCode || event.charCode
    if (key == '13') {
        setInterval('move();', 7);
        document.getElementById('startgame').style.display = 'none';
    }
    if (key == '39') {
        if (wright > 675) {
            return;
        }
        wright = wright + 12;
        document.getElementById('wood').style.left = wright + "px";

    }
    if (key == '37') {
        if (wright < 10) {
            return;
        }
        wright = wright - 12;
        document.getElementById('wood').style.left = wright + "px";

    }
}
$(document).ready(function() {
    $('#restart').click(function() {
        location.reload(true);
    })
});

function rcolor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}