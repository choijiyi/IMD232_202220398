const {Engine, Bodies, Composite, Runner, Body, Vector} = Matter;

const matterEngine = Engine.create ();
const matterRunner = Runner.create ();

const matterRects = [];
const matterShapes = [];

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    rectMode(CENTER);

    matterRects.push(new MatterRect(width / 4, height -50, width /2, 50, {isStatic : true}));
    matterRects.push(new MatterRect((width / 4) * 3, height -200, width /2, 50, {isStatic : true, angle: radians(-15)}));

    const vertices = [{x: 5.5*2, y: -4.8*2}, {x: 7.6*2, y: -1.6*2}, {x: 6.5*2, y: 1.8*2}, {x: 2.7*2, y: 4.5*2}, {x: -1.2*2, y: 4.2*2}, {x: -3.6*2, y: 1.9*2},{x: -1.3*2, y: -2.8*2},];
    const randomVector = p5.Vector.random2D();
    randomVector.mult (5);
    matterShapes.push(new MatterShape(width /2 , 50, vertices, {velocity: {x: randomVector.x, y: randomVector.y}, angularVelocity: random(-3, 3),}));

    background ('white');

    Runner.run(matterRunner, matterEngine);
}

function draw () {
    background ('white');
    
    matterRects.forEach((each)=>{
        each.display();
    });
    
    for (let idx = matterShapes.length-1; idx >= 0; idx--) {
        matterShapes[idx].display();
        if(matterShapes[idx].isDead()) {
            matterShapes[idx].remove();
            matterShapes.splice(idx,1);
        }
    }
    

    // console.log('world.bodies.length', matterEngine.world.bodies.length);/
}

function mouseDragged () {
    const vertices = [{x: 5.5*2, y: -4.8*2}, {x: 7.6*2, y: -1.6*2}, {x: 6.5*2, y: 1.8*2}, {x: 2.7*2, y: 4.5*2}, {x: -1.2*2, y: 4.2*2}, {x: -3.6*2, y: 1.9*2},{x: -1.3*2, y: -2.8*2},];
    const aNewShape = new MatterShape(mouseX, mouseY, vertices);
    const randomVector = p5.Vector.random2D();
    randomVector.mult (5);
    Body.setVelocity (aNewShape.body, Vector.create(randomVector.x, randomVector.y));
    Body.setAngularVelocity (aNewShape.body, radians(random(-15, 15)));
    matterShapes.push(aNewShape);
}