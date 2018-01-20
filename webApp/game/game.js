var canvas;
var person;
var board;

var blockSize = 600/boardHeight;

function preload()
{
	board = [];
	for(var i = 0; i < boardHeight; i++) board.push([]);
	person = new Person(0, boardHeight-1, blockSize, "imgs/friend.png"); }

function setup()
{
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

	person.x = 0;
	person.y = boardHeight-1;

	board[person.x][person.y-1].visible = true;
	board[person.x+1][person.y-1].visible = true;
	board[person.x+1][person.y].visible = true;
	board[person.x][person.y].visible = true;

	board[boardWidth-1][0].visible = true;

}

function draw()
{
	//background(0);
	for(var i = 0; i < board.length; i++)
	{
		for(var j = 0; j < boardWidth; j++)
		{
			board[i][j].show();
		}
	}

	person.show();

	if(person.x === boardWidth-1 && person.y === 0) reset();
}

function revealAll()
{
	for(var i = 0; i < 30; i++)
	{
		for(var j = 0; j < 30; j++)
		{
			board[i][j].visible = true;
		}
	}

}

function keyPressed()
{
	if (keyCode === LEFT_ARROW || keyCode == "h") {
		person.moveLeft(board);
	} else if (keyCode === RIGHT_ARROW || keyCode == "l") {
		person.moveRight(board);
	} else if (keyCode === UP_ARROW || keyCode == "k") {
		person.moveUp(board);
	} else if (keyCode === DOWN_ARROW || keyCode == "j") {
		person.moveDown(board);
	}

}
