function setup() {
createCanvas(300, 200);
  print("BANANA")
  
}

function draw() {
   background(220);
if (mouseIsPressed) {
fill(0);
} else {
fill(255);
}
  //hair
  line(140,40,110,15)
  line(160,40,190,15)
 //head
  fill(255,212,84)
  ellipse(150,50, 75, 75);
  //body
  fill(255,212,84)
  rect(112,50,75,100)
  //eye
  fill(255,255,255)
  ellipse(150, 50, 25, 25);
    fill(0)
  ellipse(150, 50, 5, 5);
  //arms
  fill(255,212,84)
  rect(92,75,20,81)
  rect(187,75,20,81)
  //clothes
  stroke(83,118,152)
  fill(83,118,152)
  rect(125,95,50,55)
  rect(113,120,73,30)
  stroke(83,118,152)
  strokeWeight(10); // Beastly
  fill(83,118,152)
  line(130,105,112, 75);
  line(166,105,188, 75);
  strokeWeight(1); // Normal
  stroke(0,0,0)
  //legs
  fill(255,212,84)
  rect(117,150,27,20)
  rect(155,150,27,20)
  
  
 
}