<<<<<<< HEAD
class Mover {
    constructor(x, y, mass, rad, color) {
        this.pos = createVector(x, y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.mass = mass;
        this.rad = rad;
        this.color = color;
    }
    applyForce(force) {
        const forceDividedByMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceDividedByMass);
    }

    update () {
        this.vel.add (this.acc);
        this.vel.limit(5);
        this.pos.add (this.vel);
        this.acc.mult (0);
    }

    display () {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, 2 * this.rad);
    }

    displayVectors() {
        stroke('red');
        strokeWeight (1);
        line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 1, this.pos.y + this.vel.y * 1);
    }
=======
class Mover {
    constructor(x, y, mass, rad, color) {
        this.pos = createVector(x, y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.mass = mass;
        this.rad = rad;
        this.color = color;
    }
    applyForce(force) {
        const forceDividedByMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceDividedByMass);
    }

    update () {
        this.vel.add (this.acc);
        this.vel.limit(5);
        this.pos.add (this.vel);
        this.acc.mult (0);
    }

    display () {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, 2 * this.rad);
    }

    displayVectors() {
        stroke('red');
        strokeWeight (1);
        line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 1, this.pos.y + this.vel.y * 1);
    }
>>>>>>> 0480aa89fd0efb597413d1bb0078abe79225bb11
}