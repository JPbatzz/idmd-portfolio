function setup() {
  createCanvas(500, 500);
}
//simple for loop that changes every line going from the top of the   canvas down
function draw() {
  for (i = 0; i < 500; i++) {
    stroke(i * 0.8, i * 0.5, 150);
    line(0, i, 500, i);
  }
}