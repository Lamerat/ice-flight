import { GameObject } from './GameObject.js';

export class Iceberg extends GameObject {
  static #primaryColor = 'white';
  static #secondaryColor = '#23B5E6';
  static endPoint = - 71;

  coordinates() {
    return {
      left: this.xPos - 50,
      right: this.xPos + 50,
    }
  }

  /**
   * 
   * @returns Array
   */
  collisionShape() {
    const x = this.xPos;
    const y = this.yPos;
    
    const shape = [
      [x, y - 90],
      [x + 55, y - 12],
      [x - 55, y - 12],
    ];
    return shape;
  }
  
  draw() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;

    ctx.lineWidth = 0.5
    ctx.fillStyle = Iceberg.#secondaryColor;

    // Corpus
    ctx.beginPath();
    ctx.moveTo(x - 47, y - 20);
    ctx.lineTo(x - 38, y - 44);
    ctx.lineTo(x - 31, y - 40);
    ctx.lineTo(x - 18, y - 71);
    ctx.lineTo(x - 13, y - 63);
    ctx.lineTo(x, y - 87);
    ctx.lineTo(x + 17, y - 58);
    ctx.lineTo(x + 23, y - 63);
    ctx.lineTo(x + 37, y - 33);
    ctx.lineTo(x + 41, y - 36);
    ctx.lineTo(x + 47, y - 20);
    ctx.lineTo(x + 47, y - 18);
    ctx.lineTo(x + 44, y - 16);
    ctx.lineTo(x + 44, y - 18);
    ctx.lineTo(x + 39, y - 29);
    ctx.lineTo(x + 36, y - 28);
    ctx.lineTo(x + 22, y - 56);
    ctx.lineTo(x + 15, y - 51);
    ctx.lineTo(x, y - 78);
    ctx.lineTo(x - 7, y - 47);
    ctx.lineTo(x + 7, y - 22);
    ctx.lineTo(x - 12, y - 37);
    ctx.lineTo(x - 27, y - 20);
    ctx.lineTo(x - 30, y - 18);
    ctx.lineTo(x - 42, y - 15);
    ctx.lineTo(x - 47, y - 20);
    ctx.fill();

    ctx.fillStyle = Iceberg.#primaryColor;
    ctx.beginPath();
    ctx.moveTo(x - 50, y - 17);
    ctx.bezierCurveTo(x - 46, y - 17, x - 43, y - 9, x - 34, y - 16);
    ctx.bezierCurveTo(x - 30, y - 18, x - 30, y - 18, x - 26, y - 16);
    ctx.bezierCurveTo(x - 21, y - 12, x - 22, y - 12, x - 14, y - 16);
    ctx.bezierCurveTo(x - 10, y - 18, x - 10, y - 18, x - 6, y - 16);
    ctx.bezierCurveTo(x - 2, y - 12, x + 2, y - 12, x + 6, y - 16);
    ctx.bezierCurveTo(x + 10, y - 18, x + 10, y - 18, x + 14, y - 16);
    ctx.bezierCurveTo(x + 19, y - 12, x + 21, y - 12, x + 26, y - 16);
    ctx.bezierCurveTo(x + 30, y - 18, x + 30, y - 18, x + 34, y - 16);
    ctx.bezierCurveTo(x + 43, y - 9, x + 45, y - 17, x + 50, y - 17);
    ctx.lineTo(x + 50, y - 21);
    ctx.bezierCurveTo(x + 47, y - 21, x + 45, y - 19, x + 44, y - 18);
    ctx.lineTo(x + 39, y - 29);
    ctx.lineTo(x + 36, y - 27);
    ctx.lineTo(x + 22, y - 56);
    ctx.lineTo(x + 15, y - 51);
    ctx.lineTo(x, y - 78);
    ctx.lineTo(x - 7, y - 47);
    ctx.lineTo(x + 7, y - 22);
    ctx.lineTo(x - 12, y - 37);
    ctx.lineTo(x - 27, y - 20);
    ctx.bezierCurveTo(x - 33, y - 23, x - 36, y - 16, x - 40, y - 16);
    ctx.bezierCurveTo(x - 44, y - 16, x - 46, y - 20, x - 50, y - 21);
    ctx.lineTo(x - 50, y - 17);
    ctx.fill();
    ctx.closePath();
  }
}