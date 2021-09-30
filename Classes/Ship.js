import { directions } from '../common/directions.js';
import { GameObject } from './GameObject.js';

export class  Ship extends  GameObject {
  static #shipColor = 'black';
  static #flagColor = 'yellow';
  static #shipEndPoint = 90;
  static shipHigh = 71;
  static #moveChance = 6;
  static #moveNumber = 4;
  static #moveSpeed =  2;
  static #shipHealth = 20;
  #position = directions.LEFT;
  #move = false;

  constructor(context, xPosition, yPosition) {
    super(context, xPosition, yPosition, Ship.#shipHealth);
    this.#position = Math.floor(Math.random() * 2) + 1;
    if (Math.floor(Math.random() * Ship.#moveChance) + 1 === Ship.#moveNumber) {
      const seconds = Math.floor(Math.random() * 3) + 1;
      setTimeout(() => this.#move = true, seconds * 1000);
    }
  }

  collisionShape() {
    const x = this.xPos;
    const y = this.yPos;
    
    if (this.#position === directions.LEFT) {
      return [
        [x - 85, y],
        [x - 90, y - 14],
        [x - 65, y - 14],
        [x - 30, y - 30],
        [x - 12, y - 30],
        [x - 12, y - 46],
        [x - 4, y - 50],
        [x - 4, y - 72],
        [x - 2, y - 72],
        [x - 2, y - 58],
        [x + 40, y - 16],
        [x + 90, y - 21],
        [x + 66, y],
      ];
    }
    
    return [
      [x + 85, y],
      [x + 90, y - 14],
      [x + 65, y - 14],
      [x + 30, y - 30],
      [x + 12, y - 30],
      [x + 12, y - 46],
      [x + 4, y - 50],
      [x + 4, y - 72],
      [x + 2, y - 72],
      [x + 2, y - 58],
      [x - 40, y - 16],
      [x - 90, y - 21],
      [x - 66, y],
    ];
  }

  coordinates() {
    return {
      left: this.xPos - Ship.#shipEndPoint,
      right: this.xPos + Ship.#shipEndPoint,
    }
  }

  update(speed) {
    super.update(speed);
    if (this.#move && this.#position === directions.LEFT) {
      this.xPos = this.xPos + Ship.#moveSpeed;
      if (this.xPos === this.canvasWidth + Ship.#shipEndPoint) {
        this.xPos = -Ship.#shipEndPoint;
      }
    }

    if (this.#move && this.#position === directions.RIGHT) {
      this.xPos = this.xPos - Ship.#moveSpeed;
      if (this.xPos === -Ship.#shipEndPoint) {
        this.xPos = this.canvasWidth + Ship.#shipEndPoint;
      }
    }
  }

  draw() {
    if (this.#position === directions.RIGHT) {
      this.drawRight();
    } else {
      this.drawLeft();
    }
  }

  drawRight() {
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


  drawLeft() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x + 66, y);
    ctx.lineTo(x - 84, y);
    ctx.lineTo(x - 90, y - 13);
    ctx.lineTo(x - 67, y - 13);
    ctx.lineTo(x - 65, y - 14);
    ctx.lineTo(x - 65, y - 17);
    ctx.lineTo(x - 55, y - 17);
    ctx.lineTo(x - 55, y - 13);
    ctx.lineTo(x - 40, y - 16);
    ctx.lineTo(x - 39, y - 23);
    ctx.lineTo(x - 34, y - 23);
    ctx.lineTo(x - 33, y - 28);
    ctx.lineTo(x - 28, y - 28);
    ctx.lineTo(x - 28, y - 21);
    ctx.lineTo(x - 24, y - 21);
    ctx.lineTo(x - 24, y - 27);
    ctx.lineTo(x - 17, y - 27);
    ctx.lineTo(x - 17, y - 29);
    ctx.lineTo(x - 11, y - 29);
    ctx.lineTo(x - 11, y - 44);
    ctx.lineTo(x - 8, y - 45);
    ctx.lineTo(x - 8, y - 48);
    ctx.lineTo(x - 4, y - 48);
    ctx.lineTo(x - 4, y - 71);
    ctx.lineTo(x - 2, y - 71);
    ctx.lineTo(x - 2, y - 48);
    ctx.lineTo(x + 1, y - 48);
    ctx.lineTo(x + 5, y - 52);
    ctx.lineTo(x + 5, y - 48);
    ctx.lineTo(x + 9, y - 48);
    ctx.lineTo(x + 9, y - 45);
    ctx.lineTo(x + 3, y - 38);
    ctx.lineTo(x + 4, y - 23);
    ctx.lineTo(x + 6, y - 23);
    ctx.lineTo(x + 6, y - 35);
    ctx.lineTo(x + 8, y - 35);
    ctx.lineTo(x + 8, y - 39);
    ctx.lineTo(x + 17, y - 39);
    ctx.lineTo(x + 17, y - 35);
    ctx.lineTo(x + 20, y - 35);
    ctx.lineTo(x + 21, y - 34);
    ctx.lineTo(x + 19, y - 31);
    ctx.lineTo(x + 19, y - 23);
    ctx.lineTo(x + 26, y - 23);
    ctx.lineTo(x + 21, y - 18);
    ctx.lineTo(x + 21, y - 12);
    ctx.lineTo(x + 26, y - 12);
    ctx.lineTo(x + 26, y - 20);
    ctx.lineTo(x + 33, y - 20);
    ctx.lineTo(x + 34, y - 17);
    ctx.lineTo(x + 35, y - 14);
    ctx.lineTo(x + 47, y - 14);
    ctx.lineTo(x + 50, y - 17);
    ctx.lineTo(x + 90, y - 21);
    ctx.lineTo(x + 66, y);
    ctx.fill();

    // flag
    ctx.fillStyle = Ship.#flagColor;
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'black'; 
    ctx.beginPath();
    ctx.moveTo(x - 2, y - 62);
    ctx.bezierCurveTo(x + 1, y - 62, x + 4, y - 58, x + 5, y - 55);
    ctx.bezierCurveTo(x + 5, y - 62, x + 2, y - 66, x - 2, y - 71);
    ctx.lineTo(x - 2, y - 62);
    ctx.fill();
    ctx.stroke();

    // cannons
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(x - 65, y - 16);
    ctx.lineTo(x - 72, y - 17);
    ctx.moveTo(x + 33, y - 18);
    ctx.lineTo(x + 40, y - 19);
    ctx.stroke();
    ctx.lineWidth = 0.5;
  }
}