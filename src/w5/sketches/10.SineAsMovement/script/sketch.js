<<<<<<< HEAD
let angle = 0;
let angleVel;
let amplitude = 50;
let period = 60;

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    // angleVel = (TAU / 360) * 1;
    angleVel = periodToAngleVel (period);

    background (255);

    // frameRate (10);
}

function draw () {
    angle += angleVel;

    background (255);

    line (0, height / 2, width, height / 2);
    ellipse (width / 2, height / 2 + sin(angle) * amplitude , 50);

    // console.log(sin(angle));
}

function periodToAngleVel (periodAsFrame) {
    return TAU / periodAsFrame;
=======
let angle = 0;
let angleVel;
let amplitude = 50;
let period = 60;

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    // angleVel = (TAU / 360) * 1;
    angleVel = periodToAngleVel (period);

    background (255);

    // frameRate (10);
}

function draw () {
    angle += angleVel;

    background (255);

    line (0, height / 2, width, height / 2);
    ellipse (width / 2, height / 2 + sin(angle) * amplitude , 50);

    // console.log(sin(angle));
}

function periodToAngleVel (periodAsFrame) {
    return TAU / periodAsFrame;
>>>>>>> 0480aa89fd0efb597413d1bb0078abe79225bb11
}