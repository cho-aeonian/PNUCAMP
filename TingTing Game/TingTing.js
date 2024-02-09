/* 원형이 오른쪽, 왼쪽으로 반복하기 */
function setup() {
    createCanvas(400,400);
  }
  let k=0;
  let s=5;
  
  function draw() {
    background(0);
    fill(255);
    k+=s;
    
    if(k>width) {
      s*=-1;
    }
    else if(k<0) {
      s*=-1;
    }
    ellipse(k,height/2,50);
  }