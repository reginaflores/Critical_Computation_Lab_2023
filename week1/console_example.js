  let x=0; 


function setup() {
  createCanvas(400, 400);
  
  let mY=mouseX;
  let mX=mouseY;
}

function draw() {
  background(220);
  
  // x=100
  console.log("Welcome to CC Lab");
  console.log("i can do math", 5+5);
  console.log("x is", x);
  
  ellipse(x, 120, 16, 16);
  
  x = x +1;
  if(x>width){
    x=0;
  }
  
  mY = mouseY;
  mX = mouseX;
  ellipse(mX, mY, 40, 40);
  
  console.log(mX,mY);
}