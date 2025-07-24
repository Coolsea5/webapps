var canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d")

// fill color of rectangle
ctx.fillStyle = "green"
//draw rectangle, and fill it with "green" color
ctx.fillRect(100,180,200,300)
ctx.fillStyle = "white"
//draw rectangle and fill it with "white" color
ctx.fillRect(300,180,200,300)
ctx.fillStyle = "red"
//draw rectangle and fill it with "red" color
ctx.fillRect(500,180,200,300)