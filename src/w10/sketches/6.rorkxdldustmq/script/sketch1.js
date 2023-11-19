const tiles = [];

const colNum = 50,
  rowNum = colNum;



// function preload(){
    //     rockPaperScissorsShader = loadShader('rockPaperScissors/vertex.glsl', 'rockPaperScissors/fragment.glsl')
    //   }
    
function setup() {
    setCanvasContainer ('canvas', 1, 1, true);
    const w = width / colNum;
    const h = w;
    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col < colNum; col++) {
            const x = w * col;
            const y = h * row;
            const newTile = new Tile(x, y, w, h);
            tiles.push(newTile);
        }
    }
    
    background('white');
}

function draw() {
    background(255);

  tiles.forEach((each) => {
    each.calcNextState();
  });
  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}