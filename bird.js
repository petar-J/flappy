function Bird(){
  this.x = width/5;
  this.y = height/4;
  this.r = 15;
  this.vel = 0;
  this.up = -5;

  this.jump = function(){
    this.vel = this.up;
  }

  this.hits = function(other){

    // score
    if (other.x+other.width/2 < this.x && addscore == true){
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
    this.vel += gravity;
    this.y += this.vel;

    if (this.y<0){
      this.vel = gravity;
      this.y = 0;
    } else if (this.y>=height){
      this.vel = gravity;
      this.y = height;
    }
    //this.y = constrain(this.y, 0, height);
  }

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }


}
