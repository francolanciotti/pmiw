class Obstaculo {
  constructor(x, sueloY) {
    this.x = x;
    this.velocidad = 5;
    if (random(1) < 0.5) {
      this.tipo = "BAJO";
      this.ancho = 50;
      this.alto = 50;
      this.y = sueloY - 40;
      this.img = imagenes.obsBajo;
    } else {
      this.tipo = "ALTO";
      this.ancho = 60;
      this.alto = 50;
      this.y = sueloY - 130;
      this.img = imagenes.obsAlto;
    }
  }

  actualizar() {
    this.x -= this.velocidad;
  }

  dibujar() {
    image(this.img, this.x, this.y, this.ancho, this.alto);
  }

  estaFuera() {
    return (this.x < -100);
  }
}
