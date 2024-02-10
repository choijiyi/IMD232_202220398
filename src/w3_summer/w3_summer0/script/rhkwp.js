let mover;
let mouseV;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    mover = new Mover(width / 2, height / 2, 10, 50);

    mouseV = createVector();
}

function draw() {
    background('white');

    mouseV.set(mouseX, mouseY);

    let f = p5.Vector.sub(mouseV, mover.position);
    f.setMag(0.5);

    mover.update();
    mover.applyForce(f);
    mover.display();
    mover.displayVector();

    if(mouseIsPressed) {
        let force = p5.Vector.sub(mover.position, mouseV);
        mover.applyForce(force);
    }
}