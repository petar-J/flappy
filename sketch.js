let bird;
const gravity = 0.5;
let pipe1, pipe2;
let gameon = true;
let score = 0;
let highScore = 0;
let lastscore = 0;
let addscore = true;
let makeEndScreen = false;

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
  pipe1 = new Pipe(width);
  pipe2 = new Pipe(width*1.5);
  noStroke();
}

function draw() {
  background(10, 89, 216);
  pipe1.update();
  pipe1.show();
  pipe2.update();
  pipe2.show();
  bird.update();
  bird.show();

  if (bird.hits(pipe1)){
    pipe1.isHit = true;
    pipe1.color(255,0,0); // Turn red
    bird.die();
  }
  else if (bird.hits(pipe2)){
    pipe2.isHit = true;
    pipe2.color(255,0,0); // Turn red
    bird.die();
  }
  else {
    pipe1.isHit = pipe2.isHit = false;
  }

  // End screen
  if (makeEndScreen == true){
    fill(71, 75, 107);
    let xbox = width/3;
    let ybox = height/4;
    let widthbox = width/3;
    let heightbox = height/3;
    rect(xbox, ybox, widthbox, heightbox, 20);
    fill(255);
    textSize(32);
    text('Score: '+lastscore, xbox+widthbox/3, ybox+heightbox/2)
    textSize(25);
    text('High score: '+highScore, xbox+widthbox/3-20, ybox+heightbox/2+30)
  }

  // Changing score and highscore html elements
  document.getElementById('score').innerHTML = 'Score: '+score;
  if (score>highScore){
    highScore = score;
    document.getElementById('highScore').innerHTML = 'High score: '+highScore;
  }
}

function stop(){
  // Stop moving pipes
  pipe1.speed = 0;
  pipe2.speed = 0;
  gameon = false;
}

function new_game(){
  // Resets game
  bird = new Bird();
  pipe1 = new Pipe(width);
  pipe2 = new Pipe(width*1.5);
  score = 0;
  addscore = true;
  gameon = true;
  makeEndScreen = false;
}


function keyPressed(){
  if (keyCode == 32){
    bird.jump();
  }
  if (gameon == false){
    new_game();
  }
}

function touchStarted(){
  bird.jump();
  if (gameon == false){
    new_game();
  }
}
function touchEnded(){
 return false;
}
