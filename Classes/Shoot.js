export class Shoot {
  static #counter = 0
  static #lineWidth = 1.5;
  #ctx;
  #posX;
  #posY;
  #id;

  constructor(ctx, x, y) {
    Shoot.#counter = Shoot.#counter + 1;
    this.#ctx = ctx;
    this.#posX = x;
    this.#posY = y;
    this.#id = Shoot.#counter;
  }

  get posX() {
    return this.#posX;
  }

  get posY() {
    return this.#posY;
  }

  get id() {
    return this.#id;
  }

  draw() {
    const ctx = this.#ctx;
    const x = this.#posX;
    let y = this.#posY;

    ctx.beginPath();
    ctx.lineWidth = Shoot.#lineWidth;
    ctx.strokeStyle = 'yellow';
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 10);
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    this.#posY = this.#posY - 10;
  }
}