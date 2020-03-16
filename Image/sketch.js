
// image size is 1000 x 667
var prl;
var prlWidth = 400;
var aspectRatio = 1000 / 667;

function preload() {
  prl = loadImage("Switzerland.jpeg");
}
//image is its own sketch file
function setup() {
  createCanvas(800, 800);
}

function draw() {
background(255);
  image(prl, mouseX, mouseY, prlWidth, prlWidth / aspectRatio);
  //devide by the aspect ration to get the right dimentions
}
