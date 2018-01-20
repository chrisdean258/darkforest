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

	this.canMove_up = function()
	{
		return this.y > 0;
	}

	this.canMove_down = function()
	{
		return this.y < boardHeight-1;
	}

	this.canMove_left = function()
	{
		return this.x > 0;
	}

	this.canMove_right = function()
	{
		return this.x < boardWidth-1;
	}

	this.moveRight = function(b)
	{
		if(this.canMove_right())
		{
			this.x++;
			try { b[this.x+1][this.y-1].visible = true; } catch(ex){}
			try { b[this.x+1][this.y-0].visible = true; } catch(ex){}
			try { b[this.x+1][this.y+1].visible = true; } catch(ex){}
		}
	}

	this.moveLeft = function(b)
	{
		if(this.canMove_left())
		{
			this.x--;
			try { b[this.x-1][this.y-1].visible = true; } catch(ex){}
			try { b[this.x-1][this.y-0].visible = true; } catch(ex){}
			try { b[this.x-1][this.y+1].visible = true; } catch(ex){}
		}
	}

	this.moveUp = function(b)
	{
		if(this.canMove_up())
		{
			this.y--;
			try { b[this.x-1][this.y-1].visible = true; } catch(ex){}
			try { b[this.x-0][this.y-1].visible = true; } catch(ex){}
			try { b[this.x+1][this.y-1].visible = true; } catch(ex){}
		}
	}

	this.moveDown = function(b)
	{
		if(this.canMove_down())
		{
			this.y++;
			try { b[this.x-1][this.y+1].visible = true; } catch(ex){}
			try { b[this.x-0][this.y+1].visible = true; } catch(ex){}
			try { b[this.x+1][this.y+1].visible = true; } catch(ex){}
		}
	}
}
