const f = 400;
const g = 400;


ctx.beginPath();
ctx.fillStyle = 'white';
ctx.moveTo(f - 2, g);
ctx.lineTo(f + 2, g);
ctx.lineTo(f + 2, g - 28);
ctx.lineTo(f, g - 32);
ctx.lineTo(f - 2, g - 28);
ctx.lineTo(f - 2, g);

ctx.moveTo(f - 2, g - 2);
ctx.lineTo(f + 5, g - 2);
ctx.lineTo(f + 5, g - 5);
ctx.lineTo(f + 4, g - 7);
ctx.lineTo(f + 2, g - 7);
ctx.lineTo(f + 2, g - 2);

ctx.moveTo(f + 2, g - 2);
ctx.lineTo(f - 5, g - 2);
ctx.lineTo(f - 5, g - 5);
ctx.lineTo(f - 4, g - 7);
ctx.lineTo(f - 2, g - 7);
ctx.lineTo(f - 2, g - 2);

ctx.moveTo(f, g - 2);
ctx.lineTo(f, g - 7);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(f - 2, g - 28);
ctx.lineTo(f + 2, g - 28);
ctx.lineTo(f, g - 32);
ctx.lineTo(f - 2, g - 28);
ctx.fill();
ctx.stroke();