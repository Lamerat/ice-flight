import { Game } from './Classes/Game.js';
import { RandomGame } from './Classes/RandomGame.js';
import { gameActions } from './common/game-actions.js';

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const game = new Game(context);
const randomGame = new RandomGame(game, context);


document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    game.actions(gameActions.LEFT_START);
  }

  if (e.key === 'ArrowRight') {
    game.actions(gameActions.RIGHT_START);
  }
});

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

  if (e.key === 'Shift') {
    game.actions(gameActions.ROCKET_SHOOT);
  }

  if (e.key === 'ArrowUp') {
    game.actions(gameActions.SPEED_UP);
  }

  if (e.key === 'ArrowDown') {
    game.actions(gameActions.SPEED_DOWN);
  }
});


setInterval (() => randomGame.generator(), 1800);

game.interval = setInterval(() => game.frame(), 1000.0/60.0);