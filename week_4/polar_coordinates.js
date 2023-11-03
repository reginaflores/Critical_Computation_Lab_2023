//To make stuff move in computer graphics:

//1) Define the physics
//2) Define the boundary conditions
//3) Draw it on the screem


//Global Variables
//i have not initated
let x; 
let y;

//variable that i have initiated
let r = 100;
let theta = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Step1: Define the physics:
  translate(width/2, height/2);
  x = r*cos(theta);
  y = r*sin(theta);
  theta = theta + 0.03;
  
  //Step 3: Draw the object
  fill(0);
  ellipse(x, y, 10);
  
  noFill();
  ellipse(0, 0, 2*r);
}