import { GameObject } from './GameObject.js';

export class Rocket extends GameObject {
  static #rocketSpeed = 5;

  update() {
    this.yPos = this.yPos - Rocket.#rocketSpeed;
  }

  draw() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.moveTo(x - 2, y);
    ctx.lineTo(x + 2, y);
    ctx.lineTo(x + 2, y - 28);
    ctx.lineTo(x, y - 32);
    ctx.lineTo(x - 2, y - 28);
    ctx.lineTo(x - 2, y);

    ctx.moveTo(x - 2, y - 2);
    ctx.lineTo(x + 5, y - 2);
    ctx.lineTo(x + 5, y - 5);
    ctx.lineTo(x + 4, y - 7);
    ctx.lineTo(x + 2, y - 7);
    ctx.lineTo(x + 2, y - 2);

    ctx.moveTo(x + 2, y - 2);
    ctx.lineTo(x - 5, y - 2);
    ctx.lineTo(x - 5, y - 5);
    ctx.lineTo(x - 4, y - 7);
    ctx.lineTo(x - 2, y - 7);
    ctx.lineTo(x - 2, y - 2);

    ctx.moveTo(x, y - 2);
    ctx.lineTo(x, y - 7);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.moveTo(x - 2, y - 28);
    ctx.lineTo(x + 2, y - 28);
    ctx.lineTo(x, y - 32);
    ctx.lineTo(x - 2, y - 28);
    ctx.fill();
    ctx.stroke();
  }
}