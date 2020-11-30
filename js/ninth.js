var x = 20;
var y = 20;
var dx = 1;
var dy = 1;
var ball = document.getElementById('ball');
var wood = document.getElementById('wood');
var wleft = 0;
//*********************************************

function setupbricks(num) {
    var row = {
        x: 5
    };
    for (var x = 0; x < num; x++) {
        brickmaker(row);
        row.x += 100;
    }
}

function brickmaker(row) {
    var div = document.createElement('div');
    container1.appendChild(div);
    div.setAttribute('class', 'bricks');
    div.style.left = row.x + 'px';
    div.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
}
setupbricks(5);


function setupbricks2(num2) {
    var row2 = {
        x2: 300,
        y2: 100
    };
    for (var x = 0; x < num2; x++) {
        brickmaker2(row2);
        row2.x2 += 100;
    }
}

function brickmaker2(row2) {
    var div2 = document.createElement('div');
    container2.appendChild(div2);
    div2.style.left = row2.x2 + 'px';
    div2.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
    div2.setAttribute('class', 'bricks2');
}
setupbricks2(5);


function setupbricks3(num3) {
    var row3 = {
        x3: 5,
        y3: 100
    };
    for (var x = 0; x < num3; x++) {
        brickmaker3(row3);
        row3.x3 += 100;
    }
}

function brickmaker3(row3) {
    var div3 = document.createElement('div');
    container3.appendChild(div3);
    div3.style.left = row3.x3 + 'px';
    div3.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
    div3.setAttribute('class', 'bricks3');
}
setupbricks3(8);




function setupbricks4(num4) {
    var row4 = {
        x4: 600,
        y4: 100
    };
    for (var x = 0; x < num4; x++) {
        brickmaker4(row4);
        row4.x4 += 100;
    }
}

function brickmaker4(row4) {
    var div4 = document.createElement('div');
    container4.appendChild(div4);
    div4.style.left = row4.x4 + 'px';
    div4.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
    div4.setAttribute('class', 'bricks4');
}
setupbricks4(2);



function setupbricks5(num5) {
    var row5 = {
        x5: 300,
        y5: 100
    };
    for (var x = 0; x < num5; x++) {
        brickmaker5(row5);
        row5.x5 += 100;
    }
}

function brickmaker5(row5) {
    var div5 = document.createElement('div');
    container5.appendChild(div5);
    div5.style.left = row5.x5 + 'px';
    div5.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
    div5.setAttribute('class', 'bricks5');
}
setupbricks5(5);

//*********************************************
function move() {
    if (x > 770) {
        dx = -1;
    }
    if (x < 5) {
        dx = 1;
    }
    if (y > 570) {
        dy = -1;
    }
    if (y < 0) {
        document.getElementById('gameover').style.display = 'block';
        ball.style.display = 'none';
        wood.style.display = 'none';
    }
    if (call(ball, wood)) {
        dy = 1;
    }
    var tempbricks = document.querySelectorAll('.bricks');

    for (var tarbrick of tempbricks) {
        if (call(tarbrick, ball)) {
            dy = -1;
            tarbrick.parentNode.removeChild(tarbrick);
        }
    }



    var tempbricks2 = document.querySelectorAll('.bricks2');
    if (tempbricks2.length == 0) {
        document.getElementById('win').style.display = 'block';
        ball.style.display = 'none';
        wood.style.display = 'none';
    }
    for (var tarbrick2 of tempbricks2) {
        if (call(tarbrick2, ball)) {
            dy = -1;
            tarbrick2.parentNode.removeChild(tarbrick2);
        }
    }


    var tempbricks3 = document.querySelectorAll('.bricks3');
    for (var tarbrick3 of tempbricks3) {
        if (call(tarbrick3, ball)) {
            dy = -1;
            tarbrick3.parentNode.removeChild(tarbrick3);
        }
    }


    var tempbricks4 = document.querySelectorAll('.bricks4');
    for (var tarbrick4 of tempbricks4) {
        if (call(tarbrick4, ball)) {

            dy = -1;
            tarbrick4.parentNode.removeChild(tarbrick4);
        }
    }


    var tempbricks5 = document.querySelectorAll('.bricks5');
    for (var tarbrick5 of tempbricks5) {
        if (call(tarbrick5, ball)) {

            dy = -1;
            tarbrick5.parentNode.removeChild(tarbrick5);
        }
    }
    ball.style.left = x + 'px';
    ball.style.bottom = y + 'px';
    if (dx == 1) {
        x = x + 2;
    }
    if (dx == -1) {
        x = x - 2;
    }
    if (dy == 1) {
        y = y + 2;
    }
    if (dy == -1) {
        y = y - 2;
    }
}

function call(a, b) {
    var arect = a.getBoundingClientRect();
    var brect = b.getBoundingClientRect();
    return (!(arect.bottom < brect.top || arect.top > brect.bottom || arect.right < brect.left || arect.left > brect.right));
}

function stop() {
    if (event.keyCode == '13') {
        setInterval('move();', 3);
        document.getElementById('startgame').style.display = 'none';
    }
    if (event.keyCode == '39') {
        if (wleft > 715) {
            return;
        }
        wleft = wleft + 12;
        wood.style.left = wleft + 'px'
    }

    if (event.keyCode == '37') {
        if (wleft < 10) {
            return;
        }
        wleft = wleft - 12;
        wood.style.left = wleft + 'px'
    }
}
$(document).ready(function() {
    $('#restart').click(function() {
        location.reload(true);
    });
});

function rcolor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}