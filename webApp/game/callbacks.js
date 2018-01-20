var arr = []

function selectCallbackMove()
{
	arr.push(document.getElementByID("moveSelect").value);
}
function selectCallbackIf()
{
	arr.push(document.getElementByID("ifSelect").value);
}
function selectCallbackWhile()
{
	arr.push(document.getElementByID("whileSelect").value);
}
function selectCallbackFor()
{
	if(this.initialvar == undefined) this.initialvar = [ "k" ];
	var lc = document.getElementByID("forSelect").value;
	var lv = this.initialvar.join("");

	arr.push("for(var " + lv + " = 0; " + lv + " < " + lc + " ; " + lv + "++){");

	this.initialvar.push("j");
}
function selectCallbackDone()
{
	arr.push(document.getElementByID("doneSelect").value);
	for(var i = 0; i<arr.length; i++)
		console.log(arr[i]);
}
