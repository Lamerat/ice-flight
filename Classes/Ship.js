import { GameObject } from './GameObject.js';

export class  Ship extends  GameObject {
  static #shipColor = 'black';
  static #flagColor = 'yellow';

  draw() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;

    ctx.fillStyle = Ship.#shipColor;
    ctx.beginPath();
    ctx.moveTo(x  - 66, y);
    ctx.lineTo(x  + 84, y);
    ctx.lineTo(x  + 90, y - 13);
    ctx.lineTo(x  + 67, y - 13);
    ctx.lineTo(x  + 65, y - 14);
    ctx.lineTo(x  + 65, y - 17);
    ctx.lineTo(x  + 55, y - 17);
    ctx.lineTo(x  + 55, y - 13);
    ctx.lineTo(x  + 40, y - 16);
    ctx.lineTo(x  + 39, y - 23);
    ctx.lineTo(x  + 34, y - 23);
    ctx.lineTo(x  + 33, y - 28);
    ctx.lineTo(x  + 28, y - 28);
    ctx.lineTo(x  + 28, y - 21);
    ctx.lineTo(x  + 24, y - 21);
    ctx.lineTo(x  + 24, y - 27);
    ctx.lineTo(x  + 17, y - 27);
    ctx.lineTo(x  + 17, y - 29);
    ctx.lineTo(x  + 11, y - 29);
    ctx.lineTo(x  + 11, y - 44);
    ctx.lineTo(x  + 8, y - 45);
    ctx.lineTo(x  + 8, y - 48);
    ctx.lineTo(x  + 4, y - 48);
    ctx.lineTo(x  + 4, y - 71);
    ctx.lineTo(x  + 2, y - 71);
    ctx.lineTo(x  + 2, y - 48);
    ctx.lineTo(x  - 1, y - 48);
    ctx.lineTo(x  - 5, y - 52);
    ctx.lineTo(x  - 5, y - 48);
    ctx.lineTo(x  - 9, y - 48);
    ctx.lineTo(x  - 9, y - 45);
    ctx.lineTo(x  - 3, y - 38);
    ctx.lineTo(x  - 4, y - 23);
    ctx.lineTo(x  - 6, y - 23);
    ctx.lineTo(x  - 6, y - 35);
    ctx.lineTo(x  - 8, y - 35);
    ctx.lineTo(x  - 8, y - 39);
    ctx.lineTo(x  - 17, y - 39);
    ctx.lineTo(x  - 17, y - 35);
    ctx.lineTo(x  - 20, y - 35);
    ctx.lineTo(x  - 21, y - 34);
    ctx.lineTo(x  - 19, y - 31);
    ctx.lineTo(x  - 19, y - 23);
    ctx.lineTo(x  - 26, y - 23);
    ctx.lineTo(x  - 21, y - 18);
    ctx.lineTo(x  - 21, y - 12);
    ctx.lineTo(x  - 26, y - 12);
    ctx.lineTo(x  - 26, y - 20);
    ctx.lineTo(x  - 33, y - 20);
    ctx.lineTo(x  - 34, y - 17);
    ctx.lineTo(x  - 35, y - 14);
    ctx.lineTo(x  - 47, y - 14);
    ctx.lineTo(x  - 50, y - 17);
    ctx.lineTo(x  - 90, y - 21);
    ctx.lineTo(x  - 66, y);
    ctx.fill();
    

    // flag
    ctx.fillStyle = Ship.#flagColor;
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x  + 2, y - 62);
    ctx.bezierCurveTo(x  - 1, y - 62, x  - 4, y - 58, x  - 5, y - 55);
    ctx.bezierCurveTo(x  - 5, y - 62, x  - 2, y - 66, x  + 2, y - 71);
    ctx.lineTo(x  + 2, y - 62);
    ctx.fill();
    ctx.stroke();

    // cannons
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(x  + 65, y - 16);
    ctx.lineTo(x  + 72, y - 17);
    ctx.moveTo(x  - 33, y - 18);
    ctx.lineTo(x  - 40, y - 19);
    ctx.stroke();
    ctx.lineWidth = 0.5;
  }
}