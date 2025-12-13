class Estados {
  constructor() {
    this.estadoActual = "portada";
    this.juego = new Juego();
  }

  dibujar() {
    if (this.estadoActual === "portada") {
      this.dibujarPortada();
    } 
    else if (this.estadoActual === "jugando") {
      this.juego.dibujar();
      this.verificarFinJuego();
    } 
    else if (this.estadoActual === "ganar") {
      this.dibujarFin(imgGanar, "GANASTE");
    } 
    else if (this.estadoActual === "perder") {
      this.dibujarFin(imgPerder, "PERDISTE");
    } 
    else if (this.estadoActual === "creditos") {
      this.dibujarCreditos();
    }
  }

  verificarFinJuego() {
    if (this.juego.resultado === "gano") {
      this.estadoActual = "ganar";
    } else if (this.juego.resultado === "perdio") {
      this.estadoActual = "perder";
    }
  }

  dibujarPortada() {
    image(imgPortada, 0, 0, width, height);
    textAlign(CENTER);
    fill(255,0,0); textSize(70);
    text("Caperucita Roja", width/2, 100);
    textSize(40); fill(255);
    text("ENTER para jugar", width/2, 400);
    textSize (20);
  }

  dibujarFin(img, texto) {
    image(img, 0, 0, width, height);
    textAlign(CENTER);
    fill(255); textSize(50);
    text(texto, width/2, 250);
    textSize(40);
    text("ENTER para creditos", width/2, 400);
  }

  dibujarCreditos() {
    image(imgPortada, 0, 0, width, height);
    textAlign(CENTER);
    fill(255);
    textSize(40);
    text("Franco Lanciotti y Abril Herrera", width/2, height/2);
    text("ENTER para volver", width/2, 400);
  }

  teclaPresionada(codigo) {
    if (this.estadoActual === "portada" && codigo === ENTER) {
      this.juego.reiniciar();
      this.estadoActual = "jugando";
      
      if (sonidoFondo.isPlaying() === false) {
        sonidoFondo.loop();
      }
    } 
    else if ((this.estadoActual === "ganar" || this.estadoActual === "perder") && codigo === ENTER) {
      this.estadoActual = "creditos";
    }
    else if (this.estadoActual === "creditos" && codigo === ENTER) {
      this.estadoActual = "portada";
    }
    
    if (this.estadoActual === "jugando") {
      this.juego.teclaPresionada(codigo);
    }
  }

  teclaSoltada(codigo) {
    if (this.estadoActual === "jugando") {
      this.juego.teclaSoltada(codigo);
    }
  }
}
