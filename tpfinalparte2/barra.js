class Barra {
  constructor(x, y, anchoTotal) {
    this.x = x;
    this.y = y;
    this.anchoTotal = anchoTotal;
    this.alto = 20;
  }

  dibujar(posXJugador, metaX) {
    noStroke();
    fill(100);
    rect(this.x, this.y, this.anchoTotal, this.alto);
    let anchoVerde = (posXJugador / metaX) * this.anchoTotal;
    anchoVerde = constrain(anchoVerde, 0, this.anchoTotal);
    fill(0, 255, 0);
    rect(this.x, this.y, anchoVerde, this.alto);
  }
}
