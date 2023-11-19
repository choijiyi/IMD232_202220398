const latticeWidth = 512
const latticeHeight = 512

let rockPaperScissorsShader
let backBuffer
let canvas

// function preload(){
//     rockPaperScissorsShader = loadShader('rockPaperScissors/vertex.glsl', 'rockPaperScissors/fragment.glsl')
//   }

function setup() {
  canvas = ('#canvas', latticeWidth, latticeHeight);
  backBuffer = createGraphics(latticeWidth, latticeHeight);

  frameRate(30);

  let initialFrame = createImage(latticeWidth, latticeHeight);
  initialFrame.loadPixels();
  for (y = 0; y < initialFrame.height; y++) {
    for (x = 0; x < initialFrame.width; x++) {
      let index = (x + y * latticeWidth) * 4
      initialFrame.pixels[index+random([0,1,2])] = 255
      initialFrame.pixels[index + 3] = 255
    }
  }
  initialFrame.updatePixels();

  backBuffer.clear();
  backBuffer.image(initialFrame, latticeWidth * -0.5, latticeHeight * -0.5);

  background('white');
}

function draw() {
    clear();
  
    shader(rockPaperScissorsShader);
    rockPaperScissorsShader.setUniform('backBuffer', backBuffer);
    rockPaperScissorsShader.setUniform("canvasSize", [latticeWidth, latticeHeight])
  
    quad(0, 0, 1, 0, 1, 1, 0, 1)
  
    backBuffer.clear();
    backBuffer.image(canvas, latticeWidth * -0.5, latticeHeight * -0.5);

    background('white');
}