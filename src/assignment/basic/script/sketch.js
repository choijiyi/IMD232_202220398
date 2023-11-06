const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin;
let angleBeginVel;
let angleBeginAcc;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  angleBegin = random();
  angleBeginVel = 0
  angleBeginAcc = (TAU/360) * 0.1;

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
        rotate(angleBegin+1);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1));
        rotate(angleBegin+1);
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
        rotate(angleBegin+2);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1));
        rotate(angleBegin+2);
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
        rotate(angleBegin+3);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *4, height / (rNum +1));
        rotate(angleBegin+3);
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
        rotate(angleBegin+4);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1));
        rotate(angleBegin+4);
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
        rotate(angleBegin+5);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1));
        rotate(angleBegin+5);
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
        rotate(angleBegin+6);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1));
        rotate(angleBegin+6);
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
        rotate(angleBegin+7);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1));
        rotate(angleBegin+7);
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
        rotate(angleBegin+8);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate(width / (cNum +1), height / (rNum +1)*2);
        rotate(angleBegin+8);
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
        rotate(angleBegin+9);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1)*2);
        rotate(angleBegin+9);
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
        rotate(angleBegin+10);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1)*2);
        rotate(angleBegin+10);
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
        rotate(angleBegin+11);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *4, height / (rNum +1)*2);
        rotate(angleBegin+11);
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
        rotate(angleBegin+12);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1)*2);
        rotate(angleBegin+12);
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
        rotate(angleBegin+13);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1)*2);
        rotate(angleBegin+13);
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
        rotate(angleBegin+14);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1)*2);
        rotate(angleBegin+14);
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
        rotate(angleBegin+15);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1)*2);
        rotate(angleBegin+15);
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
        rotate(angleBegin+16);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate(width / (cNum +1), height / (rNum +1)*3);
        rotate(angleBegin+16);
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
        rotate(angleBegin+17);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1)*3);
        rotate(angleBegin+17);
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
        rotate(angleBegin+18);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1)*3);
        rotate(angleBegin+18);
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
        rotate(angleBegin+19);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *4, height / (rNum +1)*3);
        rotate(angleBegin+19);
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
        rotate(angleBegin+20);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1)*3);
        rotate(angleBegin+20);
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
        rotate(angleBegin+21);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1)*3);
        rotate(angleBegin+21);
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
        rotate(angleBegin+22);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1)*3);
        rotate(angleBegin+22);
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
        rotate(angleBegin+23);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1)*3);
        rotate(angleBegin+23);
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
        rotate(angleBegin+24);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate(width / (cNum +1), height / (rNum +1)*4);
        rotate(angleBegin+24);
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
        rotate(angleBegin+25);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1)*4);
        rotate(angleBegin+25);
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
        rotate(angleBegin+26);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1)*4);
        rotate(angleBegin+26);
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
        rotate(angleBegin+27);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *4, height / (rNum +1)*4);
        rotate(angleBegin+27);
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
        rotate(angleBegin+28);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1)*4);
        rotate(angleBegin+28);
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
        rotate(angleBegin+29);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1)*4);
        rotate(angleBegin+29);
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
        rotate(angleBegin+30);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1)*4);
        rotate(angleBegin+30);
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
        rotate(angleBegin+31);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1)*4);
        rotate(angleBegin+31);
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
        rotate(angleBegin+32);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate(width / (cNum +1), height / (rNum +1)*5);
        rotate(angleBegin+32);
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
        rotate(angleBegin+33);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1)*5);
        rotate(angleBegin+33);
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
        rotate(angleBegin+34);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1)*5);
        rotate(angleBegin+34);
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
        rotate(angleBegin+35);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *4, height / (rNum +1)*5);
        rotate(angleBegin+35);
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
        rotate(angleBegin+36);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1)*5);
        rotate(angleBegin+36);
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
        rotate(angleBegin+37);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1)*5);
        rotate(angleBegin+37);
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
        rotate(angleBegin+38);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1)*5);
        rotate(angleBegin+38);
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
        rotate(angleBegin+39);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1)*5);
        rotate(angleBegin+39);
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
        rotate(angleBegin+40);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate(width / (cNum +1), height / (rNum +1)*6);
        rotate(angleBegin+40);
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
        rotate(angleBegin+41);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1)*6);
        rotate(angleBegin+42);
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
        rotate(angleBegin+43);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1)*6);
        rotate(angleBegin+43);
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
        rotate(angleBegin+44);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *4, height / (rNum +1)*6);
        rotate(angleBegin+44);
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
        rotate(angleBegin+45);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1)*6);
        rotate(angleBegin+45);
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
        rotate(angleBegin+46);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1)*6);
        rotate(angleBegin+46);
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
        rotate(angleBegin+47);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1)*6);
        rotate(angleBegin+47);
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
        rotate(angleBegin+48);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1)*6);
        rotate(angleBegin+48);
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
        rotate(angleBegin+49);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate(width / (cNum +1), height / (rNum +1)*7);
        rotate(angleBegin+49);
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
        rotate(angleBegin+50);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1)*7);
        rotate(angleBegin+50);
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
        rotate(angleBegin+51);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1)*7);
        rotate(angleBegin+51);
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
        rotate(angleBegin+52);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *4, height / (rNum +1)*7);
        rotate(angleBegin+52);
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
        rotate(angleBegin+53);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1)*7);
        rotate(angleBegin+53);
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
        rotate(angleBegin+54);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1)*7);
        rotate(angleBegin+54);
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
        rotate(angleBegin+55);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1)*7);
        rotate(angleBegin+55);
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
        rotate(angleBegin+56);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1)*7);
        rotate(angleBegin+56);
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
        rotate(angleBegin+57);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate(width / (cNum +1), height / (rNum +1)*8);
        rotate(angleBegin+57);
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
        rotate(angleBegin+58);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *2, height / (rNum +1)*8);
        rotate(angleBegin+58);
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
        rotate(angleBegin+59);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *3, height / (rNum +1)*8);
        rotate(angleBegin+59);
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
        rotate(angleBegin+1);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *5, height / (rNum +1)*8);
        rotate(angleBegin+1);
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
        rotate(angleBegin+2);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *6, height / (rNum +1)*8);
        rotate(angleBegin+2);
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
        rotate(angleBegin+3);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *7, height / (rNum +1)*8);
        rotate(angleBegin+3);
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
        rotate(angleBegin+4);
        line (- width / 12.5 /2, 0, 0 , 0);
        pop();

        push();
        translate((width / (cNum +1)) *8, height / (rNum +1)*8);
        rotate(angleBegin+4);
        noStroke ();
        fill (0);
        ellipse (- width / 12.5 /2, 0, width / 12.5 / 4, height /12.5 /4);
        pop();
    }
  }

  angleBeginVel += angleBeginAcc;
  angleBegin += angleBeginVel;
}
