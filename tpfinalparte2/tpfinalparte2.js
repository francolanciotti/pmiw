//https://youtu.be/i5iWYuzK5hQ
let estado
let sonidoFondo;
let fuente;
let imgPortada, imgFondoJuego, imgGanar, imgPerder;
let imgCorrer1, imgCorrer2, imgSalto, imgAgachado;
let imgObsBajo, imgObsAlto;

function preload() {

  imgPortada = loadImage('data/background_start.jpg');
  imgFondoJuego = loadImage('data/background_game.png'); 
  imgGanar = loadImage('data/background_win.jpg');
  imgPerder = loadImage('data/background_lose.jpg');
  
  imgCorrer1 = loadImage('data/player_run1.png');
  imgCorrer2 = loadImage('data/player_run2.png');
  imgSalto = loadImage('data/player_jump.png');
  imgAgachado = loadImage('data/player_duck.png');
  
  imgObsBajo = loadImage('data/obstacle_low.png');
  imgObsAlto = loadImage('data/obstacle_high.png');

  soundFormats('mp3', 'wav');
  sonidoFondo = loadSound('data/audio/sonidoambiente.mp3');
}

function setup() {
  createCanvas(640, 480);
  estado = new Estados();
}

function draw() {
  estado.dibujar();
}

function keyPressed() {
  estado.teclaPresionada(keyCode);
}

function keyReleased() {
  estado.teclaSoltada(keyCode);
}
