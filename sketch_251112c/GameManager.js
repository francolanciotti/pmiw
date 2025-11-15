class GameManager {

  constructor(backgroundImages, playerImages, obstacleImages) {
    this.gameState = 'startScreen';
    
    this.backgroundImages = backgroundImages;
    this.playerImages = playerImages;
    this.obstacleImages = obstacleImages;
    
    this.groundY = height * 0.8;
    
    this.playerStartX = 50;
    this.player = new Player(this.playerStartX, this.groundY, this.playerImages);
    
    this.obstacles = [];
    this.goalX = 400;
    this.timeLimit = 50;
    this.timeLeft = this.timeLimit;
    this.progressBar = new ProgressBar(height - 20, 20, this.goalX, this.playerStartX);
  }

  update() {
    if (this.gameState !== 'playing') return;
    this.player.update();
    this.updateTimer();
    this.spawnObstacles();

    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      let obs = this.obstacles[i];
      obs.update();

      if (obs.collides(this.player)) {
        this.player.moveBack(obs.knockback);
      }

      if (obs.isOffscreen()) {
        this.obstacles.splice(i, 1);
      }
    }
    
    this.checkGameStatus();
  }

  draw() {
    
    let bgToDraw;
    
    if (this.gameState === 'startScreen' || this.gameState === 'creditsScreen') {
      bgToDraw = this.backgroundImages.start;
    } else if (this.gameState === 'win') {
      bgToDraw = this.backgroundImages.win;
    } else if (this.gameState === 'lose') {
      bgToDraw = this.backgroundImages.lose;
    } else { // Si es 'playing'
      bgToDraw = this.backgroundImages.playing;
    }
    image(bgToDraw, 0, 0, width, height);
    
    if (this.gameState == 'playing') {
      
      this.player.show();
      for (let obs of this.obstacles) {
        obs.show();
      }
      
    }
    
    this.drawUI();
    if (this.gameState !== 'startScreen') {
      this.progressBar.draw(this.player.x);
    }
  }

  updateTimer() {
    let elapsed = (millis() - this.startTime) / 1000;
    this.timeLeft = this.timeLimit - elapsed;
  }

  checkGameStatus() {
    if (this.player.x >= this.goalX) {
      this.gameState = 'win';
    }
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.gameState = 'lose';
    }
  }

  spawnObstacles() {
    if (frameCount % 100 === 0) {
      if (random(1) > 0.3) {
        this.obstacles.push(new Obstacle(this.groundY, this.obstacleImages));
      }
    }
  }

  drawUI() {
    fill(0);
    
    if (this.gameState === 'startScreen') {
      textAlign(CENTER, CENTER);
      textSize(65); fill(250, 100, 100); stroke(255, 100, 100); strokeWeight(2)
      text("Caperucita Roja", width/2, height/2 - 120);
      textSize(24); fill(255,255,255); noStroke();
      text("Espacio = Saltar", width/2, height/2 - 30);
      text("Shift = Agacharse", width/2, height/2 );
      textSize(32); fill(0,200,0); textSize(32); stroke(0,200,0); strokeWeight(1)
      text("Presiona 'Enter' para Empezar", width/2, height/2 + 100);
      
    } else if (this.gameState === 'playing') {
      textSize(32); textAlign(LEFT, TOP); fill(255); noStroke();
      text("Tiempo: " + round(this.timeLeft), 10, 10);
      
    } else if (this.gameState === 'win' || this.gameState === 'lose') {
      let msg = this.gameState === 'win' ? "¡GANASTE!" : "¡PERDISTE!";
      let fillColor = this.gameState === 'win' ? color(0, 200, 0) : color(200, 0, 0);
      
      fill(fillColor);
      textSize(64); textAlign(CENTER, CENTER);
      text(msg, width/2, height/2 - 30);
      fill(255); textSize(32);
      text("Presiona 'Enter' para ver los Créditos", width/2, height/2 + 30);
      
    } else if (this.gameState === 'creditsScreen') {
      textAlign(CENTER, CENTER);
      textSize(40); fill(255, 255, 0); stroke(255, 255, 0); strokeWeight(1)
      text("CRÉDITOS", width/2, height/2 - 100);
      textSize(24); fill(255, 255, 0); noStroke();
      text("Creado por: Abril Herrera y Franco Lanciotti", width/2, height/2 - 40);
      fill(0,200,0); textSize(32); stroke(0,200,0); strokeWeight(1)
      text("Presiona 'Enter' para Reiniciar", width/2, height/2 + 100);
    }
  }

  handleKeyPressed() {
    if (keyCode === ENTER) {
      if (this.gameState === 'startScreen') {
        this.gameState = 'playing';
        this.startTime = millis();
      } else if (this.gameState === 'win' || this.gameState === 'lose') {
        this.gameState = 'creditsScreen';
      }
    }
    
    if (this.gameState === 'playing') {
      if (key === ' ') this.player.jump();
      if (keyCode === SHIFT) this.player.duck(true);
    }
  }

  handleKeyReleased() {
    if (this.gameState === 'playing' && keyCode === SHIFT) {
      this.player.duck(false);
    }
  }
}
