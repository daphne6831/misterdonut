let canvas;
let bg;
let lioncha;
let lioncha2;
let mousecha;
let elephantcha;
let positionX,positionY,angle,scaleX,scaleY;



function lionfloat(){
    angle= random(0,360)
    positionX =random(150)*10;
    positionY =random(100)*10;
    scaleX =random(10,250);
    scaleY =random(10,250)*1.3;
    imageMode(CENTER);
    rotate(angle);
    image(lioncha, positionX ,positionY,scaleX,scaleX);
    
}

function preload() {
   bg = loadImage('img/p5/interractivebg2.png');
   lioncha = loadImage('img/p5/lion1.png');
   lioncha2 = loadImage('img/p5/lion2.png');
   mousecha = loadImage('img/p5/mouse.png');
   elephantcha = loadImage('img/p5/elephant.png');

}
function setup(){
canvas = createCanvas(displayWidth,displayHeight);
canvas.position(0,0);
background(bg);
canvas.mousePressed(stopAni);

// noLoop();
}

function draw(){
 
// image(mousecha, mouseX ,mouseY,100,100);    
frameRate(30);
imageMode(CENTER);
// rotate(angle);
lionfloat();




// clear();

}
// function mousePressed(){
//     remove(lionfloat);
// }

function stopAni() {
    if (isLooping() === true) {
      noLoop();
    } else {
      loop();
    }
  }


