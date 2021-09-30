import { directions } from '../common/directions.js';
import { GameObject } from './GameObject.js';

export class Helicopter extends  GameObject {
  static #HelicopterColor = 'black';
  static #helicopterEndPoint = 58;
  static helicopterHigh = 30;
  static #moveChance = 4;
  static #moveNumber = 2;
  static #moveSpeed =  4;
  static #helicopterHealth = 5;
  #propeller = {left: 0, right: 0, top: 0, bottom: 0};
  #backRotor = 0;
  #position = directions.LEFT;
  #move = false;
  #animateTurn = 8;

  constructor(context, xPosition, yPosition) {
    super(context, xPosition, yPosition, Helicopter.#helicopterHealth);
    this.#position = Math.floor(Math.random() * 2) + 1;
    if (Math.floor(Math.random() * Helicopter.#moveChance) + 1 === Helicopter.#moveNumber) {
      const seconds = Math.floor(Math.random() * 3) + 1;
      setTimeout(() => this.#move = true, seconds * 1000);
    }
  }

  collisionShape() {
    const x = this.xPos;
    const y = this.yPos;
    
    if (this.#position === directions.LEFT) {
      return [
        [x + 30, y],
        [x + 38, y - 10],
        [x + 38, y - 18],
        [x + 20, y - 26],
        [x + 58, y - 30],
        [x + 58, y - 32],
        [x - 50, y - 32],
        [x - 52, y - 34],
        [x - 59, y - 34],
        [x - 55, y - 25],
        [x - 59, y - 17],
        [x - 58, y - 13],
        [x - 55, y - 9],
        [x - 45, y - 9],
        [x - 41, y - 14],
        [x - 18, y - 14],
        [x - 5, y - 3],
        [x - 5, y],
      ];
    }
    
    return [
      [x - 30, y],
      [x - 38, y - 10],
      [x - 38, y - 18],
      [x - 20, y - 26],
      [x - 58, y - 30],
      [x - 58, y - 32],
      [x + 50, y - 32],
      [x + 52, y - 34],
      [x + 59, y - 34],
      [x + 55, y - 25],
      [x + 59, y - 17],
      [x + 58, y - 13],
      [x + 55, y - 9],
      [x + 45, y - 9],
      [x + 41, y - 14],
      [x + 18, y - 14],
      [x + 5, y - 3],
      [x + 5, y],
    ];
  }

  coordinates() {
    return {
      left: this.xPos - Helicopter.#helicopterEndPoint,
      right: this.xPos + Helicopter.#helicopterEndPoint,
    }
  }

  update(speed) {
    super.update(speed);
    if (this.#move && this.#position === directions.LEFT) {
      this.xPos = this.xPos + Helicopter.#moveSpeed;
      if (this.xPos >= this.canvasWidth + Helicopter.#helicopterEndPoint) {
        this.xPos = -Helicopter.#helicopterEndPoint;
      }
    }

    if (this.#move && this.#position === directions.RIGHT) {
      this.xPos = this.xPos - Helicopter.#moveSpeed;
      if (this.xPos <= -Helicopter.#helicopterEndPoint) {
        this.xPos = this.canvasWidth + Helicopter.#helicopterEndPoint;
      }
    }
  }

  draw() {
    if (this.#position === directions.RIGHT) {
      this.drawRight();
    } else {
      this.drawLeft();
    }
    this.#animateTurn = this.#animateTurn + 1;
  }

  drawRight() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;
    ctx.lineWidth = 0.5;

    // Body
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.moveTo(x + 17, y - 14);
    ctx.lineTo(x + 43, y - 14);
    ctx.lineTo(x + 55, y - 24);
    ctx.lineTo(x + 58, y - 34);
    ctx.lineTo(x + 52, y - 34);
    ctx.lineTo(x + 40, y - 19);
    ctx.lineTo(x + 17, y - 20);
    ctx.lineTo(x + 2, y - 24);
    ctx.lineTo(x, y - 27);
    ctx.lineTo(x - 5, y - 27);
    ctx.lineTo(x - 5, y - 29);
    ctx.lineTo(x - 5, y - 32);
    ctx.lineTo(x - 7, y - 32);
    ctx.lineTo(x - 7, y - 29);
    ctx.lineTo(x - 6, y - 29);
    ctx.lineTo(x - 6, y - 27);
    ctx.lineTo(x - 12, y - 27);
    ctx.lineTo(x - 14, y - 25);
    ctx.bezierCurveTo(x - 18, y - 25, x - 27, y - 23, x - 37, y - 16);
    ctx.bezierCurveTo(x - 40, y - 10, x - 29, y - 5, x - 28, y - 5);
    ctx.bezierCurveTo(x - 20, y - 3, x - 11, y - 3, x - 5, y - 3);
    ctx.bezierCurveTo(x + 4, y - 3, x + 10, y - 9, x + 17, y - 14);
    // ctx.stroke();
    ctx.fill();

    // Propeller

    if (Number.isInteger(this.#animateTurn / 8)) {
      this.#propeller = {
        left: 58,
        right: 46,
        top: 32,
        bottom: 30,
      }
    } else {
      this.#propeller = {
        left: 18,
        right: 6,
        top: 31.5,
        bottom: 30.5,
      }
    }
    ctx.beginPath();
    ctx.moveTo(x - 5, y - this.#propeller.bottom);
    ctx.lineTo(x + this.#propeller.right, y - 31);
    ctx.lineTo(x - 5, y - this.#propeller.top);
    ctx.lineTo(x - 5, y - this.#propeller.bottom);
    ctx.moveTo(x - 7, y - this.#propeller.bottom);
    ctx.lineTo(x - this.#propeller.left, y - 31);
    ctx.lineTo(x - 7, y - this.#propeller.top);
    ctx.lineTo(x - 7, y - this.#propeller.bottom);
    ctx.fill();

    // Tail
    ctx.beginPath();
    ctx.arc(x + 50, y - 17, 8.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#006994';
    ctx.beginPath();
    ctx.arc(x + 50, y - 17, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(x + 50, y - 17, 1.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = Helicopter.#HelicopterColor;
    this.#backRotor = this.#backRotor + 20;

    if (this.#backRotor >= 360) {
      this.#backRotor = 0;
    }

    ctx.moveTo(x + 50, y - 17);
    ctx.lineTo((x + 50) + 4  * Math.cos(Helicopter.degreesToRadians(this.#backRotor + 30)), (y - 17) + 4 * Math.sin(Helicopter.degreesToRadians(this.#backRotor + 30)));
    ctx.moveTo(x + 50, y - 17);
    ctx.lineTo((x + 50) + 4  * Math.cos(Helicopter.degreesToRadians(this.#backRotor + 150)), (y - 17) + 4 * Math.sin(Helicopter.degreesToRadians(this.#backRotor + 150)));
    ctx.moveTo(x + 50, y - 17);
    ctx.lineTo((x + 50) + 4  * Math.cos(Helicopter.degreesToRadians(this.#backRotor + 270)), (y - 17) + 4 * Math.sin(Helicopter.degreesToRadians(this.#backRotor + 270)));
    ctx.stroke();

    ctx.stroke();

    // Windows
    ctx.fillStyle = '#006994';
    ctx.beginPath();
    ctx.moveTo(x - 11, y - 14);
    ctx.lineTo(x - 11, y - 19);
    ctx.lineTo(x - 19, y - 20);
    ctx.lineTo(x - 19, y - 13);
    ctx.lineTo(x - 11, y - 14);
    ctx.moveTo(x - 21, y - 13);
    ctx.lineTo(x - 21, y - 20);
    ctx.lineTo(x - 24, y - 20);
    ctx.bezierCurveTo(x - 26, y - 19, x - 28, y - 16, x - 29, y - 13);
    ctx.lineTo(x - 21, y - 13);
    ctx.moveTo(x - 31, y - 13);
    ctx.bezierCurveTo(x - 26, y - 19, x - 28, y - 18, x - 25, y - 20);
    ctx.lineTo(x - 27, y - 20);
    ctx.bezierCurveTo(x - 30, y - 19, x - 37, y - 15, x - 36, y - 13);
    ctx.lineTo(x - 31, y - 13);
    ctx.fill();

    // Ski
    ctx.beginPath();
    ctx.strokeStyle = Helicopter.#HelicopterColor;
    ctx.moveTo(x - 23, y - 5);
    ctx.lineTo(x - 23, y);
    ctx.moveTo(x - 4, y - 5);
    ctx.lineTo(x - 4, y);
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 4, y);
    ctx.lineTo(x - 23, y);
    ctx.bezierCurveTo(x - 28, y, x - 30, y - 1, x - 32, y - 4);
    ctx.stroke();
    ctx.lineWidth = 0.5;
  }

  drawLeft() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;

    ctx.fillStyle = Helicopter.#HelicopterColor;
    ctx.beginPath();
    ctx.moveTo(x - 17, y - 14);
    ctx.lineTo(x - 43, y - 14);
    ctx.lineTo(x - 55, y - 24);
    ctx.lineTo(x - 58, y - 34);
    ctx.lineTo(x - 52, y - 34);
    ctx.lineTo(x - 40, y - 19);
    ctx.lineTo(x - 17, y - 20);
    ctx.lineTo(x - 2, y - 24);
    ctx.lineTo(x, y - 27);
    ctx.lineTo(x + 5, y - 27);
    ctx.lineTo(x + 5, y - 29);
    ctx.lineTo(x + 5, y - 32);
    ctx.lineTo(x + 7, y - 32);
    ctx.lineTo(x + 7, y - 29);
    ctx.lineTo(x + 6, y - 29);
    ctx.lineTo(x + 6, y - 27);
    ctx.lineTo(x + 12, y - 27);
    ctx.lineTo(x + 14, y - 25);
    ctx.bezierCurveTo(x + 18, y - 25, x + 27, y - 23, x + 37, y - 16);
    ctx.bezierCurveTo(x + 40, y - 10, x + 29, y - 5, x + 28, y - 5);
    ctx.bezierCurveTo(x + 20, y - 3, x + 11, y - 3, x + 5, y - 3);
    ctx.bezierCurveTo(x - 4, y - 3, x - 10, y - 9, x - 17, y - 14);
    ctx.fill();

    // Propeller
    if (Number.isInteger(this.#animateTurn / 8)) {
      this.#propeller = {
        left: 58,
        right: 46,
        top: 32,
        bottom: 30,
      }
    } else {
      this.#propeller = {
        left: 18,
        right: 6,
        top: 31.5,
        bottom: 30.5,
      }
    }
    
    ctx.moveTo(x + 5, y - this.#propeller.bottom);
    ctx.lineTo(x - this.#propeller.right, y - 31);
    ctx.lineTo(x + 5, y - this.#propeller.top);
    ctx.lineTo(x + 5, y - this.#propeller.bottom);
    ctx.moveTo(x + 7, y - this.#propeller.bottom);
    ctx.lineTo(x + this.#propeller.left, y - 31);
    ctx.lineTo(x + 7, y - this.#propeller.top);
    ctx.lineTo(x + 7, y - this.#propeller.bottom);
    ctx.fill();

    // Tail
    ctx.beginPath();
    ctx.arc(x - 50, y - 17, 8.5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#006994';
    ctx.beginPath();
    ctx.arc(x - 50, y - 17, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(x - 50, y - 17, 1.5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.strokeStyle = Helicopter.#HelicopterColor;
    ctx.lineWidth = 1;
    this.#backRotor = this.#backRotor + 20;

    if (this.#backRotor >= 360) {
      this.#backRotor = 0;
    }

    ctx.moveTo(x - 50, y - 17);
    ctx.lineTo((x - 50) + 4  * Math.cos(Helicopter.degreesToRadians(this.#backRotor + 30)), (y - 17) + 4 * Math.sin(Helicopter.degreesToRadians(this.#backRotor + 30)));
    ctx.moveTo(x - 50, y - 17);
    ctx.lineTo((x - 50) + 4  * Math.cos(Helicopter.degreesToRadians(this.#backRotor + 150)), (y - 17) + 4 * Math.sin(Helicopter.degreesToRadians(this.#backRotor + 150)));
    ctx.moveTo(x - 50, y - 17);
    ctx.lineTo((x - 50) + 4  * Math.cos(Helicopter.degreesToRadians(this.#backRotor + 270)), (y - 17) + 4 * Math.sin(Helicopter.degreesToRadians(this.#backRotor + 270)));
    ctx.stroke();

    // windows
    ctx.fillStyle = '#006994';
    ctx.beginPath();
    ctx.moveTo(x + 11, y - 14);
    ctx.lineTo(x + 11, y - 19);
    ctx.lineTo(x + 19, y - 20);
    ctx.lineTo(x + 19, y - 13);
    ctx.lineTo(x + 11, y - 14);
    ctx.moveTo(x + 21, y - 13);
    ctx.lineTo(x + 21, y - 20);
    ctx.lineTo(x + 24, y - 20);
    ctx.bezierCurveTo(x + 26, y - 19, x + 28, y - 16, x + 29, y - 13);
    ctx.lineTo(x + 21, y - 13);
    ctx.moveTo(x + 31, y - 13);
    ctx.bezierCurveTo(x + 26, y - 19, x + 28, y - 18, x + 25, y - 20);
    ctx.lineTo(x + 27, y - 20);
    ctx.bezierCurveTo(x + 30, y - 19, x + 37, y - 15, x + 36, y - 13);
    ctx.lineTo(x + 31, y - 13);
    ctx.fill();

    // Ski
    ctx.beginPath();
    ctx.strokeStyle = Helicopter.#HelicopterColor;
    ctx.moveTo(x + 23, y - 5);
    ctx.lineTo(x + 23, y);
    ctx.moveTo(x + 4, y - 5);
    ctx.lineTo(x + 4, y);
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - 4, y);
    ctx.lineTo(x + 23, y);
    ctx.bezierCurveTo(x + 28, y, x + 30, y - 1, x + 32, y - 4);
    ctx.stroke();
    ctx.lineWidth = 0.5;
    
  }

  static degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
  }
}