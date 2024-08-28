function grilla (i,j,modi,modj) {
  for ( i = 0; i < width/2; i+=modi ) {
    for ( j = 0; j < height; j+=modj ) {
      circle( i+width/2, j, tam);
      tam = 16;
      if (dist (mouseX, mouseX, i+width/2, i+width/2)< 50) {
        tam = tam+14;
      } else if (dist (mouseX, mouseX, i+width/2, i+width/2)> 50 && dist (mouseX, mouseX, i+width/2, i+width/2) < 100) {
        tam = tam+7;
      }
    }
  }
}
