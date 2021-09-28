import { gameActions } from '../common/game-actions.js';
import { Fighter } from './Fighter.js';
import { Iceberg } from './Iceberg.js';
import { Ship } from './Ship.js';

export class Game {
  static #singleton = false;
  static #width;
  static #height;
  static #fighter;
  static #gameActions = { left: false, right: false }
  #icebergs = [];
  #ships = [];
  #context;

  constructor (context) {
    if (Game.#singleton) {
      return;
    }
    this.#context = context;
    Game.#height = this.#context.canvas.height;
    Game.#width = this.#context.canvas.width;
    Game.#singleton = true;
    
    Game.#fighter = new Fighter(this.#context, Game.#width / 2, Game.#height - 5, Game.#width);

    this.#ships.push(new Ship(this.#context, 500, 300));
    this.#icebergs.push(new Iceberg(this.#context, 300, 300));
    this.#icebergs.push(new Iceberg(this.#context, 100, 120));
    this.#icebergs.push(new Iceberg(this.#context, 500, 120));
  }

  actions(action) {
    
    switch (action) {
      case gameActions.LEFT_START:
        Game.#gameActions.left = true;
        break;
      case gameActions.LEFT_STOP:
        Game.#gameActions.left = false;
        break;
      case gameActions.RIGHT_START:
        Game.#gameActions.right = true;
        break;
      case gameActions.RIGHT_STOP:
        Game.#gameActions.right = false;
        break;
      case gameActions.CANNON_SHOOT:
        Game.#fighter.cannonShoot();
        break;
      default:
        break;
    }
  }

  frame() {
    this.#context.clearRect(0, 0, Game.#width, Game.#height);
    this.draw();
    this.update();
  }

  update() {
    this.#icebergs.forEach(iceberg => {
      iceberg.update();
      if (iceberg.yPos >= Game.#height - Iceberg.endPoint) {
        this.#icebergs = this.#icebergs.filter(x => x.id !== iceberg.id)
      }
    });

    this.#ships.forEach(ship => {
      ship.update();
    })

    Game.#fighter.shoots.forEach(shoot => {
      shoot.draw();
      shoot.update();
      // check icebergs
      this.#icebergs.forEach(iceberg => {
        const icebergCoordinates = iceberg.coordinates();
        if (iceberg.yPos >= shoot.posY && icebergCoordinates.left <= shoot.posX && icebergCoordinates.right >= shoot.posX) {
          Game.#fighter.shoots = Game.#fighter.shoots.filter(x => x.id !== shoot.id);
        }
      });
    })

    if (Game.#gameActions.left) {
      Game.#fighter.moveLeft();
    }

    if (Game.#gameActions.right) {
      Game.#fighter.moveRight();
    }
  }

  draw() {
    this.#icebergs.forEach(iceberg => iceberg.draw());
    this.#ships.forEach(ship => ship.draw());
    Game.#fighter.draw();
  }
}