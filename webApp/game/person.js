function Person(x, y, blockSize, imageName)
{
	this.x = x;
	this.y = y;
	this.blockSize = blockSize;
	this.image = loadImage(imageName);

	this.show = function()
	{
		push();
		noStroke();
		image(this.image, this.x*this.blockSize, this.y*this.blockSize, this.blockSize, this.blockSize);
		pop();
	}

	this.canMove_up = function(b)
	{
		return this.y > 0 && b[this.x][this.y-1].isPath;
	}

	this.canMove_down = function(b)
	{
		return this.y < boardHeight-1 && b[this.x][this.y+1].isPath;
	}

	this.canMove_left = function(b)
	{
		return this.x > 0 && b[this.x-1][this.y].isPath;
	}

	this.canMove_right = function(b)
	{
		return this.x < boardWidth-1 && b[this.x+1][this.y].isPath;
	}

	this.moveRight = function(b)
	{
		if(this.canMove_right(b))
		{
			this.x++;
			try { b[this.x+1][this.y-1].visible = true; } catch(ex){}
			try { b[this.x+1][this.y-0].visible = true; } catch(ex){}
			try { b[this.x+1][this.y+1].visible = true; } catch(ex){}
		}
	}

	this.moveLeft = function(b)
	{
		if(this.canMove_left(b))
		{
			this.x--;
			try { b[this.x-1][this.y-1].visible = true; } catch(ex){}
			try { b[this.x-1][this.y-0].visible = true; } catch(ex){}
			try { b[this.x-1][this.y+1].visible = true; } catch(ex){}
		}
	}

	this.moveUp = function(b)
	{
		var newy = this.y-1;
		if(this.canMove_up(b))
		{
			while(this.y > newy) this.y -= .0001;
			this.y = newy;
			try { b[this.x-1][this.y-1].visible = true; } catch(ex){}
			try { b[this.x-0][this.y-1].visible = true; } catch(ex){}
			try { b[this.x+1][this.y-1].visible = true; } catch(ex){}
		}
	}

	this.moveDown = function(b)
	{
		if(this.canMove_down(b))
		{
			this.y++;
			try { b[this.x-1][this.y+1].visible = true; } catch(ex){}
			try { b[this.x-0][this.y+1].visible = true; } catch(ex){}
			try { b[this.x+1][this.y+1].visible = true; } catch(ex){}
		}
	}
}
