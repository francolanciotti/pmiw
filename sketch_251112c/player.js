class Player {
  constructor(startX, groundY, images) {
    this.images = images;
    this.x = startX;
    this.xLimit = startX;
    this.groundY = groundY;
    
    this.width = 86;
    this.height = 100;
    this.crouchHeight = 80;
    this.currentHeight = this.height;
    
    this.y = this.groundY - this.height;
    this.yVelocity = 0;
    this.gravity = 0.8;
    this.jumpForce = -16;
    
    this.isJumping = false;
    this.isDucking = false;
    this.speed = 0.3;
    
    this.animSpeed = 20;
  }

  update() {
    this.x += this.speed;
    this.y += this.yVelocity;

    if (this.y + this.currentHeight < this.groundY) {
      this.yVelocity += this.gravity;
      this.isJumping = true;
    }

    this.currentHeight = this.isDucking ? this.crouchHeight : this.height;

    if (this.y + this.currentHeight >= this.groundY) {
      this.y = this.groundY - this.currentHeight;
      this.yVelocity = 0;
      this.isJumping = false;
    }
  }

  show() {
    let imgToShow;
    if (this.isJumping) {
      imgToShow = this.images.jump;
    } else if (this.isDucking) {
      imgToShow = this.images.duck;
    } else {
      if (frameCount % this.animSpeed < this.animSpeed / 2) {
        imgToShow = this.images.run1;
      } else {
        imgToShow = this.images.run2;
      }
    }
    image(imgToShow, this.x, this.y, this.width, this.currentHeight);
  }

  jump() {
    if (!this.isJumping) {
      this.yVelocity = this.jumpForce;
      this.isJumping = true;
    }
  }

  duck(state) {
    if (this.isJumping) {
      this.isDucking = false;
      return;
    }
    this.isDucking = state;
  }

  moveBack(amount) {
    let newX = this.x - amount;
    this.x = max(this.xLimit, newX);
  }
}
