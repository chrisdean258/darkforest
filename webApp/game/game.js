var canvas;
var person;
var board;
var start;

var blockSize = 600/boardHeight;

function preload()
{
	board = [];
	for(var i = 0; i < boardHeight; i++) board.push([]);
	person = new Person(0, boardHeight-1, blockSize, "imgs/friend.png"); }

function setup()
{
	frameRate(4);
	canvas = createCanvas(boardWidth * blockSize, boardHeight * blockSize);
	canvas.parent("#canvasparentdiv");

	reset();
}

function reset()
{
	background(0,0,0);


	for(var i = 0; i < board.length; i++)
	{
		board[i] = [];
		for(var j = 0; j < boardWidth; j++)
		{
			if(random() > .1)
			{
				board[i].push(new Block(i, j, blockSize, "imgs/not_path.png"));
			}
			else
			{
				board[i].push(new Block(i, j, blockSize, "imgs/not_path_fun.png"));
			}
		}
	}

	for(var i = 0; i < maze_xs.length; i++)
	{
		board[maze_xs[i]][maze_ys[i]].image = loadImage("imgs/path.png");
		board[maze_xs[i]][maze_ys[i]].isPath = true;
	}

	person.reset();

	board[person.x][person.y-1].visible = true;
	board[person.x+1][person.y-1].visible = true;
	board[person.x+1][person.y].visible = true;
	board[person.x][person.y].visible = true;

	board[boardWidth-1][0].visible = true;

	start = Date.now();
}

function draw()
{
	this.alerted = false;
	for(var i = 0; i < board.length; i++)
	{
		for(var j = 0; j < boardWidth; j++)
		{
			board[i][j].show();
		}
	}
	person.update(board);
	person.show();

	if(!this.alerted && person.x === boardWidth-1 && person.y === 0)
	{
		this.alerted = true;
		var stats = {};
		stats.moves = person.nummoves;
		stats.numcommands = arr.len;
		stats.time = Math.floor((Date.now() - start) / 1000);
		stats.level = boardHeight;

		alert("Congratuations. You took " + stats.time + " seconds to solve level " + (boardHeight-9) + ". Additionally you used " + stats.moves + " moves and used " + stats.numcommands + " commands");
	}
}

function revealAll()
{
	for(var i = 0; i < boardWidth; i++)
	{
		for(var j = 0; j < boardHeight; j++)
		{
			board[i][j].visible = true;
		}
	}

}

function keyPressed()
{
	if (keyCode === LEFT_ARROW || keyCode == 72) {
		person.moveLeft(board);
	} else if (keyCode === RIGHT_ARROW || keyCode == 76) {
		person.moveRight(board);
	} else if (keyCode === UP_ARROW || keyCode == 75) {
		person.moveUp(board);
	} else if (keyCode === DOWN_ARROW || keyCode == 74) {
		person.moveDown(board);
	}

}
