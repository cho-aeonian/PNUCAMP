/*사각형을 마우스로 클릭해서 원 나타내기*/
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
    fill(0);
    
    if(mouselsPressed ==true) {
      ellipse(50,50,50,50);
    }
    else {
      rect(25,25,50,50);
    }
  }