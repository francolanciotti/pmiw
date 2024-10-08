let pantalla = [];
let pantallaActual = 0;

function setup() {
  createCanvas(400, 400);
 
  // Crear diferentes pantallas
  pantalla.push(new pantalla1());
  pantalla.push(new Opcion1());
  pantalla.push(new Opcion2());
  pantalla.push(new Opcion1B());
  pantalla.push(new Opcion2B());
 
  // Crear botones
  let opcion1Button = createButton('Opcion 1');
  opcion1Button.position(10, 10);
  opcion1Button.mousePressed(IrOpcion1);
  
  let opcion2Button = createButton('Opcion 2');
  opcion2Button.position(10, 40);
  opcion2Button.mousePressed(IrOpcion2);
  
}

function draw() {
  pantalla[pantallaActual].ejecutar();
}

function IrOpcion1() {
  pantallaActual = 1; // Cambiar a la pantalla 1 
}

function IrOpcion2() {
  pantallaActual = 2; // Cambiar a la pantalla 2
}


// Clases para cada pantalla
class pantalla1 {
  ejecutar() {
    background(255, 0, 0);
    fill(255);
    textSize(32);
    text('Pantalla 1', 100, 200);
  }
}

class opcion1 {
  ejecutar() {
    background(0, 255, 0);
    fill(255);
    textSize(32);
    text('Opcion 1', 100, 200);
  }
}

class opcion2 {
  ejecutar() {
    background(0, 0, 255);
    fill(255);
    textSize(32);
    text('Opcion 2', 100, 200);
  }
}

class opcion1b {
  ejecutar() {
    background(200, 100, 255);
    fill(255);
    textSize(32);
    text('Opcion 1B', 100, 200);
  }
}

class opcion2b {
  ejecutar() {
    background(100, 100, 100);
    fill(255);
    textSize(32);
    text('Opcion 2B', 100, 200);
  }
}
