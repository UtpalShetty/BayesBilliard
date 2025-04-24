//Create the CUEBALL and set it up
class CueBall {
    constructor() {
      this.position = createVector(random(width), random(height));
      this.radius = 10;
    }
    
    display() {
      fill(150);
      stroke(0);
      circle(this.position.x, this.position.y, this.radius * 2);
    }
  }