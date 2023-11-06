<<<<<<< HEAD
const ellipseNum1 = 8;
const ellipseNum2 = 8;
const ellipseStart = (width/12.5, height/12.5 );
const ellipseGap = (width/12.5, height/12.5 );

function setup () {
    setCanvasContainer ('canvas', 1, 1, true);

    colorMode(HSL, 360, 100, 100, 100);

    background (255);
}

function draw () {
    
    // stroke (0);
    // strokeWeight (1);
    // noFill ();
    
    for (let a = 0; a < ellipseNum1; a++) {
        for (let b = 0; b < ellipseNum2; b++) {
            fill ((255 / ellipseNum1) * a, (255 / ellipseNum2) * b, 255);
            let x = (a + 1) * width / (ellipseNum1 + 1);
            let y = (b + 1) * height / (ellipseNum2 + 1);

            push ();
            translate (width / 12.5, height /12.5);
            stroke (0);
            strokeWeight (1);
            noFill ();  
            ellipse (0, 0, 50);
            pop();
            
            push ();
            translate (width / 12.5, height /12.5);
            stroke (0);
            strokeWeight (1);
            noFill ();  
            ellipse (0, 0, 50);
            pop();
        }
    }

}
=======
const ellipseNum1 = 8;
const ellipseNum2 = 8;
const ellipseStart = (width/12.5, height/12.5 );
const ellipseGap = (width/12.5, height/12.5 );

function setup () {
    setCanvasContainer ('canvas', 1, 1, true);

    colorMode(HSL, 360, 100, 100, 100);

    background (255);
}

function draw () {
    
    // stroke (0);
    // strokeWeight (1);
    // noFill ();
    
    for (let a = 0; a < ellipseNum1; a++) {
        for (let b = 0; b < ellipseNum2; b++) {
            fill ((255 / ellipseNum1) * a, (255 / ellipseNum2) * b, 255);
            let x = (a + 1) * width / (ellipseNum1 + 1);
            let y = (b + 1) * height / (ellipseNum2 + 1);

            push ();
            translate (width / 12.5, height /12.5);
            stroke (0);
            strokeWeight (1);
            noFill ();  
            ellipse (0, 0, 50);
            pop();
            
            push ();
            translate (width / 12.5, height /12.5);
            stroke (0);
            strokeWeight (1);
            noFill ();  
            ellipse (0, 0, 50);
            pop();
        }
    }

}
>>>>>>> 0480aa89fd0efb597413d1bb0078abe79225bb11
