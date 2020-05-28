// Minions stop moving when their eye is clicked

let button;
let button2;

// color buttons
var rButton;
var gButton;
var bButton;
var yButton;
var colorButtons = [];
var killCol;

var minions = [];
let maxMinions = 5;
let slider;

var r;
var g;
var b;
var y;
var colors = [];

function setup() {
  createCanvas(600, 600);
  background(220);

  slider = createSlider(1, 20, 5);
  slider.position(120, 15);
  maxMinions = slider.value();

  // colors
  r = color(212, 69, 25);
  g = color(46, 176, 14);
  b = color(39, 111, 194);
  y = color(255, 212, 84);
  colors = [r, g, b, y];

  // buttons
  button = createButton('Reset');
  button.position(15, 15);
  button.mousePressed(reset);

  button = createButton('Sort');
  button.position(70, 15);
  button.mousePressed(sortMinions);

  for (let i = 0; i < colors.length; i++) {
    colorButtons[i] = createButton('Kill');
    colorButtons[i].style('background-color', colors[i]);
    colorButtons[i].position(150 + 80 * i, height - 30);
    colorButtons[i].mousePressed(killColor);
  }




  for (i = 0; i < maxMinions; i++) {
    minions[i] = new Minion(random(width - 200), random(height - 200), random(colors));
  }

}

function draw() {
  background(130, 180, 240);
  fill(0);
  textSize(16);
  myText = "Create " + slider.value() + " minions (on reset)";
  text(myText, 270, 30);
  for (i = 0; i < maxMinions; i++) {
    minions[i].move();
    minions[i].display();
  }
}

function Minion(tempX, tempY, tempColor) { // constructor function

  this.x = tempX;
  this.y = tempY;
  this.speed = 5;
  this.color = tempColor;

  this.display = function() {

    translate(this.x, this.y);

    //hair
    line(140, 40, 110, 15)
    line(160, 40, 190, 15)
    //head
    fill(this.color)
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


function sortMinions() {
  for (i = 0; i < maxMinions; i++) {
    let c = minions[i].color;
    if (c == y) {
      minions[i].x = 20;
      minions[i].y = 40;
    } else if (c == r) {
      minions[i].x = width - 250;
      minions[i].y = 40;
    } else if (c == g) {
      minions[i].x = 20;
      minions[i].y = height - 200;
    } else if (c == b) {
      minions[i].x = width - 250;
      minions[i].y = height - 200;
    }
  }
}


function killColor() { // kills all minions of one color
  for (i = 0; i < minions.length; i++) {
    let mCol = minions[i].color;
    // let kCol = colors[index];
    if (mouseX < 184) {
      if (mCol == colors[0]) {
        minions[i].kill();
      }
    } else if (mouseX < 264 && mouseX > 227) {
      if (mCol == colors[1]) {
        minions[i].kill();
      }
    } else if (mouseX < 347 && mouseX > 307) {
      if (mCol == colors[2]) {
        minions[i].kill();
      }
    } else if (mouseX < 424 && mouseX > 388) {
      if (mCol == colors[3]) {
        minions[i].kill();
      }
    }
  }
}



function reset() {
  maxMinions = slider.value();
  minions = [];
  for (i = 0; i < maxMinions; i++) {
    minions[i] = new Minion(random(width - 200), random(height - 200), random(colors));
  }
}