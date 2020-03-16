function setup() {
  
  createCanvas(400, 400);
 
  strokeWeight(5);
  //size of the line

}

function draw() {
  background(50);
  //mouse y on the y axis
  for(i = 10; i < mouseY; i = i + 18){
    line(0, i, 390, i);  
    //location of line is defined by X 
  
  }


}