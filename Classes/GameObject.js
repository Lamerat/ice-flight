export class GameObject {
  static #counter = 0;
  #canvasWidth;
  #id = 0;
  #ctx;
  #xPos;
  #yPos;
  #health;

  constructor(context, xPosition, yPosition, health) {
    this.#ctx = context;
    this.#xPos = xPosition;
    this.#yPos = yPosition;
    this.#health = health;
    GameObject.#counter = GameObject.#counter + 1;
    this.#id = GameObject.#counter;
    this.#canvasWidth = context.canvas.width;
  }

  get ctx() {
    return this.#ctx;
  }

  get xPos() {
    return this.#xPos;
  }

  get yPos() {
    return this.#yPos;
  }

  get id() {
    return this.#id;
  }

  get health() {
    return this.#health;
  }

  get canvasWidth() {
    return this.#canvasWidth;
  }

  set yPos(value) {
    if (isNaN(value)) {
      throw new Error ('Invalid value, must be number');
    }
    this.#yPos = value;
  }

  set xPos(value) {
    if (isNaN(value)) {
      throw new Error ('Invalid value, must be number');
    }
    this.#xPos = value;
  }

  set health(value) {
    if (isNaN(value)) {
      throw new Error ('Invalid value, must be number');
    }
    this.#health = value;
  }

  draw() {}

  update(speed) {
    this.#yPos = this.#yPos + speed;
  }
}