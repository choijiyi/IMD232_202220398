// 기본 창 사이즈 설정하기
let originalWidth = 1000;
let originalHeight = 667;
// 원본 가로, 세로 비율
let aspectRatio = originalWidth / originalHeight;

function setup() {
  // 위에 있는 변수를 실행하기 위한 변수 (가로, 세로, 비율)
    let canvasDimensions = getCanvasDimensions(
        windowWidth,
        windowHeight,
        aspectRatio);
        // 캔버스를 만들건데 바로 위 변수에 저장한 와이드와, 하이를 가져올 거임
    createCanvas(canvasDimensions.w, canvasDimensions.h);
    background("#ffffff");
}

function draw() {
  // 스케일의 최솟값을 위한 변수
    let scaleFactor = min(width / originalWidth, height / originalHeight);
    // 캔버스 안의 요소들이 캔버스를 중심으로 스케일이 조정되게 해주는 변수
    translate(
      (width - originalWidth * scaleFactor) / 2,
      (height - originalHeight * scaleFactor) / 2
    );
  
    // 원본 가로, 세로 비율
    let aspectRatio = originalWidth / originalHeight;
  
    scale(scaleFactor);
    background("#eceae3");
    noStroke();
    
    // 창틀
    fill('#bfb19e');
    rect(250,50,500,300);
    
    // 하늘
    fill('#00142c');
    rect(250+10,50+10,500-20,300-20);
    
    // 건물1
    fill('#000000');
    rect(740-80,340-120,50,120);
    // 건물2
    fill('#000000');
    rect(740-130,340-120-30,60,150);
    // 건물3
    fill('#000000');
    rect(740-250,340-120-10,60,130);
    // 건물4
    fill('#000000');
    rect(740-310,340-120-30-40,60,190);
    // 건물5
    fill('#000000');
    rect(740-360,340-120-30-40+20,60,170);
    // 건물6
    fill('#000000');
    rect(740-480,340-120-30,70,150);

    // 창문1
    fill('#d6d487');
    rect(660+10,340-120+15,10,10);
    // 창문2
    fill('#d6d487');
    rect(660+10+20,340-120+35,10,10);
    // 창문3
    fill('#d6d487');
    rect(610+10+10,340-120+35+30,10,10);
    // 창문4
    fill('#d6d487');
    rect(610+10+20-20,340-120+35+30,10,10);
    // 창문5
    fill('#d6d487');
    rect(610+10+20-20,340-120+35+30-40,10,10);
    // 창문6
    fill('#d6d487');
    rect(610+10+20-20-90,340-120+35+30-40-25,10,10);
    // 창문7
    fill('#d6d487');
    rect(610+10+20-20-90-20,340-120+35+30-40-25+40,10,10);
    // 창문8
    fill('#d6d487');
    rect(610+10+20-20-90,340-120+35+30-40-25+60,10,10);
    // 창문9
    fill('#d6d487');
    rect(610+10+20-20-90-60,340-120+35+30-40-25-40,10,10);
    // 창문10
    fill('#d6d487');
    rect(610+10+20-20-90-20-60,340-120+35+30-40-25+40,10,10);
    // 창문11
    fill('#d6d487');
    rect(610+10+20-20-90-60,340-120+35+30-40-25+60-40,10,10);
    // 창문12
    fill('#d6d487');
    rect(660+10-400,340-120+15,10,10);
    // 창문13
    fill('#d6d487');
    rect(660+10+20-380,340-120+35,10,10);
    // 창문14
    fill('#d6d487');
    rect(660+10-400+120,340-120+15-30,10,10);
    // 창문15
    fill('#d6d487');
    rect(660+10+20-380+110,340-120+35+40,10,10);

    // 창 선반
    fill('#bfb19e');
    rect(250-50,350-10,600,16);
    // 창 선반 그림자
    fill('#dedacd');
    rect(250-50,350-10+10,600,16);

    // 시계 원 1
    fill('#bebacf');
    circle(120,160,200);
    // 시계 원 2
    fill('#ffffff');
    circle(120,160,180);
    // 시계바늘1
    stroke('#000000');
    strokeWeight(3);
    line(120,160,60,130);
    // 시계바늘2
    stroke('#000000');
    strokeWeight(3);
    line(120,160,90,85);

    noStroke();
    // 바닥1
    fill('#dedacd');
    rect(0,500,1000,140);
    // 바닥2
    fill('#c9c2ad');
    rect(0,500,1000,20);

    // 액자1
    fill('#adc9c5');
    rect(850, 70+80, 520, 100);
    // 액자1.1
    fill('#ffffff');
    rect(850+10, 70+80+10, 520-20, 100-20);
    
    // 테이블
    fill('#c2c2c2');
    rect(500,400, 440, 40);
    // 테이블 다리
    fill('#c2c2c2');
    rect(500+210,400+10, 40, 150);
    // 테이블 바닥
    fill('#c2c2c2');
    rect(620,560, 220, 20);

    // 컵
    fill('#9e9e9e');
    rect(700+160,440-90,30,50)
    // 주스
    fill('#ff8621');
    rect(700+160+3,440-90+7,24,40)

    // 의자
    fill('#9e9e9e')
    rect(460,470,180,20)
    // 의자 다리
    fill('#9e9e9e')
    rect(460,470,20,110)
    rect(460+160,470,20,110)
}

// 셋업으로 하면 캔버스의 사이즈가 고정사이즈,  windowResized 셋업과 같은 계열, 셋업은 한번 로딩되면 사이즈가 끝, 창의 크기가 바뀔 떄마다 로딩됨
function windowResized() {
  // 173-177의 변수를 windowRisized에서 한번 더 쓰기
    let canvasDimensions = getCanvasDimensions(
      windowWidth,
      windowHeight,
      aspectRatio
    );
    resizeCanvas(canvasDimensions.w, canvasDimensions.h);
  }
  
  // ratio = 요소의 크기를 비율대로 조정함
  function getCanvasDimensions(w, h, ratio) {
    // 비율이 기본 비율보다 가로가 더 클 때, 세로의 비율에 가로를 맞춘다. (세로는 안커졌으니 그대로)
    if (w / h > ratio) {
      return {
        w: h * ratio,
        h: h,
      };
      // 비율이 기본 비율보다 세로가 더 클 때, 가로의 비율에 세로를 맞춘다. (가로는 안커졌으니 그대로)
    } else {
      return {
        w: w,
        h: w / ratio,
      };
    }
  }