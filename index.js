import { Game } from './Classes/Game.js';
import { gameActions } from './common/game-actions.js';
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const game = new Game(context);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    game.actions(gameActions.LEFT_START);
  }

  if (e.key === 'ArrowRight') {
    game.actions(gameActions.RIGHT_START);
  }

  

  if (e.key === 'Control') {
    game.actions(gameActions.ROCKET_SHOOT);
  }
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') {
    game.actions(gameActions.LEFT_STOP);
  }

  if (e.key === 'ArrowRight') {
    game.actions(gameActions.RIGHT_STOP);
  }

  if (e.key === ' ') {
    game.actions(gameActions.CANNON_SHOOT);
  }
})


setInterval(() => game.frame(), 1000.0/60.0);