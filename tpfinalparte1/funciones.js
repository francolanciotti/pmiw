
function inicializar() {
    estado = 0;

    botonA [1] = "Empezar viaje"

    botonA [2] = "Continuar"

    botonA [3] = "¿U-un lobo?..."

    botonA [4] = "¿Y ahora que hago?"

    botonA [5] = "Camino largo"
    botonB [5] = "Camino corto"
    
    botonA [6] = "Entrar"

    botonA [7] = "Correr"
    
    botonA [8] = "Créditos"
    botonB [8] = "Reintentar"
    
    botonA [9] = "Continuar"

    botonA [10] = "Entrar"
    
    botonA [11] = "Preguntar por sus ojos"
    
    botonA [12] = "¡Gritar!"
    botonB [12] = "Seguir preguntando"
    
    botonA [13] = "Continuar"
    
    botonA [14] = "Créditos"
    botonB [14] = "Reintentar"
    
    botonA [15] = "Oh-oh"

    botonA [16] = "Créditos"
    botonB [16] = "Reintentar"
}

function dibujaBoton(txt, x, y, w, h) {
  push();
  rectMode(CENTER);
  
  stroke(0);
  strokeWeight(1);
  if (colisionBoton(x, y, w, h)) {
    fill(57,54,49);
  } else {
    fill(165,147,112);
  }
  rect(x, y, w, h);
  noStroke();
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}

function colisionBoton(x, y, w, h) {

  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function pantallaInicio() {
  push();
  background(185,246,183);
  image(imagenes[estado], 5,5,630,470); 
     
  noStroke();
  fill(0,100);
  rect(20,10,600,100);
  fill(255);
  textAlign(CENTER);
  textSize(35);
  text("Caperucita Roja\nUna historia del Bosque.", width/2, 50);

  //botones:
  textSize(23);
 
  dibujaBoton("EMPEZAR", width/2, height*0.75, 200, 40);
  dibujaBoton("CRÉDITOS", width/2, height*0.75+60, 200, 40);

  pop();
}

function pantallaCreditos() {
  push();
  background(185,246,183);
  image(imagenes[estado], 5,5,625,465); 
  noStroke();
  fill(165,147,112,180);
  rect(123,230,400,150);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Hecho por:\n Franco Lanciotti\ny\n Abril Herrera", width/2, 260);

  //botones:
  dibujaBoton("VOLVER", width/2, height*0.75+60, 200, 40);

  pop();
}

function pantallaHistoriaDosBotones( txt_pantalla, txt_btn_A, txt_btn_B ) {
  push();
  background(155,67,60);
  image(imagenes[estado], 5,5,625,465); 
  
    
  noStroke();
  fill(115,177,100,170);
  rect(8,317,620,150);

  fill(255);
  textAlign(CENTER);
  textSize(18);
  text(txt_pantalla, 50, 350, 500);
  

  //botones:
  //A:
  dibujaBoton(txt_btn_A, width/2-200, height*0.10, 200, 40);
  //B:
  dibujaBoton(txt_btn_B, width/2+200, height*0.10, 200, 40);

  pop();
}



function pantallaHistoriaUnBoton( txt_pantalla, txt_btn_A ) {
  push();
  background(115,177,100);
  image(imagenes[estado], 5,5,625,465);  
 
  noStroke();
  fill(115,177,100,170);
  rect(8,317,620,150);

  fill(255);
  textAlign(CENTER);
  textSize(18);
  text(txt_pantalla, 50, 350, 500);
  
  //boton A:
  dibujaBoton(txt_btn_A, width/2+200, height*0.10, 200, 40);
  strokeWeight(10);

  pop();
}
