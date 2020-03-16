var x = 100;
var y = 100;
//starting postion
var dia = 75;
var rad = dia/2;
//radius is half the diameter
function setup() {
  createCanvas(600, 600);
  //change the cnavas size and the ball should still stop at the end
  background(200);
}

function draw() {
  background(255);
  var d = dist(mouseX, mouseY, x, y);
  if (d < rad) {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }
  //if mouse is in the circle it will change from green to red because     of the else statement
  ellipse(x, y, dia, dia);
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      y = max(rad, y - 5);
    } else if (keyCode == DOWN_ARROW) {
      y = min(y + 5, width-rad);
    } else if (keyCode == RIGHT_ARROW) {
      x = min(x + 5, width-rad);
    } else if (keyCode == LEFT_ARROW) {
      x = max(rad, x - 5);
    }
  }
}