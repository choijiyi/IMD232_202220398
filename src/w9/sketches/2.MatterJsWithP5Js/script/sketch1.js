// module aliases
// let Engine = Matter.Engine;
// let Render = Matter.Render;
// let Runner = Matter.Runner;
// let Bodies = Matter.Bodies;
// let Composite = Matter.Composite;
let {Engine, Bodies, Composite, Runner} = Matter;

// create engine
let engine = Engine.create();

let runner = Runner.create();

let boxA;
let boxB;
let ground;

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    rectMode(CENTER);

    // create two boxes and a ground
    boxA = Bodies.rectangle(400, 200, 80, 80);
    boxB = Bodies.rectangle(450, 50, 80, 80);
    ground = Bodies.rectangle(width / 2, height - 80, width - 200, 160, { isStatic: true });
    
    // add all of the bodies to the world
    // Composite.add(engine.world, [boxA, boxB, ground]);
    Composite.add(engine.world, boxA);
    Composite.add(engine.world, boxB);
    Composite.add(engine.world, ground);

    background (255);

    console.log (ground);

    Runner.run(runner,engine);
}

function draw () {
    // Engine.update(engine);
    background (255);

    push ();
    translate (boxA.position.x, boxA.position.y);
    rotate (boxA.angle);
    rect(0, 0, 80, 80);
    pop ();

    push ();
    translate (boxB.position.x, boxB.position.y);
    rotate (boxB.angle);
    rect(0, 0, 80, 80);
    pop ();


    rect(ground.position.x, ground.position.y, width - 200, 160);
}