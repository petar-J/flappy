let bird;
let gravity;
let pipe1, pipe2;

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
    pipe1.color(255,0,0);
    console.log('HIT');
  } else if (bird.hits(pipe2)){
    pipe2.isHit = true;
    pipe2.color(255,0,0);
    console.log('HIT');
  } else {
    pipe1.isHit = pipe2.isHit = false;
    pipe1.color();
    pipe2.color();
  }
}

function keyPressed(){
  if (keyCode == 32){
    bird.jump();
  }
}
