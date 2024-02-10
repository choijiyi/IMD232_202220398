class Mover{
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.accelerationDisplay = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = mass ** 0.5 * 10;
    }

    applyForce(force) {
        let forceDivideByMass = createVector(force.x, force.y);
        forceDivideByMass.div(this.mass);
        this.acceleration.add(forceDivideByMass);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.accelerationDisplay.set(this.acceleration);
        this.acceleration.mult(0);
    }

    contactEdge() {
        if(this.position.y >= height -1 - this.radius -1) {
            return true;
        } else {
            return false;
        }
    }

    checkEdge() {
        const bounce = -0.9;
        if(this.position.x < 0 + this.radius) {
            this.position.x -= 0 + this.radius;
            this.position.x *= -1;
            this.position.x += 0 + this.radius;
            this.velocity *= bounce;
        } else if(this.position.x > width -1 - this.radius) {
            this.position.x -= width -1 - this.radius;
            this.position.x *= -1;
            this.position.x += width -1 - this.radius;
            this.velocity.x *= bounce;
        }

        if(this.position.y < 0 + this.radius) {
            this.position.y -= 0 + this.radius;
            this.position.y *= -1;
            this.position.y += 0 + this.radius;
            this.velocity.y *= bounce;
        } else if(this.position.y > height -1 - this.radius) {
            this.position.y -= height -1 - this.radius;
            this.position.y *= -1;
            this.position.y += height -1 - this.radius;
            this.velocity.y *= bounce;
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
        );
        stroke('lime');
        line(
            this.position.x,
            this.position.y,
            this.position.x + this.accelerationDisplay.x * 100,
            this.position.y + this.accelerationDisplay.y * 100
        );
    }
}