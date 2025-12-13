class Juego {
  constructor() {
    this.pisoY = 380;
    this.metaX = 400;
    
    this.personaje = new Personaje(50, this.pisoY);
    
    this.obstaculos = [];
    this.obstaculos[0] = new Obstaculo(600, this.pisoY);
    this.obstaculos[1] = new Obstaculo(900, this.pisoY);
    this.obstaculos[2] = new Obstaculo(1200, this.pisoY);
    
    this.resultado = "jugando";
    this.tiempo = 30;
    this.contadorTiempo = 0;
  }

  reiniciar() {
    this.personaje = new Personaje(50, this.pisoY);
    this.resultado = "jugando";
    this.tiempo = 30;
    
    this.obstaculos[0].x = 600;
    this.obstaculos[1].x = 900;
    this.obstaculos[2].x = 1200;
  }

  dibujar() {
    image(imgFondoJuego, 0, 0, width, height);

    this.personaje.actualizar();
    this.personaje.dibujar();

    for (let i = 0; i < 3; i++) {
      let obs = this.obstaculos[i];
      
      obs.actualizar();
      obs.dibujar();

      if (this.personaje.verificarColision(obs)) {
        this.personaje.retroceder();
      }

      if (obs.x < -100) {
        obs.reaparecer(); 
      }
    }

    this.dibujarInterfaz();

    this.contadorTiempo = this.contadorTiempo + 1;
    if (this.contadorTiempo >= 60) {
      this.tiempo = this.tiempo - 1;
      this.contadorTiempo = 0;
    }

    if (this.personaje.x >= this.metaX) {
      this.resultado = "gano";
    }
    if (this.tiempo <= 0) {
      this.resultado = "perdio";
    }
  }

  dibujarInterfaz() {
    let xBarra = 50;
    let yBarra = 20;
    let anchoTotal = 540;
    
    noStroke();
    fill(100);
    rect(xBarra, yBarra, anchoTotal, 20);

    let porcentaje = this.personaje.x / this.metaX;
    let anchoVerde = anchoTotal * porcentaje;

    fill(0, 255, 0);
    rect(xBarra, yBarra, anchoVerde, 20);

    fill(255);
    textAlign(LEFT);
    text("Tiempo: " + this.tiempo, 50, 65);
  }

  teclaPresionada(codigo) {
    if (codigo === UP_ARROW) {
      this.personaje.saltar();
    }
    if (codigo === DOWN_ARROW) {
      this.personaje.agacharse(true);
    }
  }

  teclaSoltada(codigo) {
    if (codigo === DOWN_ARROW) {
      this.personaje.agacharse(false);
    }
  }
}
