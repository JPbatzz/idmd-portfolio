function setup() {
  createCanvas(500, 500);
  background(200);
  //simple for loop up to a canvas around 500 x 500
  //the smaller you make the canvas the less circles there will be
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      ellipse(i * 50 + 25, j * 50 + 25, 50, 50);
    }
  }
}

function draw() {

}