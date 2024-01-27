class Food {
    constructor() {
      this.x = floor(random(w));
      this.y = floor(random(h));
    }
    
    update() {
      this.x = floor(random(w));
      this.y = floor(random(h));
    }
    
    show() {
      fill(255,0,0);
      noStroke();
      rect(this.x, this.y, 1,1);
    }
  }