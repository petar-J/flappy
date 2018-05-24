function Bird(){
  this.x = width/5;
  this.y = height/4;
  this.r = 15;
  this.vel = 0;
  this.up = -5;

  this.jump = function(){
    this.vel = this.up;
  }

  this.die = function(){
    score = 0;
    addscore = false;
  }

  this.hits = function(other){

    // Add to score
    if (other.x < this.x && addscore == true){
      score += 1;
      addscore = false;
    }

    // Distance from bird center to center of pipe
    let distance = abs(this.x - (other.x + other.width/2));
    let room = this.r + other.width/2;
    let inx = distance<=room;

    let top = this.y - this.r < other.top;
    let bot = this.y + this.r > other.top + other.space;
    let iny = top || bot;

    return (inx && iny);
  }

  this.update = function(){
    // Gravity
    this.vel += gravity;
    this.y += this.vel;

    // Above screen
    if (this.y<0){
      this.vel = gravity;
      this.y = 0;
    } // Under screen
    else if (this.y>=height){
      this.vel = gravity;
      this.y = height;
    }
  }

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }


}
