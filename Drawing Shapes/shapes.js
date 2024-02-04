/* 도형 그리기 */
function setup() {
    createCanvas(400, 400);
    
    //사각형그리기
    fill(0,0,255); //도형색상채우기
    stroke(255,0,0); //테두리 색상
    strokeWeight(0); //테두리 두께
    //noStroke(); === strokeWeight(0);
    rectMode(CENTER); //시작점 중심점으로 변경
    rect(300,300,100,100) //사각형 그리기
    
    //삼각형그리기
    fill(255,0,0);
    triangle(100,50,50,150,150,150);
    
    //원그리기
    fill(0,255,0);
    ellipse(200,200,100);
  }
  
  function draw() {
    //background(220);
  }