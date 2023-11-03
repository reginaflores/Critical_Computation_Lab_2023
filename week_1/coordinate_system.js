

function setup() {
  createCanvas(400, 400);
  // rectMode(CENTER);
}

function draw() {
  background(220);

  
  translate(width/2, height/2);
  strokeWeight(5);  

  
  fill(0);
  // rect(0,0, 100);
  
  //red line
  stroke(255,0,0);
  line(0,0, 200, 0);
  //rect(x, y, w)
  fill(255,0,0);
  rect(0,0,100); //why is this in 2nd quadrant?
 
  noStroke();
  text("+200 x", 160, 10)
  
  
  
  //green line
  stroke(0,255,0);
  line(0,0,0, 200);
  fill(0,255,0);
  rect(-100,0,100)
  
  stroke(5);
  text("+200 y", 0, 190)
  
  //blue line
  stroke(0,0,255);
  line(0,0,0,-200);
  fill(0,0,255)
  rect(0,-100, 100)
  
  stroke(5);
  text("-200 y", 0, -190)
  
  
  //mauve
  stroke(155, 100, 100);
  line(0,0, -200, 0);
  fill(155, 100, 100);
  rect(-100,-100, 100);
  
  // stroke(5);
  noStroke();
  text("-200 x", -190, 15)
  
  
  
}