var x = 25;
var dir = 1;
var speed = 15

function setup() {
  createCanvas(300, 200);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
 
 
  
  ellipse(x, 100, 50, 50);
  if (x > 275 || x < 25) {
    dir = dir * -1;
  }
  x = x + speed * dir;
 fill((255));
  function changeColor() {
  var C1 = random(255);
  var C2 = random(255);
  var C3 = random(255);
  //x = (x + 1) % 275;
  //x = min(x + 1, 275);
  //x = x + 1;

}
}