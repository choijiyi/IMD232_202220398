const {Engine, Bodies, Composite, Runner, Body, Vector, Mouse, MouseConstraint} = Matter;

const matterEngine = Engine.create ();
const matterRunner = Runner.create ();

const matterRects = [];
const matterShapes = [];

let m;
let mc;

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    rectMode(CENTER);

    matterRects.push(new MatterRect(width / 4, height -50, width /2, 50, {isStatic : true}));
    matterRects.push(new MatterRect((width / 4) * 3, height -200, width /2, 50, {isStatic : true, angle: radians(-15),}));

    const vertices = [{x: 5.5*4, y: -4.8*4}, {x: 7.6*4, y: -1.6*4}, {x: 6.5*4, y: 1.8*4}, {x: 2.7*4, y: 4.5*4}, {x: -1.2*4, y: 4.2*4}, {x: -3.6*4, y: 1.9*4},{x: -1.3*4, y: -2.8*4},];
    for (let n = 0; n < 4; n++); {
        const randomVector = p5.Vector.random2D();
        randomVector.mult (5);
        const aNewShape = new MatterShape (width /2 , 50, vertices);
        Body.setVelocity(aNewShape.body, Vector.create(randomVector.x, randomVector.y));
        Body.setAngularVelocity(radians(random(-15, 15)));
        matterShapes.push(aNewShape);
    }

    m = Mouse.create(document.querySelector('.p5Canvas'));
    // console.log (pixelDensity());
    m.picxelRatio = pixelDensity();
    mc = MouseConstraint.create(matterEngine, {mouse:m,});
    
    Composite.add(matterEngine.world, mc);

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

