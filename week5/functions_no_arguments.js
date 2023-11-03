
//Global Variables:
let x;
let y;
let diameter = 20;
let velocity = 10;//note this is just speed. It is not meant to be a vector. 
let gravity = 0.5;
let friction = 0.8;//air resistance

/////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = 40;
}

function draw() {
  physics();
  bounding();
  display();
}
/////////////////////////////////////////

//No Arguments

function physics(){
  velocity += gravity;
  y = y + velocity;
  
}

function bounding(){
  if(y > height){
    y = height;
    velocity *= -1*friction;    
  
  }
}

function display(){
  background(0);
  ellipse(x, y-diameter/2, diameter, diameter);
}