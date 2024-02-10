let position;
let velocity;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('slateblue');

    position = createVector(random(width), random(height));
    // velocity = createVector(random(-5, 5), random(-5, 5));
    // velocity = createVector(1, 0);
    // velocity.rotate(random(TAU));
    velocity = p5.Vector.random2D();
    velocity.mult(5);
}

function draw() {
    background('slateblue');

    update();
    checkEdges();
    display();
}

function update() {
    position.add(velocity);
}

function checkEdges() {
    if(position.x < 0) {
        position.x = width;
    } else if(position.x > width) {
        position.x = 0;
    }

    if(position.y < 0) {
        position.y
    } else if(position.y > height) {
        position.y = 0;
    }
}

function display() {
    noStroke();
    fill('cornsilk');
    ellipse(position.x, position.y, 50);
}