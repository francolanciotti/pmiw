class Personaje {
  constructor(x, sueloY) {
    this.x = x;
    this.xInicial = x;
    this.sueloY = sueloY;
    this.ancho = 60;
    this.alto = 90;
    this.y = sueloY - 90;
    this.estadoSalto = "suelo";
    this.alturaSalto = 110;
    this.topeY = this.y - this.alturaSalto; 
    this.agachado = false;
  }

  actualizar() {
    this.x = this.x + 0.5;
    if (this.estadoSalto === "subiendo") {
      this.y = this.y - 5;
      if (this.y <= this.topeY) {
        this.estadoSalto = "bajando";
      }
    } 
    else if (this.estadoSalto === "bajando") {
      this.y = this.y + 5;

      if (this.y >= this.sueloY - this.alto) {
        this.y = this.sueloY - this.alto;
        this.estadoSalto = "suelo";
      }
    }

    if (this.agachado === true && this.estadoSalto === "suelo") {
      this.alto = 80;
      this.y = this.sueloY - 80;
    } else {
      this.alto = 90;
      if (this.estadoSalto === "suelo") {
        this.y = this.sueloY - 90;
      }
    }
  }

  dibujar() {
    let imagen;

    if (this.estadoSalto !== "suelo") {
      imagen = imgSalto;
    } else if (this.agachado) {
      imagen = imgAgachado;
    } else {
      if (frameCount % 20 < 10) {
        imagen = imgCorrer1;
      } else {
        imagen = imgCorrer2;
      }
    }
    image(imagen, this.x, this.y, this.ancho, this.alto);
  }

  saltar() {
    if (this.estadoSalto === "suelo") {
      this.estadoSalto = "subiendo";
    }
  }

  agacharse(estado) {
    this.agachado = estado;
  }

  retroceder() {
    this.x = this.x - 50;
    if (this.x < this.xInicial) {
      this.x = this.xInicial;
    }
  }

  verificarColision(obs) {
    if (this.x + this.ancho > obs.x) {
      if (this.x < obs.x + obs.ancho) {
        if (this.y + this.alto > obs.y) {
           if (this.y < obs.y + obs.alto) {
             return true;
           }
        }
      }
    }
    return false;
  }
}
