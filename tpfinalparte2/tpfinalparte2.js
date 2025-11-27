let juego;
let imagenes = {};
let sonidoFondo;

function preload() {

  imagenes.portada = loadImage('data/background_start.jpg');
  imagenes.fondoJuego = loadImage('data/background_game.png');
  imagenes.ganar = loadImage('data/background_win.jpg');
  imagenes.perder = loadImage('data/background_lose.jpg');
  imagenes.creditos = loadImage('data/background_start.jpg');
  imagenes.correr1 = loadImage('data/player_run1.png');
  imagenes.correr2 = loadImage('data/player_run2.png');
  imagenes.salto = loadImage('data/player_jump.png');
  imagenes.agachado = loadImage('data/player_duck.png');
  imagenes.obsBajo = loadImage('data/obstacle_low.png');
  imagenes.obsAlto = loadImage('data/obstacle_high.png');
  soundFormats('mp3', 'wav');
  sonidoFondo = loadSound('data/audio/sonidoambiente.mp3');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}
