class Personaje {
  constructor(x, sueloY) {
    this.x = x;
    this.y = sueloY - 90;
    this.sueloY = sueloY;
    this.ancho = 50;
    this.alto = 90;
    this.velocidad = 0.4;
    this.velY = 0;
    this.gravedad = 0.8;
    this.fuerzaSalto = -15;
    this.saltando = false;
    this.agachado = false;
  }

  actualizar() {
    this.x += this.velocidad;
    this.y += this.velY;
    if (this.y + this.alto < this.sueloY) {
      this.velY += this.gravedad;
      this.saltando = true;
    } else {
      this.velY = 0;
      this.saltando = false;
      this.y = this.sueloY - this.alto;
    }
  }

  dibujar() {
    let imgActual;
    if (this.saltando) {
      imgActual = imagenes.salto;
    } else if (this.agachado) {
      imgActual = imagenes.agachado;
      this.alto = 80;
    } else {
      this.alto = 90;
      if (frameCount % 20 < 10) {
        imgActual = imagenes.correr1;
      } else {
        imgActual = imagenes.correr2;
      }
    }

    image(imgActual, this.x, this.y, this.ancho, this.alto);
  }

  saltar() {
    if (!this.saltando) {
      this.velY = this.fuerzaSalto;
    }
  }

  agacharse(estado) {
    if (!this.saltando) {
      this.agachado = estado;
    }
  }

  empujar() {
    this.x -= 50;
    if (this.x < 50) this.x = 50;
  }

  verificarColision(obs) {
    return (
      this.x < obs.x + obs.ancho &&
      this.x + this.ancho > obs.x &&
      this.y < obs.y + obs.alto &&
      this.y + this.alto > obs.y
      );
  }
}
