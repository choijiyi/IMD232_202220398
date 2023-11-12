// module aliases
let Engine = Matter.Engine;
let Render = Matter.Render;
let Runner = Matter.Runner;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;

// create engine
let engine = Engine.create();

let elem = document.querySelector('#canvas');
console.log (elem);

// create a renderer
let render = Render.create({
    element: elem,
    engine: engine,
    options: {wireframeBackground: '#0000ff', width: elem.clientWidth, height: (elem.clientWidth /4) * 3 },
});
console.log (render);

// create two boxes and a ground
let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, ground]);
Composite.add(engine.world, boxA);
Composite.add(engine.world, boxB);
Composite.add(engine.world, ground);

// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
Runner.run(runner, engine);