function setup() {
  createCanvas(400, 400);
  noFill();
  background(255);
  for(d = 10; d < width; d = d + 10){
    //the ellipse are going to be 10 pixles larger that         the last and it's in a for loop up until the width       of the canvas  
    ellipse(width / 2, height / 2, d, d);  
   }
 }