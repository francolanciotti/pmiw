class Juego {
  constructor() {
    this.estado = "PORTADA";
    this.pisoY = 380;
    this.metaX = 400;
    this.reiniciarJuego();
  }

  reiniciarJuego() {
    this.personaje = new Personaje(50, this.pisoY);
    this.obstaculos = [];
    this.barra = new Barra(50, 20, 540);
    this.tiempoLimite = 30;
    this.tiempoRestante = 30;
    this.contadorEnemigos = 0;
  }

  dibujar() {
    if (this.estado === "PORTADA") {
      this.dibujarPortada();
    } else if (this.estado === "JUGANDO") {
      this.dibujarJuego();
    } else if (this.estado === "GANAR") {
      this.dibujarPantallaFin(imagenes.ganar, "¡GANASTE!");
    } else if (this.estado === "PERDER") {
      this.dibujarPantallaFin(imagenes.perder, "¡PERDISTE!");
    } else if (this.estado === "CREDITOS") {
      this.dibujarCreditos();
    }
  }

  dibujarPortada() {
    image(imagenes.portada, 0, 0, width, height);
    textAlign(CENTER);
    fill(255, 0, 0);
    textSize(50);
    text("Caperucita Roja", width/2, 150);
    fill(255);
    textSize(20);
    text("Instrucciones:", width/2, 220);
    text("W: Saltar | S : Agacharse", width/2, 250);
    fill(255, 255, 0);
    text("Presiona ENTER para comenzar", width/2, 400);
  }

  dibujarJuego() {
    image(imagenes.fondoJuego, 0, 0, width, height);
    this.personaje.actualizar();
    this.personaje.dibujar();
    if (frameCount % 60 === 0 && this.tiempoRestante > 0) {
      this.tiempoRestante--;
    }

    this.contadorEnemigos++;
    if (this.contadorEnemigos > 100) {
      if (random(1) > 0.3) {
        this.obstaculos.push(new Obstaculo(width, this.pisoY));
      }
      this.contadorEnemigos = 0;
    }
    for (let i = this.obstaculos.length - 1; i >= 0; i--) {
      let obs = this.obstaculos[i];
      obs.actualizar();
      obs.dibujar();

      if (this.personaje.verificarColision(obs)) {
        this.personaje.empujar();
      }

      if (obs.estaFuera()) {
        this.obstaculos.splice(i, 1);
      }
    }

    this.barra.dibujar(this.personaje.x, this.metaX);
    fill(255);
    textAlign(LEFT);
    textSize(20);
    text("Tiempo: " + this.tiempoRestante + "s", 50, 65);
    if (this.personaje.x >= this.metaX) {
      this.estado = "GANAR";
    }
    if (this.tiempoRestante <= 0) {
      this.estado = "PERDER";
    }
  }

  dibujarPantallaFin(imagenFondo, mensaje) {
    image(imagenFondo, 0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text(mensaje, width/2, height/2);
    textSize(20);
    text("Presiona ENTER para ver créditos", width/2, height/2 + 80);
  }

  dibujarCreditos() {
    image(imagenes.portada, 0, 0, width, height);
    fill(255);
    noStroke();
    fill(0, 0, 0, 150);
    rect(100, 50, 440, 380);
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text("Créditos", width/2, 120);
    textSize(20);
    text("Franco Lanciotti y Abril Herrera", width/2, 200);
    fill(0, 255, 0);
    text("Presiona ENTER para volver al inicio", width/2, 380);
  }

  teclaPresionada(tecla, codigo) {
    if (codigo === ENTER) {
      if (this.estado === "PORTADA") {
        this.iniciarJuego();
      } else if (this.estado === "GANAR" || this.estado === "PERDER") {
        this.estado = "CREDITOS";
      } else if (this.estado === "CREDITOS") {
        this.estado = "PORTADA";
      }
    }

    if (this.estado === "JUGANDO") {
      if (tecla === 'w') {
        this.personaje.saltar();
      }
      if (tecla === 's') {
        this.personaje.agacharse(true);
      }
    }
  }

  teclaSoltada(tecla, codigo) {
    if (this.estado === "JUGANDO") {
      if (tecla === 's') {
        this.personaje.agacharse(false);
      }
    }
  }

  iniciarJuego() {
    this.reiniciarJuego();
    this.estado = "JUGANDO";
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop();
    }
  }
}

function keyPressed() {
  juego.teclaPresionada(key, keyCode);
}

function keyReleased() {
  juego.teclaSoltada(key, keyCode);
}
