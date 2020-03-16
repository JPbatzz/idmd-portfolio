function setup() {
 
  createCanvas(500, 500);
  background(255,255,255);
  
  var nums = [1, 2, 3];
  //dealing with nubmers as variables instead of text or shapes
  append(nums, 7);
  nums[2] = 0;
 //number dimentions
  for (i = 0; i < nums.length; i++) {
    text(nums[i], 100, 25 + 50 * i);
  }
}

