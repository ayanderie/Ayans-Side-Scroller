class Baddy {
  constructor(img,x,y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.pic = img;
    
  }
  
   applyForce(force) {
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display(){
    fill(81,59,204);
    stroke(255);
    //image(this.pic, this.pos.x,this.pos.y,50,40)
    rect(this.pos.x, this.pos.y, 50, 40);
  }

  edges() {
    if (this.pos.y > height-50) {
      this.vel.y *= -0;
      this.pos.y = height-50;
    }
   

  }
}
