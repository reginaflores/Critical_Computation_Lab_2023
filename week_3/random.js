//Global Variables:
let t = 5; //initialized
let s; // not initialized

let r;
let g;
let b;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  s = 0;

  //LOCAL VARIABLES:
  let w = width; // system variable

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  // fill(r, g, b);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50);
  //   console.log("what is t?", t);

  //   let d = random(-255, 255);
  //   console.log("what is d?", d);

  console.log("what is s", s);
}
