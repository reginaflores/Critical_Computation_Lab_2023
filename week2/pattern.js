function setup() {
  createCanvas(400, 400);
  // rectMode(CENTER);
}

function draw() {
  background(17, 255, 227);
  
  stroke(0);
  strokeWeight(0.1);
  //diagonal down
  line(0,0, 400,400);
  line(0,50, 350,400);
  line(0,100, 300,400);
  line(0,150, 250,400);
  line(0,200, 200,400);
  line(0,250, 150,400);
  line(0,300, 100,400);
  line(0,350, 50,400);

  //diagonal up
  line(50,0, 450,400);
  line(100,0, 500,400);
  line(150,0, 550,400);
  line(200,0, 600,400);
  line(250,0, 650,400);
  line(300,0, 700,400);
  line(350,0, 750,400);
  
  //diagonal down 
  line(400, 0, 0, 400);
  line(450, 0, 0, 450);
  line(500, 0, 0, 500);
  line(550, 0, 0, 550);
  line(600, 0, 0, 600);
  line(650, 0, 0, 650);
  line(700, 0, 0, 700);
  line(750, 0, 0, 750);

  //diagonal up
  line(350, 0, 0, 350);
  line(300, 0, 0, 300);
  line(250, 0, 0, 250);
  line(200, 0, 0, 200);
  line(150, 0, 0, 150);
  line(100, 0, 0, 100);
  line(50, 0, 0, 50);

  

  //Red Rounded rectangles
  fill(255, 0, 0);
  noStroke();
  rect(45, 100, 10, 200, 25);
  rect(145, 100, 10, 200, 25);
  rect(245, 100, 10, 200, 25);
  rect(345, 100, 10, 200, 25);

  //B lue dots
  fill(31, 81, 255);
  // ellipse(50, 0, 10);
  // ellipse(150, 0, 10);
  // ellipse(250, 0, 10);
  // ellipse(350, 0, 10);
  
  
  ellipse(50, 50, 10);
  ellipse(150, 50, 10);
  ellipse(250, 50, 10);
  ellipse(350, 50, 10);
  
  ellipse(50, 350, 10);
  ellipse(150, 350, 10);
  ellipse(250, 350, 10);
  ellipse(350, 350, 10);
  
  // ellipse(50, 400, 10);
  // ellipse(150, 400, 10);
  // ellipse(250, 400, 10);
  // ellipse(350, 400, 10);

}