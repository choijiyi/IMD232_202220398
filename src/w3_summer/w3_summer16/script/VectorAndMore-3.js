// let position;
// let velocity;
// let acceleration;
// let radius = 50;

// class Mover {
//     constructor() {
//         this.position = createVector(width / 2, height / 2);
//         this.velocity = createVector(0, 0);
//         this.acceleration = createVector();
//         this.radius = 25;
//     }

//     update() {
//         this.acceleration = p5.Vector.random2D();
//         this.acceleration.mult(0.5);
//         this.velocity.add(this.acceleration);
//         this.velocity.limit(10);
//         this.position.add(this.velocity);

//     }

//     infiniteEdge() {
//         if(this.position.x < 0) {
//             this.position.x += width;
//         } else if(this.position.x >= width) {
//             this.position.x -= width;
//         }

//         if(this.position.y < 0) {
//             this.position.y += height;
//         } else if(this.position.y >= height) {
//             this.position.y -= height;
//         }
//     }

//     display() {
//         ellipse(this.position.x, this.position.y, 2 * this.radius);
//     }
// }

let mover;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    reset();
    mover = new Mover();
}

function draw() {
    background('white');

    // update();
    // infiniteEdge();
    // display();

    mover.update();
    mover.infiniteEdge();
    mover.display();
}

function reset() {
    position = createVector(width / 2, height / 2);
    velocity = createVector(0, 0);
    acceleration = createVector();
}

function update() {
    acceleration = p5.Vector.random2D();
    acceleration.mult(0.1);
    velocity.add(acceleration);
    velocity.limit(20);
    position.add(velocity);
}

function infiniteEdge() {
    if(position.x < 0) {
        position.x += width;
    } else if(position.x >= width) {
        position.x -= width;
    }

    if(position.y < 0) {
        position.y += height;
    } else if(position.y >= height) {
        position.y -= height
    }
}

function display() {
    ellipse(position.x, position.y, 2 * radius);
}