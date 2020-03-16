function setup() {
  createCanvas(500, 500);
  textSize(40);
  background(200);
}

function draw() {
  
}
function keyTyped() {
  background(200);
  //text line if key isnt r g or b
  text(key, 100, 100);
  //simple if statement for key to color
  //(r,g,b)
  if (key.toUpperCase() == "R") {
    background(255, 0, 0);
  } else if (key.toUpperCase() == "G") {
    background(0, 255, 0);
  } else if (key.toUpperCase() == "B") {
    background(0, 0, 255);
  }
}