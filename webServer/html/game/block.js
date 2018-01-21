function Block(x, y, size, img)
{
	this.size = size;
	this.color = color;
	this.x = x;
	this.y = y;
	this.visible = false;
	this.inFocus = false;
	this.image = loadImage(img);
	this.isPath = false;

	this.show = function()
	{
		push();
		noStroke();
		if(this.visible && this.inFocus)
		{
			image(this.image, this.x * this.size, this.y * this.size, this.size, this.size);
		}
		else if(this.visible)
		{
			image(this.image, this.x * this.size, this.y * this.size, this.size, this.size);
			fill("#80000000");
			rect(this.x * this.size, this.y * this.size, this.size, this.size);
		}
		else
		{
			fill("#000000");
			rect(this.x * this.size, this.y * this.size, this.size, this.size);

		}
		pop();
	}
}
