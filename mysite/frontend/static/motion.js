
var canvas = document.getElementById("motion-js");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particles = [];
var num_particles = 1000;

// grab random colour
function GetRandomColor() {
    var r = 0, g = 0, b = 0;
    while (r < 100 && g < 100 && b < 100)
    {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    }

    return "rgb(" + r + "," + g + ","  + b + ")";
}
// particle start at random position, velocity, colour
var Particle = function () {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.vx = 3 * Math.random() - 1;
    this.vy = 3 * Math.random() - 1;
    this.Color = GetRandomColor();
	//this.count = 0;
}
// draw the particle
Particle.prototype.Draw = function (ctx) {
    ctx.fillStyle = this.Color;
    ctx.fillRect(this.x, this.y, 2, 2);
	//ctx.lineTo(this.x, this.y);
	//ctx.stroke();
}
// updates position and bounces
Particle.prototype.Update = function () {
    //this.vx = 0.5*(4 * Math.random() - 2);
    //this.vy = 1*(4 * Math.random() - 2);	
    this.x += this.vx;
    this.y += this.vy;
	//this.count += 1;
	
    if (this.x<0 || this.x > canvas.width)
        this.vx = -this.vx;
 
    if (this.y < 0 || this.y > canvas.height)
        this.vy = -this.vy;
	
	//if (Number.isInteger(this.count / 100))
	//	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
/*
// updates position and bounces
Particle.prototype.Update = function (ctx) {
	ctx.beginPath();
	ctx.moveTo(this.x, this.y);
	
    this.vx = 4 * Math.random() - 2;
    this.vy = 4 * Math.random() - 2;	
    this.x += this.vx;
    this.y += this.vy;
	//this.count += 1;
	
    if (this.x<0 || this.x > canvas.width)
        this.vx = -this.vx;
 
    if (this.y < 0 || this.y > canvas.height)
        this.vy = -this.vy;
	
	//if (Number.isInteger(this.count / 100))
	//	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
*/
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < num_particles; i++) {
        particles[i].Update();
        particles[i].Draw(ctx);
    }
    requestAnimationFrame(loop);
}
// create particles
for (var i = 0; i < num_particles; i++)
    particles.push(new Particle());
loop();
