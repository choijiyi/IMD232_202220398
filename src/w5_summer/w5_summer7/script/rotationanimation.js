let angle = 0;
let angleVel;
let angleAcc;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    // angleVel = (TAU / 360) * 1;
    angleVel = 0;
    angleAcc = (TAU / 360) * 0.01;
}

function draw() {
    angleVel += angleAcc;
    angleVel = constrain(angleVel, -5, 5);
    angle += angleVel;

    background('white');

    translate(width / 2, height / 2);
    rotate(angle);

    line(0, 0, 100, 0);
    line(0, 0, -100, 0);
    ellipse(0, 0, 20);
}