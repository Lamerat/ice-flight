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

  temp;

  constructor (context) {
    if (Game.#singleton) {
      return;
    }
    this.#context = context;
    Game.#height = this.#context.canvas.height;
    Game.#width = this.#context.canvas.width;
    Game.#singleton = true;
    
    Game.#fighter = new Fighter(this.#context, Game.#width / 2, Game.#height - 5, Game.#width);

    // this.#ships.push(new Ship(this.#context, 500, 300));
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
      case gameActions.ROCKET_SHOOT:
        Game.#fighter.rocketShoot();
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

      if(this.checkCollision(iceberg.collisionShape())) {
        clearInterval(this.temp);
      }
    });

    this.#ships.forEach(ship => {
      ship.update();
    })

    Game.#fighter.shoots.forEach(shoot => {
      shoot.draw();
      shoot.update();

      if (shoot.posY <= 0) {
        Game.#fighter.shoots = Game.#fighter.shoots.filter(x => x.id !== shoot.id);
      }
      // check icebergs
      this.#icebergs.forEach(iceberg => {
        const icebergCoordinates = iceberg.coordinates();
        if (iceberg.yPos >= shoot.posY && icebergCoordinates.left <= shoot.posX && icebergCoordinates.right >= shoot.posX) {
          Game.#fighter.shoots = Game.#fighter.shoots.filter(x => x.id !== shoot.id);
        }
      });
    });


    Game.#fighter.rockets.forEach(rocket => {
      rocket.update();
      if (rocket.yPos <= 0) {
        Game.#fighter.rockets = Game.#fighter.rockets.filter(x => x.id !== rocket.id);
      }
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
    Game.#fighter.rockets.forEach(rocket => {
      rocket.draw();
    })
    Game.#fighter.draw();
  }

  /**
   * Check for collisions
   * @param {array} checkedCoordinates
   * @returns {boolean}
   */
  checkCollision = (checkedCoordinates) => {
    let collision = false;
    let next = 0;
    const checkPoints = Game.#fighter.checkPoints();

    for (let i = 0; i < checkPoints.length; i++) {
      let px = checkPoints[i][0];
      let py = checkPoints[i][1];

      for (let current = 0; current < checkedCoordinates.length; current++) {
        next = current + 1;
        if (next == checkedCoordinates.length) next = 0;

        let vc = {
          x: checkedCoordinates[current][0],
          y: checkedCoordinates[current][1],
        }

        let vn = {
          x: checkedCoordinates[next][0],
          y: checkedCoordinates[next][1],
        }
            

        if (((vc.y >= py && vn.y < py) || (vc.y < py && vn.y >= py)) &&
          (px < (vn.x - vc.x) * (py-vc.y) / (vn.y - vc.y) + vc.x)) {
          collision = !collision;
        }
      }
    }

    return collision;
  }
}