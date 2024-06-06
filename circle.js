const canvas = document.getElementById('circle');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(100, 50, 50, Math.PI, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = 'teal';
ctx.fill();