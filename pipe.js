
function Pipe(x){
  this.space = 125;
  this.top = floor(random(height-this.space));
  this.width = 40;
  this.x = x;
  this.isHit = false;

  this.r = 255;
  this.g = 255;
  this.b = 255;

  this.color = function(r = 255, g = 255, b = 255){
    this.r = r;
    this.g = g;
    this.b = b;
  }

  this.update = function(){
    // Moving
    this.x-=3;

    if (this.x<0-this.width){
    // Offscreen
      addscore = true;
      this.x = width;
      this.top = floor(random(height-this.space));
    } // Turn white
    else if (this.isHit == false){
      this.color()
    }
  }

  this.show = function(){
    fill(this.r, this.g, this.b);
    rect(this.x, 0, this.width, this.top);
    rect(this.x, this.top+this.space, this.width, height-this.top-this.space);
  }

}
