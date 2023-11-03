let t = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 25);
  noStroke();
  // let x = random(0, 400);
  let x = width*noise(t);
  let y = height*noise(t+2);
  t = t + 0.03;
    
  
  fill(0, 255, 0);
  ellipse(x, y, 20);
}