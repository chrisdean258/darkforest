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
	arr.push(document.getElementByID("forSelect").value);
}
function selectCallbackDone()
{
	arr.push(document.getElementByID("doneSelect").value);
	print(arr);
}
