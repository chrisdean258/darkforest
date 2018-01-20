var canvas;
var person;
var maze;

var blockSize = 20;

function setup()
{
	canvas = createCanvas(boardWidth * blockSize, boardHeight * blockSize);
	canvas.parent("#canvasparentdiv");

	background(0,0,0);

	person = new block(3, 4, blockSize);
	person.show();

	maze = getMaze();
	for(var i = 0; i < maze.length; i++)
	{
		maze[i].show();
	}

}

function draw()
{

}

function getMaze()
{
	var i, j;
	var rtn = [];
	for(i = 0; i < maze_xs.length; i++)
	{
		for(j = 0; j < maze_ys.length; j++)
		{
			rtn.push(new block(maze_xs[i], maze_ys[i], blockSize, "#888888"));
		}
	}
	return rtn;
}
