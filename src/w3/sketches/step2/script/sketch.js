function setup() {
    setCanvasContainer("canvas", 3, 2, true);
    background ("orange");
}
function draw() {
    background ("orange");
    fill (0);
    // if (mouseX > width / 2) {
    //     rect(width / 2, 0, width/2, height);
    //     console.log('mouse is right side of the canvas');
    // } else {
    //     console.log('mouse is left side of the canvas');
    //     rect(0, 0, width/2, height);
    // }

    // if (mouseX > width / 2) {
    //     if (mouseY > height / 2) {
    //         rect(width / 2, height / 2, width/2, height / 2);
    //     } else {
    //         rect(width / 2, 0, width/2, height / 2);
    //     }
    // } else {
    //     if (mouseY > height / 2) {
    //         rect(0, height / 2, width/2, height / 2);
    //     } else {
    //         rect(0, 0, width/2, height / 2);
    //     }
    // }

    if (MouseX > width / 3) {
        if (mouseY > height / 2) {
            rect(width / 3, height / 2, width / 3, height / 2);
        } else {
            rect(width / 3, 0, width / 2, height / 2);
        }
    } else if (maouseX > ( 2 * width ) / 3) {
        if (mouseY > height / 2) {
            rect((2 * width) / 3, height / 2, width / 3, height / 2);
        } else {
            rect((2 * width) / 3, 0, width / 2, height / 2);
        }
    }
    else {
        if (mouseY > height / 2) {
            rect(width / 3, height / 2, width / 3, height / 2);
        } else {
            rect(width / 3, 0, width / 2, height / 2);
        }
    }
    
} 