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
    let inx = this.x>other.x && this.x<other.x+other.width;
    let iny = this.y<other.top || this.y>other.top+other.space;
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
