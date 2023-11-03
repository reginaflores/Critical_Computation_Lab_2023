let d = 1;
let x;
let y;

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  ellipse(mouseX, mouseY, d);

  x = random(0, width);
  y = random(0, height);

  text("DT", x, y);
}

function mousePressed() {
  d = d + 5;
}

function mouseDragged() {
  fill(255, 0, 0);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  clear();
  background(255);
}