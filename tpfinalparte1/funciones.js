
function inicializar() {
  estado = 0;

  textos [1] = "— Lleva esta cesta a casa de tu abuela, y no te detengas \nen el camino — le pidió su madre.\n\n  Caperucita asintió con una sonrisa, \najustó su capa roja y emprendió el viaje."
    botonA [1] = "Continuar"

    textos [2] ="El sol iluminaba el sendero mientras Caperucita avanzaba con paso alegre.\n A cada lado, el bosque parecía susurrar secretos entre los árboles."
    botonA [2] = "Continuar"

    textos [3] = "De pronto, entre los arbustos, apareció un gran lobo.\n Con una voz suave, casi amable, le preguntó:\n  — ¿A dónde vas, niña tan simpática?"
    botonA [3] = "Continuar"

    textos [4] ="Cuando Caperucita mencionó que iba a visitar a su abuelita,\n el Lobo sonrió con malicia, aunque trató de ocultarlo tras un gesto cordial.\n El Lobo le sugirió tomar un camino tranquilo y se despidió rápidamente."
    botonA [4] = "Continuar"

    textos [5] = "Ante ella se abrieron dos opciones: \n Un camino largo pero seguro, lleno de flores y luz…\n o un sendero corto, oscuro y peligroso"
    botonA [5] = "Camino largo"
    botonB [5] = "Camino corto"
    
    textos [6] = "Caperucita, tentada por la rapidez del sendero oscuro, decidió\n tomar el camino corto. El silencio en el bosque era extraño,\n demasiado pesado, y solo se oían sus pasos apresurados\n sobre la tierra húmeda. Al llegar a la cabaña, se asomó por la ventana y\n distinguió un movimiento brusco en el interior"
    botonA [6] = "Entrar"

    textos [7] = "El Lobo intentaba someter a su abuela. De inmediato, la anciana\n reaccionó con fuerza inesperada, sacandole su bastón y\n golpeándolo con furia.  — ¡Corre, Caperucita, corre! —gritó,\n mientras la niña entraba y corría hacia ella."
    botonA [7] = "Continuar"
    
    textos [8] = "Unidas de la mano, abuela y nieta huyeron al bosque,\n mientras el Lobo, adolorido, se levantaba tambaleante\n detrás de ellas.\n\n ¡Felicidades! conseguiste el final de la abuela"
    botonA [8] = "Créditos"
    botonB [8] = "Reintentar"
    
    textos [9] = "El Lobo corrió más rápido que Caperucita, llegó primero\n a la cabaña y, sin pensarlo dos veces, devoró a la pobre abuela.\n Luego, se disfrazó con su ropa para engañar a la niña."
    botonA [9] = "Continuar"

    textos [10] = "Caperucita llegó al lugar, sin sospechar el peligro.\n El aire olía a humo de leña y la puerta estaba entreabierta."
    botonA [10] = "Continuar"
    
    textos [11] = "— Abuelita, ¿estás despierta? —preguntó al ver a la\n figura acostada en la cama, con gorro y mantas hasta la nariz.\n Algo no se veía del todo bien."
    botonA [11] = "Continuar"
    
    textos [12] = "Se acercó despacio y, con cierta duda, exclamó:\n  — ¡Abuelita, qué ojos tan grandes tienes!... \n Y con cada respuesta del\n Lobo disfrazado, la sospecha crecía en su corazón."
    botonA [12] = "¡Gritar!"
    botonB [12] = "Seguir preguntando"
    
    textos [13] = "Un cazador que pasaba cerca escuchó el alboroto.\n Entró decidido, empuñando su hacha, y enfrentó al Lobo."
    botonA [13] = "Continuar"
    
    textos [14] = "Aterrorizado, el Lobo escapó por la ventana y\n desapareció entre los árboles. Caperucita y\n el cazador se miraron aliviados, agradecidos de seguir con vida.\n\n ¡Felicidades! conseguiste el final del cazador"
    botonA [14] = "Créditos"
    botonB [14] = "Reintentar"
    
    textos [15] = "— ¡Abuelita, qué dientes tan grandes tienes! -\n — ¡Son para comerte mejor! -\n El lobo saltó de la cama y atrapó\n a caperucita que estaba paralizada del miedo"
    botonA [15] = "Continuar"

    textos [16] = "Saciado luego de un apetitoso almuerzo,\n el lobo se acuesta a dormir una siesta.\n Solo la cesta de caperucita queda en el suelo\n\nFelicidades... conseguiste el final del lobo..."
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
  text(txt_pantalla, width/2, 350);
  

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
  text(txt_pantalla, width/2, 350);
  

  //boton A:
  dibujaBoton(txt_btn_A, width/2+200, height*0.10, 200, 40);
 strokeWeight(10);

  pop();
}
