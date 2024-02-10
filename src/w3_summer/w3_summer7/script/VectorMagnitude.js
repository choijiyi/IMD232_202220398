let centerV;
let mouseV;
let centerVToMouseV;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('slateblue');
    centerV = createVector(width / 2, height / 2);
    mouseV = createVector();
    createVToMouseV = createVector();
}

function draw() {
    background('slateblue');
    strokeWeight(2);
    stroke('white');
    line(0, 0, centerV.x, centerV.y);

    mouseV.set(mouseX, mouseY);
    stroke('fuchsia');
    line(0, 0, mouseV.x, mouseV.y);

    centerVToMouseV = p5.Vector.sub(mouseV, centerV);
    stroke('lime');
    translate(centerV.x, centerV.y);
    line(0, 0, centerVToMouseV.x, centerVToMouseV.y);

    centerVToMouseV.mult(0.5);
    strokeWeight(4);
    stroke('black');
    line(0, 0, centerVToMouseV.x, centerVToMouseV.y);
}