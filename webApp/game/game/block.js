function Block(x, y, size, color = "#000000", visible = false)
{
	this.size = size;
	this.color = color;
	this.x = x;
	this.y = y;
	this.visible = visible;

	this.show = function()
	{
			push();
			noStroke();
			if(this.visible) fill(this.color);
			else             fill("#000000");
			rect(this.x * this.size, this.y * this.size, this.size, this.size);
			pop();
	}
}
