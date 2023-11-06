let posX;
let posY;
// 벡터: 2차원에서 객체가 얼마나 이동했는지에 대한 값
//       어떤 방향으로(각도의 개념), 얼마나(길이의 개념)
//       물체가 어디로 이동하는가에 대한 기술이 쉬워짐
let posXAdd = 3;
let posYAdd = -2;

function setup() {
    setCanvasContainer("mySketchGoesHere", 3, 2, true);
    background(255);
    posX = width /2;
    posY = height /2;
    ellipse(posX, posY, 50);
}

function draw() {
    // 백그라운드를 넣지 않으면 한 번 생성된 원이 사라지지 않고 계속 보인다
    // 왜냐하면 계속해서 루프되는데 백그라운드가 없이 루프되면 원이 이미 있는거 + 원
    background(255);
    // 그리는 것보다 계산하는 것을 더 먼저하는 것을 추천
    // 그리고 나서 계산 = 원이 중앙에 있다가 출발
    // 계산하고 그리기 = 원이 중앙에 있던 적이 없음
    // 원을 중앙에 둔 것을 한 번 보여주고 싶다면 셋업에 원 추가
    posX += 5;
    posY += 3;
    ellipse(posX, posY, 50);
    // posX ++ ;
    // posX = posX + 1;
    // posX += 1;
}