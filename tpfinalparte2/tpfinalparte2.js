//https://youtu.be/S41aDOZ74iU

let game;
let sonido;
let musicStarted = false;
let imgBg, imgStart, imgWin, imgLose;
let imgPlayerRun1, imgPlayerRun2, imgPlayerJump, imgPlayerDuck;
let imgObstacleLow, imgObstacleHigh;

function preload() {
  sonido = loadSound('data/audio/sonidoambiente.mp3');
  imgBg = loadImage('data/background.png');
  imgStart = loadImage('data/background_start.jpg');
  imgWin = loadImage('data/background_win.jpg');
  imgLose = loadImage('data/background_lose.jpg');
  
  imgPlayerRun1 = loadImage('data/player_run1.png');
  imgPlayerRun2 = loadImage('data/player_run2.png');
  imgPlayerJump = loadImage('data/player_jump.png');
  imgPlayerDuck = loadImage('data/player_duck.png');
  
  imgObstacleLow = loadImage('data/obstacle_low.png');
  imgObstacleHigh = loadImage('data/obstacle_high.png');
}

function setup() {
  createCanvas(640, 480);
  restartGame();
}

function restartGame() {
  
  let backgroundImages = {
    playing: imgBg,
    start: imgStart,
    win: imgWin,
    lose: imgLose
  };
  
  let playerImages = {
    run1: imgPlayerRun1,
    run2: imgPlayerRun2,
    jump: imgPlayerJump,
    duck: imgPlayerDuck
  };
  
  let obstacleImages = {
    low: imgObstacleLow,
    high: imgObstacleHigh
  };
  
  game = new GameManager(backgroundImages, playerImages, obstacleImages);
}

function draw() {
  game.update();
  game.draw();
}
function keyPressed() {
  if (!musicStarted && game.gameState === 'startScreen' && keyCode === ENTER) {
    sonido.loop();
    musicStarted = true;
    }
  if (game.gameState === 'creditsScreen' && keyCode === ENTER) {
    restartGame();
    } else {
    game.handleKeyPressed();
      }
}

function keyReleased() {
  game.handleKeyReleased();
}
