
const a = 100;
const b = 300;
ctx.lineWidth = 0.5
ctx.fillStyle = '#23B5E6';

// Corpus
ctx.beginPath();
ctx.moveTo(a - 47, b - 20);
ctx.lineTo(a - 38, b - 44);
ctx.lineTo(a - 31, b - 40);
ctx.lineTo(a - 18, b - 71);
ctx.lineTo(a - 13, b - 63);
ctx.lineTo(a, b - 87);
ctx.lineTo(a + 17, b - 58);
ctx.lineTo(a + 23, b - 63);
ctx.lineTo(a + 37, b - 33);
ctx.lineTo(a + 41, b - 36);
ctx.lineTo(a + 47, b - 20);
ctx.lineTo(a + 47, b - 18);
ctx.lineTo(a + 44, b - 16);
ctx.lineTo(a + 44, b - 18);
ctx.lineTo(a + 39, b - 29);
ctx.lineTo(a + 36, b - 28);
ctx.lineTo(a + 22, b - 56);
ctx.lineTo(a + 15, b - 51);
ctx.lineTo(a, b - 78);
ctx.lineTo(a - 7, b - 47);
ctx.lineTo(a + 7, b - 22);
ctx.lineTo(a - 12, b - 37);
ctx.lineTo(a - 27, b - 20);
ctx.lineTo(a - 30, b - 18);
ctx.lineTo(a - 42, b - 15);
ctx.lineTo(a - 47, b - 20);
ctx.fill();
// ctx.stroke();

ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(a - 50, b - 17);
ctx.bezierCurveTo(a - 46, b - 17, a - 43, b - 9, a - 34, b - 16);
ctx.bezierCurveTo(a - 30, b - 18, a - 30, b - 18, a - 26, b - 16);
ctx.bezierCurveTo(a - 21, b - 12, a - 22, b - 12, a - 14, b - 16);
ctx.bezierCurveTo(a - 10, b - 18, a - 10, b - 18, a - 6, b - 16);
ctx.bezierCurveTo(a - 2, b - 12, a + 2, b - 12, a + 6, b - 16);
ctx.bezierCurveTo(a + 10, b - 18, a + 10, b - 18, a + 14, b - 16);
ctx.bezierCurveTo(a + 19, b - 12, a + 21, b - 12, a + 26, b - 16);
ctx.bezierCurveTo(a + 30, b - 18, a + 30, b - 18, a + 34, b - 16);
ctx.bezierCurveTo(a + 43, b - 9, a + 45, b - 17, a + 50, b - 17);
ctx.lineTo(a + 50, b - 21);
ctx.bezierCurveTo(a + 47, b - 21, a + 45, b - 19, a + 44, b - 18);
ctx.lineTo(a + 39, b - 29);
ctx.lineTo(a + 36, b - 27);
ctx.lineTo(a + 22, b - 56);
ctx.lineTo(a + 15, b - 51);
ctx.lineTo(a, b - 78);
ctx.lineTo(a - 7, b - 47);
ctx.lineTo(a + 7, b - 22);
ctx.lineTo(a - 12, b - 37);
ctx.lineTo(a - 27, b - 20);
ctx.bezierCurveTo(a - 33, b - 23, a - 36, b - 16, a - 40, b - 16);
ctx.bezierCurveTo(a - 44, b - 16, a - 46, b - 20, a - 50, b - 21);
ctx.lineTo(a - 50, b - 17);
ctx.fill();
// ctx.stroke();
ctx.closePath();