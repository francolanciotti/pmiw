let storyPart = 0;
let imagen = [];
const totalParts = 24;

function preload() {
  // Cargar imágenes
  for (let i = 0; i <= 4; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(24);
  fill(255);
}

function draw() {
  showStory();
}

function keyPressed() {
  if  (storyPart === 0) {
    if (key === '1') {
      storyPart = 1;
    }
  } else if (storyPart === 1) {
    if (key === '1') {
      storyPart = 2;
    }
  } else if (storyPart === 2) {
    if (key === '1') {
      storyPart = 3; 
    } else if (key === '2') {
      storyPart = 4;
    }
  }
}
