var step = 20;
var cols = 0;
var rows = 0;
var snake;
var food;

function keyPressed() {
	if(keyCode == LEFT_ARROW)
		snake.changeDir("LEFT");
	if(keyCode == RIGHT_ARROW)
		snake.changeDir("RIGHT");
	if(keyCode == UP_ARROW)
		snake.changeDir("UP");
	if(keyCode == DOWN_ARROW)
		snake.changeDir("DOWN");
}

function setup() {
	createCanvas(600, 600);
	cols = width / step;
	rows = height / step;
	snake = new Snake(0,3);
	food = new Food(snake);
	console.log("setup");
	setInterval(draw2, 100);
}

var play = true;
var gameOver = false;

function draw2() {
	play = !play;
	
	if(play && !gameOver) {
		if(snake.isGameOver() && !snake.eats(food)) {
			gameOver = true;
			snake.show(255, 0, 0);
			noLoop();
			return;
		}
		
		if(snake.eats(food)) {
			snake.enlarge();
			food.change(snake);
		}
		snake.move();
	}
}

function draw() {
	background(220);
	drawGrid();
	if(gameOver)
		snake.show(255,0,0);
	else
		snake.show(20,20,20);
	food.show();
	
}

function drawGrid() {
	
	stroke(200);
		
	for(let i = 0; i < cols; i++) {
		line(i * step, 0, i * step, height);
	}
	for(let i = 0; i < rows; i++) {
		line(0, i * step, width, i * step);
	}
}