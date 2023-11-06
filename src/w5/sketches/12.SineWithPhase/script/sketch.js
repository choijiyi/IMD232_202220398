<<<<<<< HEAD
const dotNum = 30;
const freq = 1 / 2;
let angleStart = 0;
let angleStartVel;
let amp; 

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    // angleStartVel = (TAU/360) *1;
    angleStartVel = periodToVel(120);

    amp = height / 4;

    background (255);
}

function draw () {
    background (255);

    for (let a = 0; a < dotNum; a++) {
        const ellipseX = width / (dotNum -1) * a;
        const dia = width / (dotNum - 1);
        const angle = angleStart + (TAU / (dotNum - 1)) * a * freq;
        // const angle = (TAU / (dotNum - 1)) * a * 2;
        ellipse (ellipseX, height / 2 + sin(angle) * amp, dia);

    }

    angleStart += angleStartVel;
}

function periodToVel (periodAsFrame) {
    return TAU / periodAsFrame;
=======
const dotNum = 30;
const freq = 1 / 2;
let angleStart = 0;
let angleStartVel;
let amp; 

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    // angleStartVel = (TAU/360) *1;
    angleStartVel = periodToVel(120);

    amp = height / 4;

    background (255);
}

function draw () {
    background (255);

    for (let a = 0; a < dotNum; a++) {
        const ellipseX = width / (dotNum -1) * a;
        const dia = width / (dotNum - 1);
        const angle = angleStart + (TAU / (dotNum - 1)) * a * freq;
        // const angle = (TAU / (dotNum - 1)) * a * 2;
        ellipse (ellipseX, height / 2 + sin(angle) * amp, dia);

    }

    angleStart += angleStartVel;
}

function periodToVel (periodAsFrame) {
    return TAU / periodAsFrame;
>>>>>>> 0480aa89fd0efb597413d1bb0078abe79225bb11
}