<<<<<<< HEAD
const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  // angleBegin = (TAU/360) * 1;
  angleBeginVel = (TAU/360) * 1;

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();
      
      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 /4);
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
=======
const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  // angleBegin = (TAU/360) * 1;
  angleBeginVel = (TAU/360) * 1;

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1));
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1));
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1));
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*2);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*2);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*2);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*3);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*3);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*3);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*4);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*4);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*4);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();
      
      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*5);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*5);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*5);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*6);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*6);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*6);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*7);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*7);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*7);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 1
      push();
      translate(width / (cNum +1), height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate(width / (cNum +1), height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 2
      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *2, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 3
      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *3, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 4
      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *4, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 5
      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *5, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 6
      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *6, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 7
      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *7, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 / 4);
      pop();

      // 8
      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*8);
      noFill ();
      ellipse (0,0, width / 12.5, height / 12.5);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*8);
      rotate(angleBegin);
      line (- width / 12.5 /2, 0, 0 , 0);
      pop();

      push();
      translate((width / (cNum +1)) *8, height / (rNum +1)*8);
      rotate(angleBegin);
      noStroke ();
      fill (0);
      ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 /4);
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
>>>>>>> 0480aa89fd0efb597413d1bb0078abe79225bb11
