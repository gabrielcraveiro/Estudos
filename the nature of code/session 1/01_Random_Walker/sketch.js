// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Random Walker

var w;

function setup() {
  createCanvas(800, 1000);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(51);
  // Update and display object
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, 0);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0.1);

  this.update = function () {
    // Move Walker randomly
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function () {
    // Draw Walker as circle
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
