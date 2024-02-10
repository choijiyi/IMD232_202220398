const stripeNum = 20;
const stripeNum2 = 15;
const stripeBegin = 15;
const stripeGap = 30;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('white');
}

function draw() {
    background('white');

    noStroke();

    rectMode(CENTER);
    // for(let i = 0; i < stripeNum; i++) {
    //     const rectWidth = width / (stripeNum + stripeNum + 1);
    //     const rectX = (width / (stripeNum + stripeNum + 1) * (2 * i + 1));
    //     rect(rectX, 0, rectWidth, height);
    // }

    // for(let i = 0; i < stripeNum; i++) {
    //     const rectHeight = height / (stripeNum + stripeNum + 1);
    //     const rectY = (height / (stripeNum + stripeNum + 1) * (2 * i + 1));
    //     rect(0, rectY, width, rectHeight);
    // }

    for(let i = 0; i < stripeNum; i++) {
        for(let j = 0; j < stripeNum2; j++) {
            fill((255 / stripeNum) * i, (255 / stripeNum2) * j, 255);
            let x = (i + 1) * width / (stripeNum + 1);
            let y = (j + 1) * height / (stripeNum2 + 1);
            if(i % 2 == 0) {
                ellipse(x, y, 10);
            } else {
                rect(x, y, 10);
            }
        }
    }

    // for(let i = stripeBegin; i < width; i += 2 * stripeGap) {
    //     rect(i, 0, stripeGap, height);
    // }
}