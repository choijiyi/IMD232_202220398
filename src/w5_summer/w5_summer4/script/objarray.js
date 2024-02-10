let movers = [];
const moversNum = 10;
let mouseV;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);

    colorMode(HSL, 360, 100, 100, 100);
    
    for(let i = 0; i < moversNum; i++) {
        movers.push(
            new Mover(random(width), random(height), 10, 25, color(random(360), 100, 50, 50))
            );
    }
    mouseV = createVector();

    background('white');
}

function draw() {
    mouseV.set(mouseX, mouseY);

    // const directionVector = p5.Vector.sub(mouseV, moverA.pos);
    // directionVector.setMag(0.5);

    // moverA.applyForce(directionVector);
    // moverA.update();

    for(let i = 0; i < movers.length; i++) {
        const directionVector = p5.Vector.sub(mouseV, movers[i].position);
        directionVector.setMag(0.5);
        movers[i].applyForce(directionVector);
        movers[i].update();
    }

    background('white');

    // moverA.display();
    // moverA.displayVector();

    // for(let i = 0; i < movers.length; i++) {
    //     movers[i].display();
    //     movers[i].displayVector();
    // }

    // movers.forEach(function(anyName) {
    //     anyName.display();
    //     anyName.displayVector();
    // });

    movers.forEach((anyName) => {
        anyName.display();
        anyName.displayVector();
    });
}