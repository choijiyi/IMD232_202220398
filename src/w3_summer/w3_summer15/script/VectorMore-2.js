// let position;
// let velocity;
// let acceleration;
// let radius = 25;

class Ball {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(5);
        this.acceleration = createVector(0, 0.1);
        this.radius = 25;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(20);
        this.position.add(this.velocity);
    }

    infiniteEdge() {
        if(this.position.x < 0) {
            this.position.x += width;
        } else if(this.position.x > width) {
            this.position.x -= width;
        }

        if(this.position.y < 0) {
            this.position.y += height;
        } else if(this.position.y > height) {
            this.position.y -= height;
        }
    }

    display() {
        noStroke();
        fill('salmon');
        ellipse(this.position.x, this.position.y, 2 * this.radius);
    }
}

let aBall;
let bBall;
let cBall;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    // position = createVector(width / 2, height / 2);

    // velocity = p5.Vector.random2D();
    // velocity.mult(5);

    // acceleration = createVector(0, 0.1);

    aBall = new Ball();
    bBall = new Ball();
    cBall = new Ball();
}

function draw() {
    background('white');

    aBall.update();
    aBall.infiniteEdge();
    aBall.display();
    
    bBall.update();
    bBall.infiniteEdge();
    bBall.display();

    cBall.update();
    cBall.infiniteEdge();
    cBall.display();
    
    // update();
    // infiniteEdge();
    // display();
}

// function update() {
//     velocity.add(acceleration);
//     velocity.limit(20);
//     position.add(velocity);
// }

// function infiniteEdge() {
//     if(position.x < 0) {
//         position.x += width;
//     } else if(position.x >= width) {
//         position.x -= width;
//     }
    
//     if(position.y < 0) {
//         position.y += height;
//     } else if(position.y >= height) {
//         position.y -= height;
//     }
// }

// function display() {
//     ellipse(position.x, position.y, 2 * radius);
// }