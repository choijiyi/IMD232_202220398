let moverA;
let moverB;
let gravity;
let wind

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

    moverA.applyForce(gravity);
    if(mouseIsPressed && isMouseInsideCanvas()) {
        moverA.applyForce(wind);
    }
    moverA.update();
    moverA.checkEdge();
    moverA.display();
    moverA.displayVector();


    moverB.applyForce(gravity);
    if(mouseIsPressed && isMouseInsideCanvas()) {
        moverB.applyForce(wind);
    }
    moverB.update();
    moverB.checkEdge();
    moverB.display();
    moverB.displayVector();
}