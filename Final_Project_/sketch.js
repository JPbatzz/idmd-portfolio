// Minions stop moving when their eye is clicked

let button;

var minions = [];
let maxMinions = 5;

function setup() {
  createCanvas(600, 600);
  background(220);
  button = createButton('Reset');
  button.position(15, 15);
  button.mousePressed(reset);

  for (i = 0; i < maxMinions; i++) {
    minions[i] = new Minion(random(width - 200), random(height - 200));
  }

}

function draw() {
  background(130, 180, 240);
  for (i = 0; i < maxMinions; i++) {
    minions[i].move();
    minions[i].display();
  }
}

function Minion(tempX, tempY) { // constructor function

  this.x = tempX;
  this.y = tempY;
  this.speed = 5;

  this.display = function() {

    translate(this.x, this.y);

    //hair
    line(140, 40, 110, 15)
    line(160, 40, 190, 15)
    //head
    fill(255, 212, 84)
    ellipse(150, 50, 75, 75);
    //body
    fill(255, 212, 84)
    rect(112, 50, 75, 100)
    //eye
    if (this.speed === 0) {
      fill(255, 0, 0)
    } else {
      fill(255);
    }
    ellipse(150, 50, 25, 25);
    fill(0)
    ellipse(150, 50, 5, 5);
    //arms
    fill(255, 212, 84)
    rect(92, 75, 20, 81)
    rect(187, 75, 20, 81)
    //clothes
    stroke(83, 118, 152)
    fill(83, 118, 152)
    rect(125, 95, 50, 55)
    rect(113, 120, 73, 30)
    stroke(83, 118, 152)
    strokeWeight(10); // Beastly
    fill(83, 118, 152)
    line(130, 105, 112, 75);
    line(166, 105, 188, 75);
    strokeWeight(1); // Normal
    stroke(0)
    //legs
    fill(255, 212, 84)
    rect(117, 150, 27, 20)
    rect(155, 150, 27, 20)

    translate(-this.x, -this.y);

  }

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    //translate(random(-this.x, this.x), random(-this.y, this.y));
  }

  this.kill = function() {
    this.speed = 0;
  }
}

function mousePressed() {
  for (i = 0; i < maxMinions; i++) {
    d = dist(mouseX, mouseY, minions[i].x + 150, minions[i].y + 50)
    if (d <= 25) { // Eye width
      minions[i].kill();
    }
  }
}


function reset() {
  minions = [];
  for (i = 0; i < maxMinions; i++) {
    minions[i] = new Minion(random(width - 200), random(height - 200));
  }
}
