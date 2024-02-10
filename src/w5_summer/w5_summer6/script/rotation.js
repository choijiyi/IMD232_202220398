function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    push();
    translate(width / 2, height / 2);
    rotate((TAU / 360) * 25);

    noStroke();
    fill('salmon');
    
    rect(0, 0, 50);
    pop();

    // rotate((TAU / 360) * -25);
    // translate(-width / 2, -height / 2);

    translate(200, 100);
    rotate((TAU / 360) * 15);

    noStroke();
    fill('slateblue');

    rect(0, 0, 50);
}

function draw() {

}