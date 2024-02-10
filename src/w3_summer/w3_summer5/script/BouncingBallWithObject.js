let position = {
    add: function (otherVector) {
        this.x += otherVector.x;
        this.y += otherVector.y;
    },
};

let velocity = {
    x : 3,
    y : 5,
};


function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');

    position.x = width / 2;
    position.y = height / 2;

    console.log('position', position);
    console.log('velocity', velocity);
}

function draw() {
    background('white');

    // position.x += velocity.x;
    // position.y += velocity.y;
    position.add(velocity);

    ellipse(position.x, position.y, 50);

    if(position.x < 0 || position.x > width) {
        velocity.x *= -1;
    }

    if(position.y < 0 || position.y > height) {
        velocity.y *= -1;
    }
}