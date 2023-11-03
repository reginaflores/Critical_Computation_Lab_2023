function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //mouseX -- range is 0 to 400
  //r channel of color -- range is 0 to 255
  
  let r = map(mouseX, 0, width, 0, 255)
  let b = map(mouseY, 0, width, 0, 255)

  background(r, 0 , b);
  
  
}