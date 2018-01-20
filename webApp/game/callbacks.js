var arr = []

function selectCallbackMove()
{
	arr.push(document.getElementById("moveSelect").value);
}
function selectCallbackIf()
{
	arr.push(document.getElementById("ifSelect").value);
}
function selectCallbackWhile()
{
	arr.push(document.getElementById("whileSelect").value);
}
function selectCallbackFor()
{
	console.log("Callback for");
	if(this.initialvar == undefined) this.initialvar = [ "k" ];
	var lc = document.getElementById("forSelect").value;
	var lv = this.initialvar.join("");

	arr.push("for(var " + lv + " = 0; " + lv + " < " + lc + " ; " + lv + "++){");

	this.initialvar.push("j");
}
function selectCallbackDone()
{
	arr.push(document.getElementById("doneSelect").value);
	for(var i = 0; i<arr.length; i++)
		console.log(arr[i]);
}
