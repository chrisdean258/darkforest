function Person(x, y, blockSize, imageName)
{
	this.x = x;
	this.y = y;
	this.blockSize = blockSize;
	this.image = loadImage(imageName);
	this.moves = [];
	this.futurex = x;
	this.futurey = y;
	this.nummoves = 0;

	this.reset = function()
	{
		this.x = this.futurex = 0;
		this.y = this.futurey = boardHeight - 1;
		this.moves = [];
	}

	this.show = function()
	{
		push();
		noStroke();
		image(this.image, this.x*this.blockSize, this.y*this.blockSize, this.blockSize, this.blockSize);
		pop();
	}

	this.update = function(b)
	{
		if(this.moves.length > 0)
		{
			this.moves[0](this);
			this.moves.splice(0,1);

			for(i = -1; i < 2; i++) for(j = -1; j < 2; j++)
			{
				try{ b[this.x+i][this.y+j].visible = true; } catch(ex){}
			}
		}
	}

	this.canMove_up = function(b)
	{
		return this.futurey > 0 && b[this.futurex][this.futurey-1].isPath;
	}

	this.canMove_down = function(b)
	{
		return this.futurey < boardHeight-1 && b[this.futurex][this.futurey+1].isPath;
	}

	this.canMove_left = function(b)
	{
		return this.futurex > 0 && b[this.futurex-1][this.futurey].isPath;
	}

	this.canMove_right = function(b)
	{
		return this.futurex < boardWidth-1 && b[this.futurex+1][this.futurey].isPath;
	}

	this.moveRight = function(b)
	{
		if(this.canMove_right(b))
		{
			this.futurex++;
			this.moves.push(function(p){p.x++;});
		}
	}

	this.moveLeft = function(b)
	{
		this.nummoves++;
		if(this.canMove_left(b))
		{
			this.futurex--;
			this.moves.push(function(p){p.x--;});
		}
	}

	this.moveUp = function(b)
	{
		this.nummoves++;
		if(this.canMove_up(b))
		{
			this.futurey--;
			this.moves.push(function(p){p.y--;});
		}
	}

	this.moveDown = function(b)
	{
		this.nummoves++;
		if(this.canMove_down(b))
		{
			this.futurey++;
			this.moves.push(function(p){p.y++;});
		}
	}
}
