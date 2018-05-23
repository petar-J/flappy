
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
    this.x-=3;
    if (this.x<0-this.width){
    // offscreen
      addscore = true;
      this.x = width;
      this.top = floor(random(height-this.space));
    } else if (this.isHit == false){
    // turn white
      this.color()
    }
  }

  this.show = function(){
    fill(this.r, this.g, this.b);
    rect(this.x, 0, this.width, this.top);
    rect(this.x, this.top+this.space, this.width, height-this.top-this.space);
  }

}
