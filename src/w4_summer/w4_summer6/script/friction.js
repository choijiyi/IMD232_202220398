let moverA;
let moverB;
let gravity;
let wind;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    moverA = new Mover(width / 3, height / 2, 10);
    moverB = new Mover((2 * width) / 3, height / 2, 1);
    gravity = createVector(0, 0.1);
    wind = createVector(0.2, 0);
}

function draw() {
    background('white');

    let gravityA = createVector(gravity.x, gravity.y);
    gravityA.mult(moverA.mass);

    moverA.applyForce(gravityA);
    if(mouseIsPressed && isMouseInsideCanvas()) {
        moverA.applyForce(wind);
    }
    if(moverA.contactEdge()) {
        let myu = 0.5;
        // let fiction = createVector(moverA.velocity.x, moverA.velocity.y);
        let friction = moverA.velocity.copy();
        friction.mult(-1);
        friction.mult(myu);
        moverA.applyForce(friction);
    }
    moverA.update();
    moverA.checkEdge();
    moverA.display();
    moverA.displayVector();

    let gravityB = createVector(gravity.x, gravity.y);
    gravityB.mult(moverB.mass);

    moverB.applyForce(gravityB);
    if(mouseIsPressed && isMouseInsideCanvas()) {
        moverB.applyForce(wind);
    }
    if(moverB.contactEdge()) {
        let myu = 0.1;
        // let fiction = createVector(moverB.velocity.x, moverB.velocity.y);
        let friction = moverB.velocity.copy();
        friction.mult(-1);
        friction.mult(myu);
        moverB.applyForce(friction);
    }
    moverB.update();
    moverB.checkEdge();
    moverB.display();
    moverB.displayVector();
}