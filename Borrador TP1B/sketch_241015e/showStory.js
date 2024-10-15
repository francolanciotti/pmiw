function showStory() {
  image(imagen[storyPart], 0, 0, width, height); // Mostrar imagen correspondiente
  textAlign(CENTER);

  if (storyPart === 0) {
    text("Freezer revive gracias a las bolas del dragon. 1: Es hora de vengarme", width / 2, height / 2 - 40);
  } else if (storyPart === 1) {
    text("Tus subditos te explican la situacion actual 1: Goku se ha hecho mas fuerte...", width / 2, height / 2 - 40);
  } else if (storyPart === 2) {
    text("Es mejor entrenar o tomar por sorpresa a mis enemigos 1: Entrenar 2: No hay tiempo", width / 2, height / 2);
  } else if (storyPart === 3) {
    text("Invado la Tierra luego de entrenar lo suficiente para alcanzar nuevos poderes", width / 2, height / 2 - 40);
  } else if (storyPart === 4) {
    text("Invado la Tierra sorprendiendo a mis enemigos", width / 2, height / 2);
  }
}
