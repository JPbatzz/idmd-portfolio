let bug = []; // array
let maxBugs = 20;//max amount of bus
let dia = 40; // size of bug

function setup() {
  createCanvas(480, 120);
  for (i = 0; i < maxBugs; i++) {
    
    bug[i] = new JitterBug(random(width), random(height), dia, color(255)); //jitter bug object call
  }
}

function draw() {
  background(190);
  for (i = 0; i < maxBugs; i++) {
    bug[i].jitter();
    bug[i].display();
  }
}

function JitterBug(posx, posy, dia, color) { // Define constructor
  this.posx = posx; 
  this.posy = posy;
  this.dia = dia;
  this.speed = 5; //tick speed normal
  this.color = color;

  this.jitter = function() {
    this.posx += random(-this.speed, this.speed);
    this.posy += random(-this.speed, this.speed);
  }

  
  this.kill = function() {
    this.color = "red";
    this.speed = 0; //tick speed when red
 
  }

  
  this.display = function() {
    fill(this.color);
    ellipse(this.posx, this.posy, this.dia, this.dia);

}
  
}

function mousePressed() {
  for (i = 0; i < maxBugs; i++) {
    d = dist(mouseX, mouseY, bug[i].posx, bug[i].posy)
    if (d <= dia) {
      bug[i].kill();
    }
  }
}