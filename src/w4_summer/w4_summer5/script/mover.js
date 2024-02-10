class Mover {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.accelerationDisplay = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = mass ** 0.5 * 10;
    }

    applyForce(force) {
        let forceDividedByMass = createVector(force.x, force.y);
        forceDividedByMass.div(this.mass);
        this.acceleration.add(forceDividedByMass);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.accelerationDisplay.set(this.acceleration);
        this.acceleration.mult(0);
    }

    checkEdge() {
        if(this.position.x < 0) {
            this.position.x -= 0;
            this.position.x *= -1;
            this.position.x += 0;
            this.velocity.x *= -1;
        } else if(this.position.x > width - 1) {
            this.position.x -= width -1;
            this.position.x *= -1;
            this.position.x += width -1;
            this.velocity.x *= -1;
        }

        if(this.position.y < 0) {
            this.position.y -= 0;
            this.position.y *= -1;
            this.position.y += 0;
            this.velocity.y *= -1;
        } else if(this.position.y > height - 1) {
            this.position.y -= height -1;
            this.position.y *= -1;
            this.position.y += height -1;
            this.velocity.y *= -1;
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
            this.position.y + this.velocity.y * 10
        )
        stroke('lime');
        line(
            this.position.x,
            this.position.y,
            this.position.x + this.accelerationDisplay.x * 100,
            this.position.y + this.accelerationDisplay.y * 100
        )
    }
}