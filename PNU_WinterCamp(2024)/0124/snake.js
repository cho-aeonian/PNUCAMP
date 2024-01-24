class Snake {
    // 스네이크 생성자
    // 필요한 필드를 설정하고 초기화 시킴
    constructor() {
      this.body = [];
      this.body[0] = createVector(0, 0);
      this.xdir = 0;
      this.ydir = 0;
    }
    
    setDir(x,y) {
      this.xdir = x;
      this.ydir = y;
    }
    
    eat(food) {
      if(this.body[this.body.length-1].x === food.x && this.body[this.body.length-1].y === food.y) {
        this.grow();
        return true;
      }
      return false;
    }
    
    grow() {
      let head = this.body[this.body.length-1].copy();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }
    
    update() {
      let head = this.body[this.body.length-1].copy();
      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }
    
    endGame(){
      let head = this.body[this.body.length-1].copy()
      if(head.x > w-1 || head.x < 0 || head.y > h-1 || head.y < 0)
        return true;
      for(let i=0; i<this.body.length-1; i++) {
        if(head.x === this.body[i].x && head.y === this.body[i].y)
          return true;
      }
      return false;
    }
    
    show() {
      for(let i=0; i<this.body.length; i++) {
        fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1);
      }
    }
  }