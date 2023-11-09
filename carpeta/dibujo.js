const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');


ctx.beginPath();
ctx.fillStyle = 'black'; 
ctx.moveTo(150, 200);
ctx.lineTo(20,70);
ctx.lineTo(20, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(250, 200);
ctx.lineTo(380, 70);
ctx.lineTo(380, 300);
ctx.fill();

// Draw the ellipse
ctx.beginPath();
ctx.fillStyle = "black";
ctx.ellipse(200,235, 90, 70, Math.PI / 2, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.ellipse(200, 110, 60, 70, Math.PI / 2, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.ellipse(200, 130, 60, 15, Math.PI / 1, 0, 1 * Math.PI,true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(175, 100, 12, 70, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(225, 100, 12, 70, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 130);
ctx.lineTo(190, 145);
ctx.moveTo(200, 130);
ctx.lineTo(210, 145);
ctx.moveTo(200, 130);
ctx.lineTo(210, 145);
ctx.stroke();