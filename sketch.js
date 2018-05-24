let bird;
let gravity;
let pipe1, pipe2;
let score = 0;
let highScore = 0;
let addscore = true;

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
  pipe1 = new Pipe(width);
  pipe2 = new Pipe(width*1.5);
  gravity = 0.175;
}

function draw() {
  background(50);
  bird.update();
  bird.show();
  pipe1.update();
  pipe1.show();
  pipe2.update();
  pipe2.show();

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

  // Changing score and highscore html elements
  document.getElementById('score').innerHTML = 'Score: '+score;
  if (score>highScore){
    highScore = score;
    document.getElementById('highScore').innerHTML = 'High score: '+highScore;
  }
}

function keyPressed(){
  if (keyCode == 32){
    bird.jump();
  }
}

function touchStarted(){
  bird.jump();
}
function touchEnded(){
 return false;
}
