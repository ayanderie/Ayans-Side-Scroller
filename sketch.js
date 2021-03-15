var man;
let img;
let badGuy;
let baddies = [];
let sceneNum = 0;

function setup() {
  createCanvas(400, 400);
  img = loadImage('Mathman.png');
  img2 = loadImage('Mr_Glitch.png');
  man = new Person(img);

  for (let i = 0; i < 50; i++) {
    baddies[i] = new Baddy(img2, random(300, 500), random(400));

  }
  badGuy = new Baddy(random(300, 500), random(400));
}

// var x;
// x = -100;

function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -5);
    man.applyForce(force);
  }
}

function mousePressed() {
  sceneNum = (sceneNum + 1) % 3
}

function draw() {
  if (sceneNum == 0) {
    start()
  } else if (sceneNum == 1) {
    game()
  }
  else if (sceneNum ==2) {
    end ()
  }
}

function start() {
  background(50, 50, 50);
  fill (144,144,245);
  textSize (30);
  text("Ayan's Super Cool Game", 30,100);
  
}
function end () {
  background(250, 250, 250);
  fill (144,144,245);
  textSize (45);
  text("The End",55,100);
 
}

function game() {
  background(25);

  translate(-man.pos.x + 100, 0);

  let gravity = createVector(0, 0.1);
  man.applyForce(gravity)

  //Makes the man appear and work
  man.update();
  man.display();
  man.edges();

  //Makes the baddy appear and work

  for (let i = 0; i < 50; i++) {
    baddies[i].update();
    baddies[i].display();
    baddies[i].edges();
    man.hits(baddies[i]);


  }
  badGuy.update();
  badGuy.display();
  badGuy.edges();
  
 
  
  


   noStroke ()
  //baddy black box
  fill(20);
  rect(250, 350, 100, 100);
}
