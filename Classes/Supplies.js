import { GameObject } from './GameObject.js';

export class Supplies extends GameObject {
  static #primaryColor = 'orange';
  static #secondaryColor = 'bisque';
  static #primaryTextColor = 'black';
  static #secondaryTextColor = 'black';
  static fuelHigh = 80;
  static #fuelHealth = 1;
  static #fuelEndPoint = 20;

  constructor(context, xPosition, yPosition) {
    super(context, xPosition, yPosition, Supplies.#fuelHealth);
  }

  coordinates() {
    return {
      left: this.xPos - Supplies.#fuelEndPoint,
      right: this.xPos + Supplies.#fuelEndPoint,
    }
  }

  collisionShape() {
    const x = this.xPos;
    const y = this.yPos;

    return [
      [x + 15, y],
      [x + 15, y - 80],
      [x - 15, y - 80],
      [x - 15, y],
    ];
  }

  
  draw() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;

    ctx.beginPath();
    ctx.fillStyle = Supplies.#primaryColor;
    ctx.rect(x - 15, y - 80, 30, 20);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = Supplies.#secondaryColor;
    ctx.rect(x - 15, y - 60, 30, 20);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = Supplies.#primaryColor;
    ctx.rect(x - 15, y - 40, 30, 20);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = Supplies.#secondaryColor;
    ctx.rect(x - 15, y - 20, 30, 20);
    ctx.fill();

    ctx.beginPath();
    ctx.font = 'bold 15px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = Supplies.#primaryTextColor;
    ctx.fillText('S', x, y - 65);
    ctx.fillStyle = Supplies.#secondaryTextColor;
    ctx.fillText('U', x, y - 45);
    ctx.fillStyle = Supplies.#primaryTextColor;
    ctx.fillText('P', x, y - 25);
    ctx.fillStyle = Supplies.#secondaryTextColor;
    ctx.fillText('P', x, y - 5);
    
    ctx.beginPath();
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = 'black';
    ctx.moveTo(x, y);
    ctx.lineTo(x + 15, y);
    ctx.lineTo(x + 15, y - 80);
    ctx.lineTo(x - 15, y - 80);
    ctx.lineTo(x - 15, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}