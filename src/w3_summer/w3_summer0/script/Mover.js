class Mover{
    constructor(x, y, mass, radius) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.accelerationDisplay = createVector();
        this.acceleration = createVector();
        this.mass = mass;
        this.radius = radius;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.position.add(this.velocity);
        this.accelerationDisplay = this.acceleration;
        this.acceleration.mult(0);
    }

    applyForce(force) {
        let dividedByMass = p5.Vector.div(force, this.mass);
        this.acceleration.add(dividedByMass);
    }

    display() {
        noStroke();
        fill('black');
        ellipse(this.position.x, this.position.y, 2 * this.radius);
    }

    displayVector() {
        stroke('red');
        strokeWeight(1);
        line(
            this.position.x,
            this.position.y,
            this.position.x + this.velocity.x * 10,
            this.position.y + this.velocity.y * 10
        );
        stroke('lime');
        strokeWeight(1);
        line(
            this.position.x,
            this.position.y,
            this.position.x + this.accelerationDisplay.x * 100,
            this.position.y + this.accelerationDisplay.y * 100
        );
        stroke('black');
        strokeWeight(2);
        line(
            this.position.x,
            this.position.y,
            mouseX,
            mouseY
        );
    }
}