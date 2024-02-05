/* 일정 간격으로 사각형 그리기 */
function setup() {
    createCanvas(400, 400);
    
  //   fill(0,0,255);
  //   rect(50,50,100,100);
  //   noStroke();
    
  //   fill(0,0,200);
  //   translate(30,30);
  //   rect(50,50,100,100);
    
  //   fill(0,0,150);
  //   translate(30,30);
  //   rect(50,50,100,100);
    
  //   fill(0,0,100);
  //   translate(30,30);
  //   rect(50,50,100,100);
    
  //   fill(0,0,50);
  //   translate(30,30);
  //   rect(50,50,100,100);
  // }
  
  for(let i=0; i<5; i++) {
    fill(0,0,255-(i*50));
    rect(50,50,100,100);
    translate(30,30);
    }
  }
  
  function draw() {
    //background(220);
  }