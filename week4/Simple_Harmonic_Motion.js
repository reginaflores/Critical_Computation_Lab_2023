//Simple Harmonic Motion

//x = A cos(2Pi t/T) = x = A cos(2Pi t/period)

//Global Variables 
//these variables are initiated 
let period = 200;
let A = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //step 1: physics
  translate(width/2, height/2);
  x = A*cos(TWO_PI*frameCount/period)
  
  //step 3: draw
  fill(0);
  ellipse(x, 0, 20);
}