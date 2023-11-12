const {Engine, Bodies, Composite, Runner} = Matter;

const matterEngine = Engine.create ();
const matterRunner = Runner.create ();

const matterRects = [];

function setup () {
    setCanvasContainer ('canvas', 3, 2, true);

    rectMode(CENTER);

    matterRects.push(new MatterRect(width / 2, 50, random(8,16), random(8,16)));
    matterRects.push(new MatterRect(width / 4, height -50, width /2, 50, {isStatic : true}));
    matterRects.push(new MatterRect((width / 4) * 3, height -200, width /2, 50, {isStatic : true, angle: radians(-15)}));

    background ('white');

    Runner.run(matterRunner, matterEngine);
}

function draw () {
    background ('white');

    // matterRects.forEach((each)=>{
    //     each.display();
    // });
    for (let idx = matterRects.length-1; idx >= 0; idx--) {
        matterRects[idx].display();
        if(matterRects[idx].isDead()) {
            matterRects[idx].remove();
            matterRects.splice(idx,1);
        }
    }

    console.log('world.bodies.length', matterRects.length);
    console.log('world.bodies.length', matterEngine.world.bodies.length);
}

function mouseDragged () {
    matterRects.push(new MatterRect(mouseX, mouseY, random(8,16), random(8,16)));
}