
let detailY;
function setup() {
  createCanvas(800, 400);
  background(00,200,200);
}

function draw() {
 if (mouseIsPressed) {
   fill(0);
 } else {
   fill(255,56,57);
 }
  
  rect(mouseX, mouseY, 100, 50);
 
}
