/* 얼굴 그리기 */
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    //얼굴
    fill(255,255,255);
    ellipse(200,100,100);
    
    //눈
    fill(0,0,0);
    ellipse(180,80,20) //왼쪽 눈
    ellipse(220,80,20) //오른쪽 눈
    
    //코
    fill(0,255,0)
    triangle(200,80,190,110,210,110);
    
    //입
    fill(255,0,0);
    rect(175,120,50,10);
  }