/* 키보드로 원 이동 */
let x=200, y=200;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  fill(255,0,0);
  
  //키보드로 움직이기
  if(keyIsDown(LEFT_ARROW)) x-= 5;
  if(keyIsDown(RIGHT_ARROW)) x+= 5;
  if(keyIsDown(UP_ARROW)) y-= 5;
  if(keyIsDown(DOWN_ARROW)) y+= 5;
  
  ellipse(x,y,50);
}