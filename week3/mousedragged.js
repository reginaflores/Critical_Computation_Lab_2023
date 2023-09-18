
function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {

}

function mouseDragged() {
  stroke(0);
  fill(0);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
}