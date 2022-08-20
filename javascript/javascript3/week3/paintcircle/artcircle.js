/* var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = '#0077aa';
ctx.fill()
ctx.stroke();  */

/* const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 50;

context.beginPath();
context.fillStyle = '#0077aa';
context.strokeStyle = '#0077aa47';
context.lineWidth = 2;

context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fill();
context.stroke(); */

//Class creation
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
//const centerX = canvas.width / 2;
//const centerY = canvas.height / 2;
//const radius = 50;

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {

        this.x = x;
        this.y = y;

        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {

        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor);
        context.fillStyle = this.fillColor
        context.fill();

    }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
//c1.draw();
const c2 = new Circle(80, 80, 20, 0, 2 * Math.PI, "#0077aa");
//c2.draw();

// Now lets make art!
//Every 100ms create a new circle instance and draw that to the canvas.
function creatCircle() {
    const strokeStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;

    const c = new Circle(Math.floor(Math.random() * (100)), Math.floor(Math.random() * (100)), Math.floor(Math.random() * (50) + 1), 0, 2 * Math.PI, strokeStyle);

    c.draw()


}
setInterval(creatCircle, 100)

//canvas to have the same width and height of the screen?
function creatCircleScreenSize() {
    const strokeStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = new Circle(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), Math.floor(Math.random() * (50) + 1), 0, 2 * Math.PI, strokeStyle);

    c.draw()


}
//setInterval(creatCircleScreenSize, 100)



