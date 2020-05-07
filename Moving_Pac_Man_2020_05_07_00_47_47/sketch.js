var radius = 40;
var x = -radius;
var speed = 3;
var direction = 1;


function setup() {
  createCanvas(400, 200);
  ellipseMode(RADIUS);
  
}

function draw() {
  background('#f8bc45'); //hex instead of RGB
  fill('#fa2f5b')
  if (!mouseIsPressed) {
    x += speed; //x is increasing in speed
    if (x > width + radius) { //if off screen
      x = -radius;
    }
    arc(x, 60, radius, radius, 0.52, 5.76);
  } else {
    x += speed * direction; 
    if ((x > width - radius) || (x < radius)) { // Pac Man goes backwards
      direction = -direction; // Pac Man flips
    }
    if (direction == 1) {
      arc(x, 60, radius, radius, 0.52, 5.76); // Face right
    } else {
      arc(x, 60, radius, radius, 3.67, 8.9); // Face left
    }
  }
}