class Mover {
    constructor(x, y, mass, radius, color) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = radius;
        this.color = color;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    applyForce(force) {
        let forceDividedByMass = p5.Vector.div(force, this.mass);
        this.acceleration.add(forceDividedByMass);
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.position.x, this.position.y, 2 * this.radius);
    }
}