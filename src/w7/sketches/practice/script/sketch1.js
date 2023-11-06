let traffic;
// traffic이라는 이름의 변수 선언
let infiniteOffset = 80;
//  캔버스 밖의 일정범위 설정 (이 범위를 정함으로써 캔버스 밖으로 나간 객체들이 일정시간 이후 다시 캔버스안으로 돌아오도록 만들 수 있다.)

function setup() {
  // 프로그램 실행시 단 한번 호출된다. 화면 크기나 배경색 등의 초기환경 요소를 정의한다.
  setCanvasContainer('canvas', 3, 2, true);
  // 캔버스를 canvas라는 id가 있는 위치에 3대 2의 비율로 생성한다.
  colorMode(HSL, 360, 100, 100, 100);
// 컬러모드를 HSL로 하겠다
  background('white');
  // 배경색을 흰색으로 하겠다.
  traffic = new Traffic();
//   class Traffic을 new를 써서 변수 traffic에 넣어준다. 이렇게 함으로써 traffic 변수를 초기화
  for (let n = 0; n < 10; n++) {
    // 10개의 개체가 생성됨
    traffic.addVehicle(random(width), random(height));
    // 생성되는 개체의 위치는 랜덤하게
  }
}

function draw() {
  // setup함수 직후에 호출된다. 프로그램 실행이 중단되거나 noLoop함수가 호출되기 전까지 블록 내에 포함된 코드들을 계속 실행한다.
  background('white');
  // 배경생을 흰색으로 하겠다.
  traffic.run();
//   traffic 실행
}

function mouseDragged() {
    // 마우스를 드래그할 때
  traffic.addVehicle(mouseX, mouseY);
//   마우스의 좌표에 vehicle들이 추가된다.
}
