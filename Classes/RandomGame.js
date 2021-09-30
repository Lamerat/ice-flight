import { Game } from './Game.js';
import { Helicopter } from './Helicopter.js';
import { Iceberg } from './Iceberg.js';
import { Ship } from './Ship.js';
import { Supplies } from './Supplies.js';

export class RandomGame {
  /**
   * @type {Game}
   */
  #game;
  #ctx;
  #canvasWidth;
  #typeObjects = {
    ICEBERG: 1,
    SHIP: 2,
    HELICOPTER: 3,
    SUPPLIES: 4,
  }


  constructor(game, ctx) {
    this.#game = game;
    this.#ctx = ctx;
    this.#canvasWidth = ctx.canvas.width;
  }

  randomGenerator() {
    return Math.floor(Math.random() * 4) + 1;
  }


  randomCoordinate(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  generator() {
    const type = this.randomGenerator();
    let x;
    switch (type) {
      case this.#typeObjects.ICEBERG:
        x = this.randomCoordinate(60, this.#canvasWidth - 60);
        this.#game.addIceberg(new Iceberg(this.#ctx, x, 0));
        break;
      case this.#typeObjects.SHIP:
        x = this.randomCoordinate(100, this.#canvasWidth - 100);
        this.#game.addShip(new Ship(this.#ctx, x, 0))
        break;
      case this.#typeObjects.HELICOPTER:
        x = this.randomCoordinate(80, this.#canvasWidth - 80);
        this.#game.addHelicopter(new Helicopter(this.#ctx, x, 0));
        break;
      case this.#typeObjects.SUPPLIES:
        x = this.randomCoordinate(40, this.#canvasWidth - 40);
        this.#game.addSupplies(new Supplies(this.#ctx, x, 0));
        break;
      default:
        break;
    }
  }
}