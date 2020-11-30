    var dy = 1;
    var dx = 1;
    var x = 20;
    var y = 20;
    var ball = document.getElementById('ball');
    var wood = document.getElementById('wood');
    var wright = 0;

    //*****

    function setupbricks(num) {
        var row = {
            x: 5,
            y: 20
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
        div.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
        div.style.left = row.x + 'px';
    }
    setupbricks(4);



    function setupbricks2(num2) {
        var row2 = {
            x2: 400,
            y2: 20
        };
        for (var xx = 0; xx < num2; xx++) {
            brickmaker2(row2);
            row2.x2 += 100;
        }
    }

    function brickmaker2(row2) {
        var div2 = document.createElement('div');
        container2.appendChild(div2);
        div2.setAttribute('class', 'bricks2');
        div2.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
        div2.style.left = row2.x2 + 'px';
    }
    setupbricks2(4);


    function setupbricks3(num3) {
        var row3 = {
            x3: 5,
            y3: 20
        };
        for (var xxx = 0; xxx < num3; xxx++) {
            brickmaker3(row3);
            row3.x3 += 100;
        }
    }

    function brickmaker3(row3) {
        var div3 = document.createElement('div');
        container3.appendChild(div3);
        div3.setAttribute('class', 'bricks3');
        div3.style.backgroundColor = 'rgb(' + rcolor(0, 255) + ',' + rcolor(0, 255) + ',' + rcolor(0, 255) + ')';
        div3.style.left = row3.x3 + 'px';
    }
    setupbricks3(4);

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
            var noneee = true;
            ball.style.display = 'none';
            wood.style.display = 'none';
        }
        if (call(ball, wood)) {
            dy = 1;
        }
        var tempbricks = document.querySelectorAll('.bricks');
        if (tempbricks.length == 0) {
            document.getElementById('win').style.display = 'block';
            ball.style.display = 'none';
            wood.style.display = 'none';
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

        var tempbricks3 = document.querySelectorAll('.bricks3');

        for (var tarbrick3 of tempbricks3) {
            if (call(tarbrick3, ball)) {
                dy = -1;
                tarbrick3.parentNode.removeChild(tarbrick3);
            }
        }
        ball.style.left = x + 'px';
        ball.style.bottom = y + 'px';
        if (dx == -1) {
            x = x - 2;
        }
        if (dx == 1) {
            x = x + 2;
        }
        if (dy == -1) {
            y = y - 2;
        }
        if (dy == 1) {
            y = y + 2;
        }
    }
    //****
    function stop() {
        if (event.keyCode == '13') {
            setInterval('move();', 7);
            document.getElementById('startgame').style.display = 'none';
        }
        if (event.keyCode == '39') {
            if (wright > 680) {
                return;
            }
            wright = wright + 12;
            wood.style.left = wright + 'px';
        }
        if (event.keyCode == '37') {
            if (wright < 10) {
                return;
            }
            wright = wright - 12;
            wood.style.left = wright + 'px';
        }
    }
    //******
    function call(a, b) {
        var arect = a.getBoundingClientRect();
        var brect = b.getBoundingClientRect();
        return (!(arect.bottom < brect.top || arect.top > brect.bottom || arect.right < brect.left || arect.left > brect.right));
    }

    //*****
    $(document).ready(function() {
        $('#restart').click(function() {
            location.reload(true);
        });
    });

    function rcolor(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }