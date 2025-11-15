class Obstacle {
  constructor(groundY, images) {
    this.groundY = groundY;
    this.x = width;
    this.speed = 4;
    this.knockback = 50;
    
    if (random(1) < 0.5) {
      this.type = 'low';
      this.width = 40;
      this.height = 40;
      this.y = this.groundY - this.height;
      this.image = images.low;
    } else {
      this.type = 'high';
      this.width = 50;
      this.height = 50;
      this.y = this.groundY - 80 - this.height;
      this.image = images.high;
    }
  }

  update() {
    this.x -= this.speed;
  }

  show() {
    image(this.image, this.x, this.y, this.width, this.height);
  }

  isOffscreen() {
    return this.x + this.width < 0;
  }

  collides(player) {
    let p = player;
    let o = this;
    return (
      p.x < o.x + o.width &&
      p.x + p.width > o.x &&
      p.y < o.y + o.height &&
      p.y + p.currentHeight > o.y
    );
  }
}
