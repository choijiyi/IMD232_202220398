let mover;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    mover = new Mover(width / 2, height / 2, 50);
}

function draw() {
    background('white');

    mover.update();
    mover.checkEdge();
    mover.display();
    mover.displayVector();
}