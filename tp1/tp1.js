//https://youtu.be/VG1Du_lbgho
let imagen;
let tam;
function preload () {
  imagen = loadImage("./data/F_17.jpg");
}
function setup() {
  createCanvas ( 800, 400 );
  noStroke ();
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background ( 0 );
  image(imagen, 0, 0);
  grilla (0, 0, width/2 / 13, height / 13);
}

function mousePressed () {
  fill (random(0, 360), 50, 100);
}
function keyPressed () {
  fill(360);
  tam = 16;
}
