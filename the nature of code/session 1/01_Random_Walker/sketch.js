var w;

function setup() {
  createCanvas(800, 1000);
  // Faz o walker andar
  w = new Walker();
}

function draw() {
  background(51);
  // Update e display do objeto
  w.update();
  w.display();
}

function Walker() {

  // Começa com objeto no centro
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);

  this.update = function () {
    // Move Walker randomly

    // Aceleração linear
    // this.acc = createVector(0, 0.1);

    // Aceleração Aleatória
    // this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    // this.acc = p5.Vector.fromAngle(random(TWO_PI));
    // this.acc.mult(-2);

    // Aceleração direcionada para o mouse
    var mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.normalize();
    // this.acc.mult(0.1);
    this.acc.setMag(0.05);

    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // Normalize pega um vetor de qq tamanho e muda pra magnitude 1
  }

  this.display = function () {
    // Faz o walker ser um circulo
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
