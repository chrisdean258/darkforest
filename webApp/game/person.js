function person(x, y, blockSize)
{
	this.x = x;
	this.y = y;
	this.blockSize = blockSize;

	this.show = function()
	{
		push();
		noStroke();
		fill(color);
		rect(this.x * this.blockSize, this.y * this.blockSize, this.blockSize, this.blockSize);
		pop();
	}
}
