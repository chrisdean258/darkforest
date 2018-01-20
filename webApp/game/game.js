var canvas;
var person;
var maze;

function setup()
{
	canvas = createCanvas(600, 600);
	canvas.parent("#canvasparentdiv");

	background(0,0,0);

	person = new block(100, 100, 100);
	person.show();

	maze = getMaze();

}

function draw()
{

}

function getMaze()
{

}
