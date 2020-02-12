//dotted line
function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
}
function draw() {
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    line(250, 250, mouseX, mouseY);
    fill(random(255),random(255),random(255))
   ellipse(mouseX, mouseY, 4, 4);    
  }

}