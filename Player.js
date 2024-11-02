class Player {
  constructor(x, y, width, height, vx = 0, vy = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vx = vx;
    this.vy = vy;
    this.ay = 0;
    this.ax = 0;
    this.canJump = true;
  }

  jump() {
    if (this.canJump) {
      this.vy = -40;
      this.ay = 1.5;
    }
  }


  update() {
    this.vy += this.ay;
    this.y += this.vy;
    this.x += this.vx;

    if (this.y + this.height < window.innerHeight - this.jumpHeight) {
      this.ay = 1.5;
      this.vy = 0;
    }
    if (this.y + this.height > window.innerHeight) {
      this.vy = 0;
      this.ay = 0;
      this.y = window.innerHeight - this.height;
      this.vy = -40;
      this.ay = 1.5;
    }
  }
}

class Stair {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

