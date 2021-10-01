import { gameActions } from '../common/game-actions.js';
import { Explosion } from './Explosion.js';
import { Fighter } from './Fighter.js';
import { Helicopter } from './Helicopter.js';
import { Iceberg } from './Iceberg.js';
import { Ship } from './Ship.js';
import { Supplies } from './Supplies.js';

export class Game {
  static #singleton = false;
  static #maxGameSpeed = 5;
  static #gameSpeed = 2;
  static #width;
  static #height;
  static #fighter;
  static #gameActions = { left: false, right: false }
  static #crash;
  static #cannonDamage = 1;
  static #rocketDamage = 10;
  static #explosionDuration = 1000;
  #icebergs = [];
  #ships = [];
  #helicopters = [];
  #explosions = [];
  #supplies = [];
  #context;
  interval;

  constructor (context) {
    if (Game.#singleton) {
      return;
    }
    this.#context = context;
    Game.#height = this.#context.canvas.height;
    Game.#width = this.#context.canvas.width;
    Game.#singleton = true;
    Game.#fighter = new Fighter(this.#context, Game.#width / 2, Game.#height - 5, Game.#width);
  }

  addIceberg(value) {
    if (value instanceof Iceberg) {
      this.#icebergs.push(value);
    }
  }

  addShip(value) {
    if (value instanceof Ship) {
      this.#ships.push(value);
    }
  }

  addHelicopter(value) {
    if (value instanceof Helicopter) {
      this.#helicopters.push(value);
    }
  }

  addSupplies(value) {
    if (value instanceof Supplies) {
      this.#supplies.push(value);
    }
  }

  get gameSpeed() {
    return Game.#gameSpeed;
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
      case gameActions.SPEED_UP:
        if (Game.#gameSpeed < Game.#maxGameSpeed) {
          Game.#gameSpeed = Game.#gameSpeed + 1;
        }
        break;
      case gameActions.SPEED_DOWN:
      if (Game.#gameSpeed > 1) {
        Game.#gameSpeed = Game.#gameSpeed - 1;
      }
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
      iceberg.update(Game.#gameSpeed);
      if (iceberg.yPos >= Game.#height - Iceberg.endPoint) {
        this.#icebergs = this.#icebergs.filter(x => x.id !== iceberg.id)
      }

      if(this.checkCollision(iceberg.collisionShape())) {
        this.playerCrash();
      }
    });

