export class GameObject {
  static #counter = 0;
  #canvasWidth;
  #id = 0;
  #ctx;
  #xPos;
  #yPos;

  constructor(context, xPosition, yPosition) {
    this.#ctx = context;
    this.#xPos = xPosition;
    this.#yPos = yPosition;
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

  draw() {}

  update() {
    this.#yPos = this.#yPos + 1;
  }
}