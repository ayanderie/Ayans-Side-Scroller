// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person(img) {
  this.pos = createVector(10, height-150);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.pic = img
  this.points=0;
  // this.mass = m;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(25, 15,30);
    stroke(255);
    image(this.pic, this.pos.x,this.pos.y,50,40)
    //rect(this.pos.x, this.pos.y, 50, 40);
  }

  this.edges = function(bad) {
    if (this.pos.y > height-50) {
      this.vel.y *= -0;
      this.pos.y = height-50;
    }
  }
  
  this.hits = function(bad){
       if ((bad.pos.x >= this.pos.x && bad.pos.x <= (this.pos.x + 40)) &&
        (bad.pos.y >= this.pos.y && bad.pos.y <= (this.pos.y + 40))) {
        bad.pos.y = -400;
       this.points++;
    }
  }
  

  
  
}
