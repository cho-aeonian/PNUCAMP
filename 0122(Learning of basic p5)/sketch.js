//arr.push(arr[arr.length-1]+1);
let x = 20;
let y = 20;
let w;
let h;
let rez = 10;
let food;
let tail;

//프로그램 시작 전 최초로 한 번만 실행
function setup() {
  createCanvas(400, 400);
  w = floor(width/rez);
  h = floor(height/rez);
  //(0,0)좌표가 food에 들어감.
  food = createVector(0,0);
  //기존에 만들었던 벡터를 똑같이 카피함.
  tail = food.copy();
}

//마우스 누르면 움직임
// function mousePressed() {
//   x = floor(random(w));
//   y = floor(random(h));
// }

//키보드 왼쪽 방향키 누르면 움직임
function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    food.x = floor(random(w));
    food.y = floor(random(h));
    tail.x = food.x+1;
    tail.y = food.y+1;
  }
}

//프로그램 수행 시 무한 반복 실행
function draw() {
  //scale() : 픽셀단위 1->rez;
  scale(rez);
  background(220); //R,G,B
  fill(255,0,0);
  noStroke();
  rect(food.x,food.y,1,1);
  rect(tail.x,tail.y,1,1);
}