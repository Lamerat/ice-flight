import { Shoot } from './Shoot.js';

export class Fighter {
  static #mainColor = '#2E424B';
  static #enginesColor = 'gray';
  static #locatorColor = 'white';
  static #cockpitColor = 'lightblue';
  static #moveSpeed = 2;
  static #canvasWidth;
  static #planeEndPoint = 36;
  #context;
  #xPos;
  #yPos;
  #shoots = [];

  /**
   * 
   * @param {CanvasCompositing} context 
   * @param {number} xPosition 
   * @param {number} yPosition 
   * @param {number} canvasWidth 
   */
  constructor(context, xPosition, yPosition, canvasWidth) {
    this.#context = context;
    this.#xPos = xPosition;
    this.#yPos = yPosition;
    Fighter.#canvasWidth = canvasWidth;
  }

  get shoots() {
    return this.#shoots;
  }

  set shoots(value) {
    if (Array.isArray(value) && value.every(x => x instanceof Shoot)) {
      this.#shoots = value;
    } else {
      throw new Error ('Invalid value!');
    }
  }

  moveLeft() {
    if (this.#xPos - Fighter.#planeEndPoint > 0) {
      this.#xPos = this.#xPos - Fighter.#moveSpeed;
    }
  }

  moveRight() {
    if (this.#xPos + Fighter.#planeEndPoint < Fighter.#canvasWidth) {
      this.#xPos = this.#xPos + Fighter.#moveSpeed;
    }
  }

  cannonShoot() {
    this.#shoots.push(new Shoot(this.#context, this.#xPos, this.#yPos - 100));
  }
  
