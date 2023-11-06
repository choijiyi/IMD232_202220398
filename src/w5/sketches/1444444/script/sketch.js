<<<<<<< HEAD
let angle = 0;
let angleVel; 

function setup () {
    setCanvasContainer ('canvas', 2, 1, true)

    angleVel = (TAU / 360) * 1; 

    background (255);
}

function draw () {
    background (255);

    translate (200,100);
    rotate (angle);
    line (0,0, 100,0);
    line (0,0, -100,0);
    ellipse (0, 0, 20);
    angle += angleVel;
=======
let angle = 0;
let angleVel; 

function setup () {
    setCanvasContainer ('canvas', 2, 1, true)

    angleVel = (TAU / 360) * 1; 

    background (255);
}

function draw () {
    background (255);

    translate (200,100);
    rotate (angle);
    line (0,0, 100,0);
    line (0,0, -100,0);
    ellipse (0, 0, 20);
    angle += angleVel;
>>>>>>> 0480aa89fd0efb597413d1bb0078abe79225bb11
}