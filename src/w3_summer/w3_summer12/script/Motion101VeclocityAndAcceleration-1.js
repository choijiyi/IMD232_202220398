let position;
let velocity;
let acceleration;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('salmon');

    position = createVector(random(width), random(height));
    velocity = createVector(0, 0);
    acceleration = p5.Vector.random2D();
    acceleration.mult(0.1);
}

function draw() {
    background('salmon');

    update();
    checkEdges();
    display();
}

function update() {
    velocity.add(acceleration);
    velocity.limit(15);
    position.add(velocity);
}

function checkEdges() {
    if(position.x < 0) {
        position.x = width;
    } else if(position.x > width) {
        position.x = 0;
    }

    if(position.y < 0) {
        position.y = height;
    } else if(position.y > height) {
        position.y = 0;
    }
}

function display() {
    noStroke();
    fill('cornflowerblue');
    ellipse(position.x, position.y, 50);
}