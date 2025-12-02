// {"P5LIVE":{"name":"2d perlin noise hydra","mod":"1762602301945"}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

H.pixelDensity(2)

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

 a.setSmooth(0.9)
a.setScale(0.7)
a.setBins[1]
a.show()

src(s0)
	.modulate(noize(() => a.fft[1] * 1))
	.rotate(() => a.fft[1] * 0.4)
	.modulate(noize(4),0.18)
	.modulate(noize(2),0.38)
	.colorama(0.1)
	.colorama(1.7)
	.saturate(1.5)
	.brightness(0.2)
	.out()

var inc = 0.01;

function setup() {
	pixelDensity(1); // fixing some weird mac shit
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	var yoff = 0;
	loadPixels();
	
	// noise settings
	noiseDetail(8, 0.5);
	
	for (var y = 0; y < height; y++) {
		var xoff = 0;
		for (var x = 0; x < width; x++) {
			var index = (x + y * width) * 4;
			var r = noise(xoff, yoff) * 255;
			pixels[index+0] = r // red
			pixels[index+1] = r // green
			pixels[index+2] = r // blue
			pixels[index+3] = 255 // alpha
			xoff += 0.01
		}
		yoff += 0.01
	}
	updatePixels();
	background(random(255), random(255), random(255), 50)
	noLoop();
}

var shade = 0

function mouseWheel() {
	if (event.delta > 0) {
		shade += 10
	} else {
		shade -= 10
	}
}
function mouseDragged() {
	noStroke();
	fill(shade, 10)
	ellipse(mouseX, mouseY, 200, 200);
	
}