    this.#ships.forEach(ship => {
      ship.update(Game.#gameSpeed);
      if (ship.yPos >= Game.#height + Ship.shipHigh) {
        this.#ships = this.#ships.filter(x => x.id !== ship.id);
      }

      if(this.checkCollision(ship.collisionShape())) {
        this.playerCrash();
      }
    });

    this.#helicopters.forEach(helicopter => {
      helicopter.update(Game.#gameSpeed);
      if (helicopter.yPos >= Game.#height + Helicopter.helicopterHigh) {
        this.#helicopters = this.#helicopters.filter(x => x.id !== helicopter.id);
      }

      if(this.checkCollision(helicopter.collisionShape())) {
        this.playerCrash();
      }
    });

    this.#supplies.forEach(supp => {
      supp.update(Game.#gameSpeed);
      if (supp.yPos >= Game.#height + Supplies.fuelHigh) {
        this.#supplies = this.#supplies.filter(x => x.id !== supp.id);
      }

      if(this.checkCollision(supp.collisionShape())) {
        Game.#fighter.updateSupplies(Game.#gameSpeed);
      }
    });

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
      // check ships
      this.#ships.forEach(ship => {
        const shipCoordinates = ship.coordinates();
        if (ship.yPos >= shoot.posY && shipCoordinates.left <= shoot.posX && shipCoordinates.right >= shoot.posX) {
          Game.#fighter.shoots = Game.#fighter.shoots.filter(x => x.id !== shoot.id);
          ship.health = ship.health - Game.#cannonDamage;
          if (ship.health <= 0) {
            this.#ships = this.#ships.filter(x => x.id !== ship.id);
            this.makeExplosion(ship.xPos, ship.yPos);
            this.makeExplosion(ship.xPos + 50, ship.yPos);
            this.makeExplosion(ship.xPos - 50, ship.yPos);
          }
        }
      });

      // check helicopters
      this.#helicopters.forEach(helicopter => {
        const helicopterCoordinates = helicopter.coordinates();
        if (helicopter.yPos >= shoot.posY && helicopterCoordinates.left <= shoot.posX && helicopterCoordinates.right >= shoot.posX) {
          Game.#fighter.shoots = Game.#fighter.shoots.filter(x => x.id !== shoot.id);
          helicopter.health = helicopter.health - Game.#cannonDamage;
          if (helicopter.health <= 0) {
            this.#helicopters = this.#helicopters.filter(x => x.id !== helicopter.id);
            this.makeExplosion(helicopter.xPos, helicopter.yPos);
          }
        }
      });

      // check supplies
      this.#supplies.forEach(supp => {
        const suppliesCoordinates = supp.coordinates();
        if (supp.yPos >= shoot.posY && suppliesCoordinates.left <= shoot.posX && suppliesCoordinates.right >= shoot.posX) {
          Game.#fighter.shoots = Game.#fighter.shoots.filter(x => x.id !== shoot.id);
          supp.health = supp.health - Game.#cannonDamage;
          if (supp.health <= 0) {
            this.#supplies = this.#supplies.filter(x => x.id !== supp.id);
            this.makeExplosion(supp.xPos, supp.yPos - Supplies.fuelHigh / 2);
          }
        }
      });
    });


    Game.#fighter.rockets.forEach(rocket => {
      rocket.update();
      if (rocket.yPos <= 0) {
        Game.#fighter.rockets = Game.#fighter.rockets.filter(x => x.id !== rocket.id);
      }

      // check icebergs
      this.#icebergs.forEach(iceberg => {
        const icebergCoordinates = iceberg.coordinates();
        if (iceberg.yPos >= rocket.yPos - 16 && icebergCoordinates.left <= rocket.xPos && icebergCoordinates.right >= rocket.xPos) {
          Game.#fighter.rockets = Game.#fighter.rockets.filter(x => x.id !== rocket.id);
          this.makeExplosion(rocket.xPos, rocket.yPos - 16);
        }
      });

      // check ships
      this.#ships.forEach(ship => {
        const shipCoordinates = ship.coordinates();
        if (ship.yPos >= rocket.yPos - 30 && shipCoordinates.left <= rocket.xPos && shipCoordinates.right >= rocket.xPos) {
          Game.#fighter.rockets = Game.#fighter.rockets.filter(x => x.id !== rocket.id);
          ship.health = ship.health - Game.#rocketDamage;
          if (ship.health <= 0) {
            this.#ships = this.#ships.filter(x => x.id !== ship.id);
            this.makeExplosion(ship.xPos, ship.yPos);
            this.makeExplosion(ship.xPos + 50, ship.yPos);
            this.makeExplosion(ship.xPos - 50, ship.yPos);
          }
        }
      });

      // check helicopters
      this.#helicopters.forEach(helicopter => {
        const helicopterCoordinates = helicopter.coordinates();
        if (helicopter.yPos >= rocket.yPos - 30 && helicopterCoordinates.left <= rocket.xPos && helicopterCoordinates.right >= rocket.xPos) {
          Game.#fighter.rockets = Game.#fighter.rockets.filter(x => x.id !== rocket.id);
          helicopter.health = helicopter.health - Game.#rocketDamage;
          if (helicopter.health <= 0) {
            this.#helicopters = this.#helicopters.filter(x => x.id !== helicopter.id);
            this.makeExplosion(helicopter.xPos, helicopter.yPos);
          }
        }
      });

      // check supplies
      this.#supplies.forEach(supp => {
        const suppliesCoordinates = supp.coordinates();
        if (supp.yPos >= rocket.yPos - 30 && suppliesCoordinates.left <= rocket.xPos && suppliesCoordinates.right >= rocket.xPos) {
          Game.#fighter.rockets = Game.#fighter.rockets.filter(x => x.id !== rocket.id);
          supp.health = supp.health - Game.#rocketDamage;
          if (supp.health <= 0) {
            this.#supplies = this.#supplies.filter(x => x.id !== supp.id);
            this.makeExplosion(supp.xPos, supp.yPos - Supplies.fuelHigh / 2);
          }
        }
      });
    });

    if (Game.#gameActions.left && !Game.#crash) {
      Game.#fighter.moveLeft();
    }

    if (Game.#gameActions.right && !Game.#crash) {
      Game.#fighter.moveRight();
    }

    if(Game.#fighter.updateFuel(Game.#gameSpeed) <= 0) {
      this.playerCrash();
    }
  }

  draw() {
    this.#icebergs.forEach(iceberg => iceberg.draw());
    this.#ships.forEach(ship => ship.draw());
    this.#helicopters.forEach(helicopter => helicopter.draw());
    this.#supplies.forEach(sup => sup.draw());
    this.#explosions.forEach(explosion => explosion.draw());

    Game.#fighter.rockets.forEach(rocket => {
      rocket.draw();
    });
    if (!Game.#crash) {
      Game.#fighter.draw();
    }
  }

  playerCrash() {
    this.makeExplosion(Game.#fighter.xPos, Game.#height - 50);
    Game.#crash = true;
    setTimeout(() => clearInterval(this.interval), 500);
  }

  makeExplosion(x, y) {
    this.#explosions.push(new Explosion(this.#context, x, y));
    setTimeout(() => this.#explosions.shift(), Game.#explosionDuration);
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