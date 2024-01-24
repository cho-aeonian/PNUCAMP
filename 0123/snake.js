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
      //if(뱀의 머리가 경계선을 초과하였는가?)
      //if(뱀의 머리가 뱀의 머리를 제외한 몸통에 닿았는가?)
      if(this.body[this.body.length-1].x>= width/20 || this.body[this.body.length-1].y>=height/20
         || this.body[this.body.length-1].x<0 || this.body[this.body.length-1].y<0){
        return 1;
      }
      const xhead=this.body[this.body.length-1].x;
      const yhead=this.body[this.body.length-1].y;
      for(let i=0;i<this.body.length-1;++i){
        if(xhead==this.body[i].x && yhead==this.body[i].y){
          return 1;
        }
      }
    }
    
    show() {
      for(let i=0; i<this.body.length; i++) {
        fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1);
      }
    }
  }