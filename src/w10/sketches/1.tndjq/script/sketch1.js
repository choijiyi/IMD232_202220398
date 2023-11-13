let cells = [];

const colNum = 10, rowNum = 10;

let w, h;

function setup () {
    setCanvasContainer('canvas', 1, 1, true);

    w = width/colNum;
    h = height/rowNum;

    for (let row = 0; row < rowNum; row++) {
        for (let col = 0; col <colNum; col++) {
            const x = w * col;
            const y = h * row;
            // let state;
            // if (random() < 0.5) {
            //     state = false;
            // } else {
            //     state = true;
            // }
            let state = random() < 0.5 ? false : true;
            cells.push(new Cell(x, y, w, h));
        }
    }

    background('white');
}

function draw () {
    background('white');
    cells.forEach((eachCell)=>{
        eachCell.display();
    })
}