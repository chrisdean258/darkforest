var canvas;
var person;
var board;

var blockSize = 20;

function preload()
{
	board = [];
	for(var i = 0; i < boardHeight; i++) board.push([]);
	person = new Person(0, boardHeight-1, blockSize, "friend2.png");
}

function setup()
{
	canvas = createCanvas(boardWidth * blockSize, boardHeight * blockSize);
	canvas.parent("#canvasparentdiv");

	background(0,0,0);


	for(var i = 0; i < board.length; i++)
	{
		for(var j = 0; j < boardWidth; j++)
		{
			board[i].push(new Block(i, j, blockSize));
		}
	}

	for(var i = 0; i < maze_xs.length; i++)
	{
		board[maze_xs[i]][maze_ys[i]].color = "#888888";
	}

	for(var i = 0; i < board.length; i++)
	{
		for(var j = 0; j < boardWidth; j++)
		{
			board[i][j].show();
		}
	}

	board[person.x][person.y-1].visible = true;
	board[person.x+1][person.y-1].visible = true;
	board[person.x+1][person.y].visible = true;
	board[person.x][person.y].visible = true;

	board[boardWidth-1][0].color = "#355c3d";
	board[boardWidth-1][0].visible = true;

	person.show();
}

function draw()
{
	for(var i = 0; i < board.length; i++)
	{
		for(var j = 0; j < boardWidth; j++)
		{
			board[i][j].show();
		}
	}

	person.show();
}
