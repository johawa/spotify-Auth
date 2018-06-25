let covers = []
let wMiddle = null;
let hMiddle = null;
let coverWidth = 100;
let marginLeftRight = 20;
var s = 0.0;
var a = 0.0;
let move = 0;




var img;

function preload() {
	img = loadImage("https://raw.githubusercontent.com/timebasher/spotify-Auth/master/assets/picutre.png");
}



function setup() {
	angleMode(RADIANS);
	createCanvas(windowWidth, 274, WEBGL);
	rectMode(CENTER);


}



function draw() {
	hMiddle = height / 2;
	wMiddle = width / 2;
	a += 0.05;
	s = sin(a);

	//console.log(s)
	if (s>0) {
		move += 2;
		
	}
	else {
		return;
	}

	//console.log(move)

	

	background(26, 26, 27);
	//background(255)
	stroke(255)
	
	translate(0 - move, 0);
/* 	for (i = 0; i < img.length; i++) {
		texture(img)
		plane(200);
	} */
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
	translate(230, 0);
	texture(img)
	plane(200);
}


/* function windowResized(){
	resizeCanvas(windowWidth, 274);
  } */
