

let cueball;
let indiballs = [];
let myDiv;
let font;
let canvas;

/*
function preload() {
  font = loadFont("Solway-Medium.ttf");
  
}
*/


function setup() {
  canvas = createCanvas(800, 400);
  
  canvas.parent('main');
  canvas.style('border', '2px solid white');
  cueball = new CueBall();
  
  myDiv = createDiv();
  myDiv.parent('main');
  myDiv.position(canvas.position.x - 100, canvas.position.y);
  
  
}

function draw() {
  background(0);
  
  
  for(let indiball of indiballs){
    indiball.show();
    
    if (indiball.position.x > cueball.position.x) {
      myDiv.html("The ball is to the left!");
      myDiv.style("color", "#2196F3");
      
    } else if(indiball.position.x < cueball.position.x) {
      myDiv.html("The ball is to the right!");
      myDiv.style("color", "#FF9800");
    }
    
    let radDist = p5.Vector.dist(indiball.position, cueball.position);
    
    if(radDist < cueball.radius * 2) {
      myDiv.html("Yay!!!you found the ball");
      myDiv.style("color","#4DC352");
    }
  }
}

function mousePressed() {
  if (indiballs.length < 20) {
    let indiball = new IndiBall(mouseX, mouseY);
    indiballs.push(indiball);
  }
}



