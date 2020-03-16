function setup() {
  createCanvas(400, 400);
}
//if statement when r,g,b is pressed the canvas background changes clor to that assosiated color
function keyTyped() {
  print(key);
  if (key == "r" || key == "R") {
    background(255, 0, 0);
  } else {
    background(220);
    if (key == "g" || key == "G") {
      background(0, 255, 0);
    } else {
      background(220);

      if (key == "b" || key == "B") {
        background(0, 0, 255);
      } else {
        background(220);
      }
    }
  }
}