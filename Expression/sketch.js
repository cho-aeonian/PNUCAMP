//copy your model link
let rink = "https://teachablemachine.withgoogle0odels/KtcKRND81/"
let video;
let classifier;
let label;

//STEP.1 Load the model!
function preload() {
  classifier = ml5.imageClassifier(rink);
}

function setup() {
  createCanvas(640, 520);
  //Create the video
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
}

//STEP.2 classify!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(220);
  //Draw the video
  image(video,0,0)
  
  //STEP.4 Draw the label!
  let emoji = '😑'
  if(label === 'smile') {
    emoji = '😀'
  }
  else if(label === 'angry') {
    emoji = '🤬'
  }
  else if(lable === 'surprised') {
    emoji = '😯'
  }
  
  textSize(256);
  text(emoji, width/2, height/2);
}

//STEP.3 Get the classification!
function gotResults(error, results) {
  if(error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  classifyVideo();
}