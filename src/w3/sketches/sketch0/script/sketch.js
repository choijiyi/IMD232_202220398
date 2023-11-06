function setup() {
    setCanvasContainer("mySketchGoesHere", 3, 2, true);
    // 컴퓨터에서의 캔버스 기본색은 블랙, 색을 설정해주어야 보임
    // 0~255까지의 숫자를 쓸 수 있다. 총 256단계 색 (8비트컬러)
    background(255);
}

// 원을 그릴 때 들어가야 하는 필수적인 세가지 정보 (x,y,원의 지름값)
function draw() {}