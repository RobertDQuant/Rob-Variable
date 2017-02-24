function setup() {
  createCanvas(600, 400); // this is the size of the canvas
  background(250, 250, 100); // this is the color of the canvas
}

function draw() {
  fill(250, 200, 200); // this is the color of the circle
  ellipse(mouseX, mouseY, 100, 100); // the ellipse changes color as the mouse moves
}

function mousePressed() { // the background changes once the mouse is clicked
  background(250, 250, 100);
}
