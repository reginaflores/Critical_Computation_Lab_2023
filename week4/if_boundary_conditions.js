//Ball to drop to the bottom of the screen:
let x=0;
let y=0;
let r = 10;

let xSpeed = 12;
let ySpeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  //Define Physics
  x = x+xSpeed;
  y = y+ySpeed;
  
  //Define Boundary Conditions:
  
  if(y>height || y<0){
    // y=height;
    ySpeed = -ySpeed;
  }
  if(x>width || x<0){
    // y=height;
    xSpeed = -xSpeed;
  }

  
  //Draw our object/sprite/ship
  fill(0);
  ellipse(x, y-r, 2*r);
}