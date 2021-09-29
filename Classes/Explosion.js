import { GameObject } from './GameObject.js';

export class Explosion extends GameObject {
  static primaryColor = 'red';
  static secondaryColor = 'orange';

  static degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
  }

  draw() {
    const ctx = this.ctx;
    const x = this.xPos;
    const y = this.yPos;

    let z;

    let even = 2;
    for (let i = 0; i <= 360; i = i + 15) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(x,y);
      if (Number.isInteger(even/2)) {
        z = Math.floor(Math.random() * (35 - 15) + 15);
        ctx.strokeStyle = Explosion.primaryColor;;
        ctx.lineTo(x + z * Math.cos(Explosion.degreesToRadians(i)), y + z * Math.sin(Explosion.degreesToRadians(i)));
      } else {
        z = Math.floor(Math.random() * (25 - 5) + 10);
        ctx.strokeStyle = Explosion.secondaryColor;
        ctx.lineTo(x + z * Math.cos(Explosion.degreesToRadians(i)), y + z * Math.sin(Explosion.degreesToRadians(i)));
      }
      even = even + 1;
      ctx.closePath();
      ctx.stroke();
    }
  }
}