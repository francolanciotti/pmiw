class ProgressBar {
  constructor(y, h, goal, start) {
    this.y = y;
    this.h = h;
    this.bgColor = 100;
    this.fillColor = color(0, 255, 0);
    this.playerStartX = start;
    this.totalJourney = goal - start;
  }
  
  draw(currentPlayerX) {
    let journeyCompleted = currentPlayerX - this.playerStartX;
    let progressPercent = journeyCompleted / this.totalJourney;
    progressPercent = constrain(progressPercent, 0, 1);
    
    let fillWidth = width * progressPercent;

    noStroke();
    fill(this.bgColor);
    rect(0, this.y, width, this.h);
    
    fill(this.fillColor);
    rect(0, this.y, fillWidth, this.h);
  }
}
