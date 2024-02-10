let movers = [];
let mouseV;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    colorMode(HSL, 360, 100, 100, 100);
    for(let i = 0; i < 50; i++) {
        movers.push(new Mover(random(width), random(height), 10, 25, color(random(360), 100, 50, 25)));
    }

    mouseV = createVector();
}

function draw() {
    background('white');

    mouseV.set(mouseX, mouseY);

    for(let i = 0; i < movers.length; i++) {
        let force = p5.Vector.sub(mouseV, movers[i].position);
        force.setMag(0.5);
        movers[i].applyForce(force);
        movers[i].update();
    }

    movers.forEach((element) => {
        element.display();
    });
}

function mousePressed() {
    init();
}

function init() {
    for(let i = 0; i < 10; i++) {
        movers[i] = new Mover(random(width), random(height), 10, 25, color(random(360), 100, 50, 25));
    }
}