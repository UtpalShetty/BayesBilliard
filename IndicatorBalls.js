//Create INDICATOR balls such that when the user mouse is clicked on the canvas, it shows up on the canvas

class IndiBall {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.radius = 10;
    }
    
    show() {
      fill("rgba(4, 244, 156, 0.92)");
      stroke(255);
      circle(this.position.x, this.position.y, this.radius * 2);
    }
  }