<<<<<<< HEAD
let angle = 0;
let angleVel;
let angleAcc;

function setup () {
    setCanvasContainer ('canvas', 2, 1, true)

    // angleVel = (TAU / 360) * 1;
    angleVel = 0;
    angleAcc = (TAU / 360) * 0.01;

    background (255);
}

function draw () {
    
    background (255);
    
    translate (width / 2, height /2);
    rotate (angle);
    
    // line (0,0, 100,0);
    // line (0,0, -50,0);
    line (-100, 0, 100, 0);
    ellipse (0, 0, 20);
    
    angleVel += angleAcc;
    angleVel = constrain (angleVel, -5, 5);
    angle += angleVel;
=======
let angle = 0;
let angleVel;
let angleAcc;

function setup () {
    setCanvasContainer ('canvas', 2, 1, true)

    // angleVel = (TAU / 360) * 1;
    angleVel = 0;
    angleAcc = (TAU / 360) * 0.01;

    background (255);
}

function draw () {
    
    background (255);
    
    translate (width / 2, height /2);
    rotate (angle);
    
    // line (0,0, 100,0);
    // line (0,0, -50,0);
    line (-100, 0, 100, 0);
    ellipse (0, 0, 20);
    
    angleVel += angleAcc;
    angleVel = constrain (angleVel, -5, 5);
    angle += angleVel;
>>>>>>> 0480aa89fd0efb597413d1bb0078abe79225bb11
}