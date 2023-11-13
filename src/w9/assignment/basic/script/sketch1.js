const {Engine, Runner, Body, Composite,Composites, Common, Constraint, MouseConstraint, Mouse, Bodies, Vertices} = Matter;

Common.setDecomp(decomp);

let engine = Engine.create();
let runner = Runner.create();

let cWidth = 800;
let cHeight = 600;

let group;
let ropeA;
let ropeB;
let ropeC;

let mouse;
let mouseConstraint;

function setup () {
    setCanvasContainer('canvas', cWidth, cHeight, true);

    rectMode(CENTER);

    let arrow = Vertices.fromPath ('5 -15 5 -5 30 -5 36 20 5 20 4 30 -8 10');
    let arroww = Vertices.fromPath ('5 -15 5 -5 30 -5 36 20 5 20 4 30 -8 10');
    

    // add bodies
    group = Body.nextGroup(true);
        
    ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function(x, y) {
        return Bodies.fromVertices(x, y, Common.choose ([arrow]),
        {collisionFilter : {group: group}});
    });
    
    Composites.chain(ropeA, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    Composite.add(ropeA, Constraint.create({ 
        bodyB: ropeA.bodies[0],
        pointB: { x: -25, y: 0 },
        pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
        stiffness: 0.5
    }));

    ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function(x, y) {
        return Bodies.fromVertices(x, y, Common.choose ([arrow]),
        {collisionFilter : {group: group}});
    });
    
    Composites.chain(ropeB, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    Composite.add(ropeB, Constraint.create({ 
        bodyB: ropeB.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
        stiffness: 0.5
    }));
    
    // group = Body.nextGroup(true);
    
    // ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function(x, y) {
    //     return Bodies.circle(x, y, 20, { collisionFilter: { group: group }});
    // });
    
    // Composites.chain(ropeB, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    // Composite.add(ropeB, Constraint.create({ 
    //     bodyB: ropeB.bodies[0],
    //     pointB: { x: -20, y: 0 },
    //     pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
    //     stiffness: 0.5
    // }));
    
    group = Body.nextGroup(true);

    ropeC = Composites.stack(600, 50, 10, 1, 10, 10, function(x, y) {
        return Bodies.fromVertices(x, y, Common.choose ([arroww]),
        {collisionFilter : {group: group}});
    });
    
    Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
    Composite.add(ropeC, Constraint.create({ 
        bodyB: ropeC.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
        stiffness: 0.5
    }));
    
    Composite.add(engine.world, [
        ropeA,
        ropeB,
        ropeC,
        // Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
    ]);

    // // add mouse control
    mouse = Mouse.create(document.querySelector(".p5Canvas"))
    mouse.pixelRatio = (pixelDensity() * width) / cWidth;
    mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
            }
        });

    Composite.add(engine.world, mouseConstraint);

    background ('white');

    Runner.run(runner, engine);
}

function draw () {
    mouse.pixelRatio = (pixelDensity() * width) / cWidth;
    
    background ('white');

    noStroke();
    fill('coral');

    ropeA.bodies.forEach((eachBody) => {
        eachBody.parts.forEach((eachPart, idx) => {
          if (idx === 0) return;
          beginShape();
          eachPart.vertices.forEach((eachVertex) => {
            vertex(
              (eachVertex.x / cWidth) * width,
              (eachVertex.y / cHeight) * height
            );
            endShape(CLOSE);
          });
        });
      });

    noStroke();
    fill('blue');

    ropeB.bodies.forEach((eachBody) => {
        eachBody.parts.forEach((eachPart, idx) => {
          if (idx === 0) return;
          beginShape();
          eachPart.vertices.forEach((eachVertex) => {
            vertex(
              (eachVertex.x / cWidth) * width,
              (eachVertex.y / cHeight) * height
            );
            endShape(CLOSE);
          });
        });
      });

    noStroke();
    fill('yellow');

    ropeC.bodies.forEach((eachBody) => {
        eachBody.parts.forEach((eachPart, idx) => {
          if (idx === 0) return;
          beginShape();
          eachPart.vertices.forEach((eachVertex) => {
            vertex(
              (eachVertex.x / cWidth) * width,
              (eachVertex.y / cHeight) * height
            );
            endShape(CLOSE);
          });
        });
      });
}