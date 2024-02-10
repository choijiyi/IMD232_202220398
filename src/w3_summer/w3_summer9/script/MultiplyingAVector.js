let centerV;
let mouseV;
let centerVToMouseV;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('slateblue');

    centerV = createVector(width / 2, height / 2);
    mouseV = createVector();
    centerVToMouseV = createVector();
}

function draw() {
    background('slateblue');

    stroke('white');
    strokeWeight(2);
    line(0, 0, centerV.x, centerV.y);

    mouseV.set(mouseX, mouseY);
    stroke('fuchsia');
    line(0, 0, mouseV.x, mouseV.y);

    centerVToMouseV = p5.Vector.sub(mouseV, centerV);
    stroke('lime');
    translate(centerV.x, centerV.y);
    line(0, 0, centerVToMouseV.x, centerVToMouseV.y);
    
    centerVToMouseV.mult(0.5);
    stroke('black');
    strokeWeight(4);
    line(0, 0, centerVToMouseV.x, centerVToMouseV.y);
}