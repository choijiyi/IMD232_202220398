function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');
}

function draw() {
    background('white');

    fill(255)
    rectMode(CORNER);
    colorMode(RGB);
    stroke(0);
    strokeWeight(1);

    ellipse(100, 100, 50, 50);
    rect(100, 100, 50, 50);
    ellipse(200, 100, 50, 25);
    rect(200, 100, 25, 50);

    rectMode(CENTER);
    rect(300, 100, 50, 50);
    ellipse(300, 100, 50, 50);
    rect(400, 100, 50, 25);
    ellipse(400, 100, 25, 50);

    fill(255, 127, 0);
    ellipse(100, 200, 50);
    fill('#00EE40');
    circle(200, 200, 50);
    colorMode(HSL);
    fill(200, 100, 50);
    rect(300, 200, 50);
    noStroke();
    square(400, 200, 50);

    stroke(0);
    rect(100, 300, 50, 50, 20);
    rect(200, 300, 50, 50, 5, 10, 15, 20);

    line(100, 400, 150, 450);

    stroke('royalblue');
    line(200, 400, 300, 400);
    stroke('salmon');
    strokeWeight(5);
    line(200, 400, 300, 450);

    stroke('slateBlue');
    strokeWeight(10);
    point(400, 400);

    stroke(50, 100, 10);
    strokeWeight(2);
    point(600, 400);
    point(610, 400);
    point(620, 400);
    point(630, 400);
    point(640, 400);
    point(650, 400);

    stroke(50, 100, 20);
    strokeWeight(3);
    point(600, 410);
    point(610, 410);
    point(620, 410);
    point(630, 410);
    point(640, 410);
    point(650, 410);

    stroke(50, 100, 30);
    strokeWeight(4);
    point(600, 420);
    point(610, 420);
    point(620, 420);
    point(630, 420);
    point(640, 420);
    point(650, 420);

    stroke(50, 100, 40);
    strokeWeight(5);
    point(600, 430);
    point(610, 430);
    point(620, 430);
    point(630, 430);
    point(640, 430);
    point(650, 430);

    stroke(50, 100, 50);
    strokeWeight(6);
    point(600, 440);
    point(610, 440);
    point(620, 440);
    point(630, 440);
    point(640, 440);
    point(650, 440);

    stroke(50, 100, 60);
    strokeWeight(7);
    point(600, 440);
    point(610, 440);
    point(620, 440);
    point(630, 440);
    point(640, 440);
    point(650, 440);
}