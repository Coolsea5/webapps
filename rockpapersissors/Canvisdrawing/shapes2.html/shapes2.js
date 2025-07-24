var canvas = document.getElementById('myCanvas');
const context = canvas.getContext("2d")

context.beginPath()
context.fillStyle = "blue";
context.arc(90,100,50,0,2 * Math.PI);
context.fill()
context.closePath();

