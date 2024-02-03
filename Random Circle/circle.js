/* 랜덤으로 원 그리기 */
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    r=random(255);
    g=random(255);
    b=random(255);
    x=random(width);
    y=random(height);
    ra=random(10,50);
    noStroke();
    fill(r,g,b);
    ellipse(x,y,ra);
  }