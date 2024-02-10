class Mover {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector();
        this.radius = 25;
    }

    update() {
        this.acceleration = p5.Vector.random2D();
        this.acceleration.mult(0.5);
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);

    }

    infiniteEdge() {
        if(this.position.x < 0) {
            this.position.x += width;
        } else if(this.position.x >= width) {
            this.position.x -= width;
        }

        if(this.position.y < 0) {
            this.position.y += height;
        } else if(this.position.y >= height) {
            this.position.y -= height;
        }
    }

    display() {
        ellipse(this.position.x, this.position.y, 2 * this.radius);
    }
}