export class GameObject {
  static #counter = 0;
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

  draw() {}

  update() {
    this.#yPos = this.#yPos + 1;
  }
}