class Obstaculo {
  constructor(x, sueloY) {
    this.x = x;
    this.sueloY = sueloY;
    this.randomizar();
  }

  randomizar() {
    if (random(1) < 0.5) {
      this.tipo = "BAJO";
      this.ancho = 50;
      this.alto = 50;
      this.y = this.sueloY - 40;
      this.img = imgObsBajo;
    } else {
      this.tipo = "ALTO";
      this.ancho = 60;
      this.alto = 50;
      this.y = this.sueloY - 130;
      this.img = imgObsAlto;
    }
  }

  actualizar() {
    this.x = this.x - 4;
  }

  dibujar() {
    image(this.img, this.x, this.y, this.ancho, this.alto);
  }

  reaparecer() {
    this.x = 640 + 200;
    this.randomizar();
  }
}
