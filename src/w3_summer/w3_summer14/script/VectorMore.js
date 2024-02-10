let position;
let velocity;
let radius = 25;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    position = createVector(width / 2, height / 2);
    velocity = createVector(5, 3);
}

function draw() {
    background('white');

    position.add(velocity);

    if(position.x < 0) {
        position.x += width;
    } else if(position.x >= width) {
        position.x -= width;
    }

    if(position.y < 0) {
        position.y += height;
    } else if(position.y >= height) {
        position.y -= height;
    }

    ellipse(position.x, position.y, 2 * radius);
}