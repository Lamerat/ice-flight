// const q = 300;
// const w = 500;
// ctx.lineWidth = 0.5;

// // Body
// ctx.beginPath();
// ctx.fillStyle = 'black';
// ctx.moveTo(q + 17, w - 14);
// ctx.lineTo(q + 43, w - 14);
// ctx.lineTo(q + 55, w - 24);
// ctx.lineTo(q + 58, w - 34);
// ctx.lineTo(q + 52, w - 34);
// ctx.lineTo(q + 40, w - 19);
// ctx.lineTo(q + 17, w - 20);
// ctx.lineTo(q + 2, w - 24);
// ctx.lineTo(q, w - 27);
// ctx.lineTo(q - 5, w - 27);
// ctx.lineTo(q - 5, w - 29);
// ctx.lineTo(q - 5, w - 32);
// ctx.lineTo(q - 7, w - 32);
// ctx.lineTo(q - 7, w - 29);
// ctx.lineTo(q - 6, w - 29);
// ctx.lineTo(q - 6, w - 27);
// ctx.lineTo(q - 12, w - 27);
// ctx.lineTo(q - 14, w - 25);
// ctx.bezierCurveTo(q - 18, w - 25, q - 27, w - 23, q - 37, w - 16);
// ctx.bezierCurveTo(q - 40, w - 10, q - 29, w - 5, q - 28, w - 5);
// ctx.bezierCurveTo(q - 20, w - 3, q - 11, w - 3, q - 5, w - 3);
// ctx.bezierCurveTo(q + 4, w - 3, q + 10, w - 9, q + 17, w - 14);
// // ctx.stroke();
// ctx.fill();

// // Propeller
// ctx.beginPath();
// ctx.moveTo(q - 5, w - 30);
// ctx.lineTo(q + 46, w - 31);
// ctx.lineTo(q - 5, w - 32);
// ctx.lineTo(q - 5, w - 30);
// ctx.moveTo(q - 7, w - 30);
// ctx.lineTo(q - 58, w - 31);
// ctx.lineTo(q - 7, w - 32);
// ctx.lineTo(q - 7, w - 30);
// ctx.fill();

// // Tail
// ctx.beginPath();
// ctx.arc(q + 50, w - 17, 8.5, 0, 2 * Math.PI);
// ctx.fill();
// ctx.fillStyle = '#006994';
// ctx.beginPath();
// ctx.arc(q + 50, w - 17, 5, 0, 2 * Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.fillStyle = 'black';
// ctx.arc(q + 50, w - 17, 1.5, 0, 2 * Math.PI);
// ctx.fill();
// ctx.moveTo(q + 50, w - 17);
// ctx.lineTo(q + 55, w - 17);
// ctx.moveTo(q + 50, w - 17);
// ctx.lineTo(q + 48, w - 13);
// ctx.moveTo(q + 50, w - 17);
// ctx.lineTo(q + 48, w - 22);
// ctx.stroke();

// // Windows
// ctx.fillStyle = '#006994';
// ctx.beginPath();
// ctx.moveTo(q - 11, w - 14);
// ctx.lineTo(q - 11, w - 19);
// ctx.lineTo(q - 19, w - 20);
// ctx.lineTo(q - 19, w - 13);
// ctx.lineTo(q - 11, w - 14);
// ctx.moveTo(q - 21, w - 13);
// ctx.lineTo(q - 21, w - 20);
// ctx.lineTo(q - 24, w - 20);
// ctx.bezierCurveTo(q - 26, w - 19, q - 28, w - 16, q - 29, w - 13);
// ctx.lineTo(q - 21, w - 13);
// ctx.moveTo(q - 31, w - 13);
// ctx.bezierCurveTo(q - 26, w - 19, q - 28, w - 18, q - 25, w - 20);
// ctx.lineTo(q - 27, w - 20);
// ctx.bezierCurveTo(q - 30, w - 19, q - 37, w - 15, q - 36, w - 13);
// ctx.lineTo(q - 31, w - 13);
// ctx.fill();

// // Ski
// ctx.beginPath();
// ctx.moveTo(q - 23, w - 5);
// ctx.lineTo(q - 23, w);
// ctx.moveTo(q - 4, w - 5);
// ctx.lineTo(q - 4, w);
// ctx.stroke();
// ctx.lineWidth = 1;
// ctx.beginPath();
// ctx.moveTo(q + 4, w);
// ctx.lineTo(q - 23, w);
// ctx.bezierCurveTo(q - 28, w, q - 30, w - 1, q - 32, w - 4);
// ctx.stroke();
// ctx.lineWidth = 0.5;

