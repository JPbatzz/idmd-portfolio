function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(255,255,255);
//'points' are 1 pixel that are black so i made the background white
  for(y = 20; y < height - 20; y = y + 5){
//every point is 5 pixels from eachotherand 20 pixels from the edge
    for(x = 20; x < width - 20; x = x + 5){
      point(x,y);  
    }
  }
}