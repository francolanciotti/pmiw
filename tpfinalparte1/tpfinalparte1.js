  
let estado;
let textos = [];
let botonA = [];
let botonB = [];
let imagenes = [];
let sonido;

//Cargar imagenes y fuente
function preload(){
  for (let i = 0; i < 18; i++) {
    imagenes [i] = loadImage ("data/fotos/pantalla_" +nf(i+1,2) + ".jpg")
  }
  soundFormats('mp3', 'ogg');
  sonido = loadSound('data/audio/sonidoambiente');
}


function setup() {
  createCanvas (640, 480);
  inicializar();
}

function draw() {
  if (estado===0) {
    pantallaInicio();
  } else if (estado===17) {
    pantallaCreditos();
  } else if  (  estado===5 || estado===8 || estado===12 || estado===14 || estado===16) {
    pantallaHistoriaDosBotones (textos[estado], botonA[estado], botonB[estado]);
  } else if (estado===1 || estado===2 || estado===3 || estado===4 || estado===6 || estado===7 || estado===9 || estado===10 || estado===11 || estado===13 || estado===15) {
    pantallaHistoriaUnBoton (textos [estado], botonA [estado]);
  }
}

function mousePressed() {
  if (estado===0) {
    if (colisionBoton (width/2, height*0.75, 200, 40)) {
      sonido.loop();
      estado=1;
    } else if (colisionBoton (width/2, height*0.75+60, 200, 40)) {
      estado=17;
    }
  } else if (estado===17) {
    if (colisionBoton(width/2, height*0.75+60, 200, 40)) {
      estado=0;
    }
  } else if (estado===1) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=2;
    }
  } else if (estado===2) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=3;
    }
  }
  else if (estado===3) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=4;
    }
  } else if (estado===4) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=5;
    }
  } //Decision
  else if (estado===5) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=6;
    } else if (colisionBoton (width/2-200, height*0.10, 200, 40)) {
      estado=9;
    }
  } else if (estado===6) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=7;
    } 
  } else if (estado===7){
    if (colisionBoton (width/2+200, height*0.10, 200, 40)){
      estado=8;
    }
  } //final
  else if (estado===8) {
    if (colisionBoton (width/2-200, height*0.10, 200, 40)){
      estado=17;
    }if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=0;
    }
  } 
  else if (estado===9) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=10;
    }
  } else if (estado===10){
    if (colisionBoton (width/2+200, height*0.10, 200, 40)){
      estado=11;
    }
  } else if (estado===11) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=12;
    }
  } //decision 
  else if (estado===12) {
    if (colisionBoton (width/2-200, height*0.10, 200, 40)) {
      estado=13;
    } if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=15;
    }
  }//
  else if (estado===13) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=14;
    }
  } //final 
  else if (estado===14) {
    if (colisionBoton (width/2-200, height*0.10, 200, 40)){
      estado=17;
    }if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=0;
    }
  }else if (estado===15) {
    if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=16;
    }
  } //final 
  else if (estado===16) {
    if (colisionBoton (width/2-200, height*0.10, 200, 40)){
      estado=17;
    }if (colisionBoton (width/2+200, height*0.10, 200, 40)) {
      estado=0;
    }
  }
}
