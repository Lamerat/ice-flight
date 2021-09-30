import { Rocket } from './Rocket.js';
import { Shoot } from './Shoot.js';

export class Fighter {
  static #mainColor = '#2E424B';
  static #enginesColor = 'gray';
  static #locatorColor = 'white';
  static #cockpitColor = 'lightblue';
  static #moveSpeed = 2;
  static #canvasWidth;
  static #planeEndPoint = 36;
  static #maxRockets = 2;
  static #maxAmmo = 125;
  static #maxRocketPayload = 6;
  static #maxFuel = 1000;
  static #fuelConsumption = 0.2;
  #rocketsPayload = Fighter.#maxRocketPayload;
  #ammo = Fighter.#maxAmmo;
  #fuel = Fighter.#maxFuel;
  #context;
  #xPos;
  #yPos;
  #shoots = [];
  #rockets = [];
  #rocketCounter = 0;

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


  get xPos() {
    return this.#xPos;
  }

  get shoots() {
    return this.#shoots;
  }

  get rockets() {
    return this.#rockets;
  }

  set shoots(value) {
    if (Array.isArray(value) && value.every(x => x instanceof Shoot)) {
      this.#shoots = value;
    } else {
      throw new Error ('Invalid value!');
    }
  }
  
  set rockets(value) {
    if (Array.isArray(value) && value.every(x => x instanceof Rocket)) {
      this.#rockets = value;
    } else {
      throw new Error ('Invalid value!');
    }
  }

  checkPoints = () => {
    let x = this.#xPos;
    let y = this.#yPos;

    const points = [
      [x, y],
      [x, y - 100],
      [x - 5, y - 74],
      [x - 16, y - 54],
      [x - 34, y - 35],
      [x - 34, y - 30],
      [x - 34, y - 21],
      [x - 22, y - 9],
      [x + 22, y - 9],
      [x + 34, y - 21],
      [x + 34, y - 30],
      [x + 34, y - 35],
      [x + 16, y - 54],
      [x + 5, y - 74],
    ];

    return points;
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
    if (this.#ammo) {
      this.#shoots.push(new Shoot(this.#context, this.#xPos, this.#yPos - 100));
      this.#ammo = this.#ammo - 1;
      document.getElementById('ammoCount').innerHTML = `AMMO: ${this.#ammo}`;
    }
  }

  rocketShoot() {
    if (this.#rockets.length < Fighter.#maxRockets && this.#rocketsPayload) {
      this.#rockets.push(new Rocket(this.#context, this.#xPos, this.#yPos - 20));
      this.#rocketsPayload = this.#rocketsPayload - 1;
      document.getElementById('rocketCount').innerHTML = `ROCKETS: ${this.#rocketsPayload}`;
    }
  }

  updateFuel(speed) {
    this.#fuel = this.#fuel - Fighter.#fuelConsumption * speed;
    if (this.#fuel >= 0) {
      document.getElementById('fuelCount').innerHTML = `FUEL: ${this.#fuel.toFixed()}`;
    } else {
      document.getElementById('fuelCount').innerHTML = `FUEL: 0`;
    }
    return this.#fuel;
  }

  updateSupplies(speed) {
    if (this.#fuel  + 10 * speed < Fighter.#maxFuel) {
      this.#fuel = this.#fuel + 10 * speed;
    }

    if (this.#ammo < Fighter.#maxAmmo) {
      this.#ammo = this.#ammo + 1;
      document.getElementById('ammoCount').innerHTML = `AMMO: ${this.#ammo}`;
    }

    this.#rocketCounter = this.#rocketCounter + 0.1;
    if (Number.isInteger(Number(this.#rocketCounter.toFixed(1)))) {
      if(this.#rocketsPayload + 1 <= Fighter.#maxRocketPayload) {
        this.#rocketsPayload = this.#rocketsPayload + 1
        document.getElementById('rocketCount').innerHTML = `ROCKETS: ${this.#rocketsPayload}`;
      }
    }
  }
  
  draw() {
    this.checkPoints();
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