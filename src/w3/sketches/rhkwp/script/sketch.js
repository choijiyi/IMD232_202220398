let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}
function draw() {
  background('white');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();
  noStroke ();
  fill(0);
  ellipse(50,50,mouseX, mouseY);

  strokeWeight(2);
  stroke('blue');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
