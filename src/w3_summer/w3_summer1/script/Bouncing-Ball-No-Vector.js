let x;
let y;
let velocityX = 3;
let velocityY = 5;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');
    
    // 원의 시작 생성 위치
    x = width / 2.0;
    y = height / 2.0;
}

function draw() {
    background('white');

    // draw가 루프를 돌 때마다 x에 velocityX를 더해(1프레임당 velocityX만큼 이동)
    x += velocityX;
    y += velocityY;

    ellipse(x, y, 50);

    // if(x < 0) {
    //     velocityX *= -1;
    // } else if (x > width) {
    //     velocityX *= -1;
    // }

    if(x < 0 || x > width) {
        velocityX *= -1;
    }

    // if(y < 0) {
    //     velocityY *= -1;
    // } else if (y > height) {
    //     velocityY *= -1;
    // }

    if(y < 0 || y > height) {
        velocityY *= -1;
    }
}