const q = 300;
const w = 500;
ctx.lineWidth = 0.5;

// Body
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.moveTo(q - 17, w - 14);
ctx.lineTo(q - 43, w - 14);
ctx.lineTo(q - 55, w - 24);
ctx.lineTo(q - 58, w - 34);
ctx.lineTo(q - 52, w - 34);
ctx.lineTo(q - 40, w - 19);
ctx.lineTo(q - 17, w - 20);
ctx.lineTo(q - 2, w - 24);
ctx.lineTo(q, w - 27);
ctx.lineTo(q + 5, w - 27);
ctx.lineTo(q + 5, w - 29);
ctx.lineTo(q + 5, w - 32);
ctx.lineTo(q + 7, w - 32);
ctx.lineTo(q + 7, w - 29);
ctx.lineTo(q + 6, w - 29);
ctx.lineTo(q + 6, w - 27);
ctx.lineTo(q + 12, w - 27);
ctx.lineTo(q + 14, w - 25);
ctx.bezierCurveTo(q + 18, w - 25, q + 27, w - 23, q + 37, w - 16);
ctx.bezierCurveTo(q + 40, w - 10, q + 29, w - 5, q + 28, w - 5);
ctx.bezierCurveTo(q + 20, w - 3, q + 11, w - 3, q + 5, w - 3);
ctx.bezierCurveTo(q - 4, w - 3, q - 10, w - 9, q - 17, w - 14);
// ctx.stroke();
ctx.fill();

// Propeller
ctx.beginPath();
ctx.moveTo(q + 5, w - 30);
ctx.lineTo(q - 46, w - 31);
ctx.lineTo(q + 5, w - 32);
ctx.lineTo(q + 5, w - 30);
ctx.moveTo(q + 7, w - 30);
ctx.lineTo(q + 58, w - 31);
ctx.lineTo(q + 7, w - 32);
ctx.lineTo(q + 7, w - 30);
ctx.fill();

// Tail
ctx.beginPath();
ctx.arc(q - 50, w - 17, 8.5, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = '#006994';
ctx.beginPath();
ctx.arc(q - 50, w - 17, 5, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(q - 50, w - 17, 1.5, 0, 2 * Math.PI);
ctx.fill();
ctx.moveTo(q - 50, w - 17);
ctx.lineTo(q - 55, w - 17);
ctx.moveTo(q - 50, w - 17);
ctx.lineTo(q - 48, w - 13);
ctx.moveTo(q - 50, w - 17);
ctx.lineTo(q - 48, w - 22);
ctx.stroke();

// Windows
ctx.fillStyle = '#006994';
ctx.beginPath();
ctx.moveTo(q + 11, w - 14);
ctx.lineTo(q + 11, w - 19);
ctx.lineTo(q + 19, w - 20);
ctx.lineTo(q + 19, w - 13);
ctx.lineTo(q + 11, w - 14);
ctx.moveTo(q + 21, w - 13);
ctx.lineTo(q + 21, w - 20);
ctx.lineTo(q + 24, w - 20);
ctx.bezierCurveTo(q + 26, w - 19, q + 28, w - 16, q + 29, w - 13);
ctx.lineTo(q + 21, w - 13);
ctx.moveTo(q + 31, w - 13);
ctx.bezierCurveTo(q + 26, w - 19, q + 28, w - 18, q + 25, w - 20);
ctx.lineTo(q + 27, w - 20);
ctx.bezierCurveTo(q + 30, w - 19, q + 37, w - 15, q + 36, w - 13);
ctx.lineTo(q + 31, w - 13);
ctx.fill();

// Ski
ctx.beginPath();
ctx.moveTo(q + 23, w - 5);
ctx.lineTo(q + 23, w);
ctx.moveTo(q + 4, w - 5);
ctx.lineTo(q + 4, w);
ctx.stroke();
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(q - 4, w);
ctx.lineTo(q + 23, w);
ctx.bezierCurveTo(q + 28, w, q + 30, w - 1, q + 32, w - 4);
ctx.stroke();
ctx.lineWidth = 0.5;