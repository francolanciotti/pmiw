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
  let Button1 = createButton('Opcion 1');
  Button1.position(10, 10);
  Button1.mousePressed(opcion1);
  
  let Button2 = createButton('Opcion 2');
  Button2.position(10, 40);
  Button2.mousePressed(opcion2);

}

function draw() {
  pantalla[pantallaActual].ejecutar();
}

function opcion1() {
  pantallaActual = 1; // Cambiar a la opcion 1
}

function opcion2() {
  pantallaActual = 2; // Cambiar a la opcion 2
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

class Opcion1 {
  ejecutar() {
    background(0, 255, 0);
    fill(255);
    textSize(32);
    text('Opcion 1', 100, 200);
  }
}

class Opcion2 {
  ejecutar() {
    background(0, 0, 255);
    fill(255);
    textSize(32);
    text('Opcion 2', 100, 200);
  }
}

class Opcion1B {
  ejecutar() {
    background(200, 100, 255);
    fill(255);
    textSize(32);
    text('Opcion 1', 100, 200);
  }
}

class Opcion2B {
  ejecutar() {
    background(100, 100, 100);
    fill(255);
    textSize(32);
    text('Opcion 2', 100, 200);
  }
}
