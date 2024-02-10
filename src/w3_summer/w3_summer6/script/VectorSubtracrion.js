let centerV;
let mouseV;

function setup() {
    setCanvasContainer('canvas', 3, 2, true);
    background('salmon');
    
    centerV = createVector(width / 2, height / 2);
    mouseV = createVector();
}

function draw() {
    background('salmon');

    strokeWeight(2);
    stroke('cornflowerblue');
    line(0, 0, centerV.x, centerV.y);


    //마우스로 뻗어가는 벡터 만들기
    mouseV.x = mouseX;
    mouseV.y = mouseY;
    stroke('crimson');
    line(0, 0, mouseV.x, mouseV.y);

    mouseV.sub(centerV);
    translate(centerV.x, centerV.y);
    stroke('white');
    line(0, 0, mouseV.x, mouseV.y);
}