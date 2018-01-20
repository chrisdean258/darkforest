function block(x, y, size, color = "#FFFFFF")
{
	this.size = size;
	this.color = color;
	this.x = x;
	this.y = y;

	this.show = function()
	{
		push();
		noStroke();
		fill(color);
		rect(this.x, this.y, this.size, this.size);
		pop();
	}
}