  draw() {
    const ctx = this.#context;
    let x = this.#xPos;
    let y = this.#yPos;

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = Fighter.#mainColor;

    // Corpus
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 1, y - 1 , x + 1, y - 2, x + 1, y - 2);
    ctx.lineTo(x + 2, y - 3);
    ctx.lineTo(x + 3, y - 15);
    ctx.lineTo(x + 9, y - 15);
    ctx.lineTo(x + 10, y - 10);
    ctx.lineTo(x + 20, y - 9);
    ctx.lineTo(x + 22, y - 13);
    ctx.lineTo(x + 10, y - 25);
    ctx.lineTo(x + 10, y - 27);
    ctx.lineTo(x + 34, y - 21);
    ctx.lineTo(x + 34.5, y - 21);
    ctx.lineTo(x + 34.5, y - 36);
    ctx.lineTo(x + 34, y - 36);
    ctx.lineTo(x + 34, y - 31);
    ctx.lineTo(x + 12, y - 50);
    ctx.bezierCurveTo(x + 10, y - 52, x + 9, y - 55, x + 9, y - 56);
    ctx.lineTo(x + 15, y - 53);
    ctx.lineTo(x + 15, y - 55);
    ctx.bezierCurveTo(x + 15, y - 55, x + 13, y - 57, x + 8, y - 64);
    ctx.bezierCurveTo(x + 4, y - 71, x + 3, y - 83.5, x + 3, y - 84);
    ctx.bezierCurveTo(x + 1, y - 85, x - 1, y - 85, x - 3, y - 84);
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 1, y - 1 , x - 1, y - 2, x - 1, y - 2);
    ctx.lineTo(x - 2, y - 3);
    ctx.lineTo(x - 3, y - 15);
    ctx.lineTo(x - 9, y - 15);
    ctx.lineTo(x - 10, y - 10);
    ctx.lineTo(x - 20, y - 9);
    ctx.lineTo(x - 22, y - 13);
    ctx.lineTo(x - 10, y - 25);
    ctx.lineTo(x - 10, y - 27);
    ctx.lineTo(x - 34, y - 21);
    ctx.lineTo(x - 34.5, y - 21);
    ctx.lineTo(x - 34.5, y - 36);
    ctx.lineTo(x - 34, y - 36);
    ctx.lineTo(x - 34, y - 31);
    ctx.lineTo(x - 12, y - 50);
    ctx.bezierCurveTo(x - 10, y - 52, x - 9, y - 55, x - 9, y - 56);
    ctx.lineTo(x - 15, y - 53);
    ctx.lineTo(x - 15, y - 55);
    ctx.bezierCurveTo(x - 15, y - 55, x - 13, y - 57, x - 8, y - 64);
    ctx.bezierCurveTo(x - 4, y - 71, x - 3, y - 83.5, x - 3, y - 84);
    ctx.fill();
    ctx.stroke();

    // Front
    ctx.beginPath();
    ctx.fillStyle = Fighter.#locatorColor;
    ctx.moveTo(x + 3, y - 84);
    ctx.bezierCurveTo(x + 1, y - 85, x - 1, y - 85, x - 3, y - 84);
    ctx.bezierCurveTo(x - 3.2, y - 86, x - 1, y - 96, x, y - 97);
    ctx.bezierCurveTo(x + 1, y - 96, x + 3.2, y - 86, x + 3, y - 84);
    ctx.fill();
    ctx.stroke();

    // Engines
    ctx.beginPath();
    ctx.fillStyle = Fighter.#enginesColor;
    ctx.moveTo(x + 3, y - 15);
    ctx.lineTo(x + 9, y - 15);
    ctx.lineTo(x + 8, y - 9);
    ctx.lineTo(x + 4, y - 9);
    ctx.lineTo(x + 3, y - 15);
    ctx.moveTo(x - 3, y - 15);
    ctx.lineTo(x - 9, y - 15);
    ctx.lineTo(x - 8, y - 9);
    ctx.lineTo(x - 4, y - 9);
    ctx.lineTo(x - 3, y - 15);
    ctx.fill();
    ctx.stroke();


    // Details
    ctx.beginPath();
    ctx.moveTo(x, y - 97);
    ctx.lineTo(x, y - 100);

    ctx.moveTo(x - 8, y - 26);
    ctx.bezierCurveTo(x - 8, y - 30, x - 7, y - 33, x - 6, y - 33);
    ctx.moveTo(x - 4, y - 26);
    ctx.bezierCurveTo(x - 4, y - 30, x - 5, y - 33, x - 6, y - 33);
    ctx.moveTo(x + 8, y - 26);
    ctx.bezierCurveTo(x + 8, y - 30, x + 7, y - 33, x + 6, y - 33);
    ctx.moveTo(x + 4, y - 26);
    ctx.bezierCurveTo(x + 4, y - 30, x + 5, y - 33, x + 6, y - 33);

    ctx.moveTo(x + 9, y - 56);
    ctx.lineTo(x + 9, y - 63);
    ctx.moveTo(x - 9, y - 56);
    ctx.lineTo(x - 9, y - 63);

    ctx.moveTo(x + 10, y - 27);
    ctx.lineTo(x + 9, y - 31);
    ctx.lineTo(x + 11, y - 32);
    ctx.lineTo(x + 11, y - 48);
    ctx.moveTo(x + 10, y - 52);
    ctx.lineTo(x + 10, y - 48);
    ctx.lineTo(x + 31, y - 31);
    ctx.lineTo(x + 31, y - 33);
    ctx.moveTo(x + 11, y - 32);
    ctx.lineTo(x + 25, y - 26);
    ctx.lineTo(x + 25, y - 23);
    ctx.moveTo(x - 10, y - 27);
    ctx.lineTo(x - 9, y - 31);
    ctx.lineTo(x - 11, y - 32);
    ctx.lineTo(x - 11, y - 48);
    ctx.moveTo(x - 10, y - 52);
    ctx.lineTo(x - 10, y - 48);
    ctx.lineTo(x - 31, y - 31);
    ctx.lineTo(x - 31, y - 33);
    ctx.moveTo(x - 11, y - 32);
    ctx.lineTo(x - 25, y - 26);
    ctx.lineTo(x - 25, y - 23);

    ctx.moveTo(x + 2, y - 42);
    ctx.bezierCurveTo(x + 3, y - 46, x + 3, y - 50, x + 2, y - 54);
    ctx.lineTo(x + 1.5, y - 54);
    ctx.lineTo(x + 1.5, y - 57);
    ctx.lineTo(x + 1, y - 57);
    ctx.lineTo(x + 1, y - 54);
    ctx.lineTo(x - 1, y - 54);
    ctx.lineTo(x - 1, y - 57);
    ctx.lineTo(x - 1.5, y - 57);
    ctx.lineTo(x - 1.5, y - 54);
    ctx.lineTo(x - 2, y - 54);
    ctx.bezierCurveTo(x - 2, y - 50, x - 3, y - 46, x - 2, y - 42);
    ctx.lineTo(x + 2, y - 42);

    ctx.moveTo(x + 1, y - 2);
    ctx.lineTo(x + 1, y - 32);
    ctx.moveTo(x - 1, y - 2);
    ctx.lineTo(x - 1, y - 32);

    ctx.rect(x - 1.5, y - 63.5, 3, 3)
    ctx.stroke();

    // Cockpit
    ctx.beginPath();
    ctx.fillStyle = Fighter.#cockpitColor;
    ctx.moveTo(x + 2, y - 66);
    ctx.lineTo(x + 2, y - 78);
    ctx.bezierCurveTo(x + 2, y - 79, x + 1, y - 82, x, y - 82);
    ctx.bezierCurveTo(x - 1, y - 82, x - 2, y - 79, x - 2, y - 78);
    ctx.lineTo(x - 2, y - 66);
    ctx.lineTo(x + 2, y - 66);
    ctx.moveTo(x + 2, y - 77);
    ctx.bezierCurveTo(x + 1, y - 77.5, x - 1, y - 77.5, x - 2, y - 77);
    ctx.moveTo(x + 2, y - 71);
    ctx.bezierCurveTo(x + 1, y - 71.5, x - 1, y - 71.5, x - 2, y - 71);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}