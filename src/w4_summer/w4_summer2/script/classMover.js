class Mover {
    constructor(x, y, radius) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0.1);
        this.radius = radius;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }

    checkEdge() {
        if(this.position.x < 0) {

            this.position.x -= 0;
            this.position.x *= -1;
            this.position.x += 0;

            this.velocity.x *= -1;

        } else if(this.position.x > width - 1) {

            this.position.x -= width - 1;
            this.position.x *= -1;
            this.position.x += width - 1;

            this.velocity.x *= -1;
        }

        if(this.position.y < 0) {

            this.position.y -= 0;
            this.position.y *= -1;
            this.position.y += 0;

            this.velocity.y += -1;

        } else if(this.position.y > height - 1) {

            this.position.y -= height - 1;
            this.position.y *= -1;
            this.position.y += height - 1;

            this.velocity.y += -1;
        }
    }

    display() {
        noStroke();
        fill('black');
        ellipse(this.position.x, this.position.y, 2 * this.radius);
    }

    displayVector() {
        stroke('red');
        line(
            this.position.x,
            this.position.y,
            this.position.x + this.velocity.x * 10,
            this.position.y + this.velocity.y * 10)
        stroke('blue');
        line(
            this.position.x,
            this.position.y,
            this.position.x + this.acceleration.x * 100,
            this.position.y + this.acceleration.y * 100)
    }
}

