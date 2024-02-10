function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('#ff7733');
}

function draw() {
    background('#ff7733');
    circle(mouseX, mouseY, width * 0.1);
}