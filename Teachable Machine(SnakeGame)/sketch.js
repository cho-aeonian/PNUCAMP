//variable for image classify
let imageModelURL = "https://teachablemachine.withgoogle.com/models/0nR48L9R6K/"
let video;
let flippedVideo;
let classifier;
let label='waiting...';

//variable for snake fame
let snake;
let food;
let rez=20;
let w;
let h;
let score=0;

//STEP.1 LOAD THE MODEL!
function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(320,240);
  video.hide();
  flippedVideo = ml5.flipImage(video);
  
  classifyVideo();
  frameRate(5);
  
  w = floor(width/rez);
  h = floor(height/rez);
  snake = new Snake();
  food = new Food();
}


//STEP.2 CREATE CLASSIFY VIDEO FUNCTION
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo,gotResults);
}

//STEP.3 CREATE CALL-BACK-FUNCTION
function gotResults(error, results) {
  if(error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  controlSnake();
  classifyVideo();
}

function controlSnake() {
  if(label === 'UP') {
    snake.setDir(0,-1);
  }
  else if(label === 'DOWN') {
    snake.setDir(0,1);
  }
  else if(label === 'RIGHT') {
    snake.setDir(1,0);
  }
  else if(label === 'LEFT') {
    snake.setDir(-1,0);
  }
}

function keyPressed(x,y) {
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1,0);
  }
  else if(keyCode === RIGHT_ARROW) {
    snake.setDir(1,0);
  }
  else if(keyCode === UP_ARROW) {
    snake.setDir(0,-1);
  }
  else if(keyCode === DOWN_ARROW) {
    snake.setDir(0,1);
  }
}

function draw() {
  background(220);
  image(flippedVideo,0,0,160,120);
  
  //draw the label's text
  textSize(32);
  fill(255);
  text(label, 10, 40);
  
  //drow score
  text("score : ", 20, height-10);
  text(score, 120, height-10);
  
  scale(rez);
  
  //grow snake
  if(snake.eat(food)) {
    scroe += 1;
    food.update();
  }
  
  if(snake.endGame()) {
    console.log("End Game! You're score is " + score);
    background(255,0,0);
    noLoop();
  }
  
  // draw snake
  snake.update();
  snake.show();
  
  // draw food
  food.show();
}