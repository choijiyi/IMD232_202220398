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

    mouseV.set(mouseX, mouseY);
    centerVToMouseV = p5.Vector.sub(mouseV, centerV);
    
    let mag = centerVToMouseV.mag();
    noStroke();
    fill('white');
    rect(10, 10, mag, 10);

    translate(centerV.x, centerV.y);
    
    strokeWeight(2);
    stroke('white');
    line(0, 0, centerVToMouseV.x, centerVToMouseV.y);
}