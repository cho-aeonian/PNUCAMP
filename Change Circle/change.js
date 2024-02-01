/* 원형이 점점 커지다가 벽에 닿으면 다시 작아지는 현상 반복*/
let r=50;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);
  fill(255);
  r=r+10;
  if(r>width) {
    r=r*-1;
  }
  ellipse(width/2, height/2, r);
}