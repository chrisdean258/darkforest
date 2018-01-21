var arr = [];
var arrPrint = [];
var numBraces = 0;

function selectCallbackMove()
{
	arr.push(document.getElementById("moveSelect").value);
	arrPrint.push(document.getElementById("moveSelect").value);
	for(var i = 0; i < numBraces; i++)
		arrPrint[arrPrint.length-1] = "&nbsp;&nbsp;&nbsp;&nbsp;" + arrPrint[arrPrint.length-1];
	document.getElementById('RightHandCol').innerHTML = arrPrint.join("<br>");
}
function selectCallbackIf()
{
	arr.push(document.getElementById("ifSelect").value);
	arrPrint.push(document.getElementById("ifSelect").value);
	for(var i = 0; i < numBraces; i++)
		arrPrint[arrPrint.length-1] = "&nbsp;&nbsp;&nbsp;&nbsp;" + arrPrint[arrPrint.length-1];
	document.getElementById('RightHandCol').innerHTML = arrPrint.join("<br>");
	numBraces++;
}
function selectCallbackWhile()
{
	arr.push(document.getElementById("whileSelect").value);
	arrPrint.push(document.getElementById("whileSelect").value);
	for(var i = 0; i < numBraces; i++)
		arrPrint[arrPrint.length-1] = "&nbsp;&nbsp;&nbsp;&nbsp;" + arrPrint[arrPrint.length-1];
	document.getElementById('RightHandCol').innerHTML = arrPrint.join("<br>");
	numBraces++;
}
function selectCallbackFor()
{
	if(this.initialvar == undefined) this.initialvar = [ "k" ];
	var lc = document.getElementById("forSelect").value;
	var lv = this.initialvar.join("");

	arr.push("for(var " + lv + " = 0; " + lv + " < " + lc + " ; " + lv + "++){");
	arrPrint.push("for(var " + lv + " = 0; " + lv + " < " + lc + " ; " + lv + "++){");

	this.initialvar.push("j");
	for(var i = 0; i < numBraces; i++)
		arrPrint[arrPrint.length-1] = "&nbsp;&nbsp;&nbsp;&nbsp;" + arrPrint[arrPrint.length-1];
	document.getElementById('RightHandCol').innerHTML = arrPrint.join("<br>");
	numBraces++;
}
function selectCallbackDone()
{
	arr.push("}");
	arrPrint.push("}");
	numBraces--;
	for(var i = 0; i < numBraces; i++)
		arrPrint[arrPrint.length-1] = "&nbsp;&nbsp;&nbsp;&nbsp;" + arrPrint[arrPrint.length-1];
	document.getElementById('RightHandCol').innerHTML = arrPrint.join("<br>");
}


function evaluate_arr()
{
	try
	{
		eval(arr.join(""));
	}
	catch(ex)
	{
		console.log(ex);
		alert("Could not interpret your code.\n");
		person.reset();
	}
}

function clear_arr()
{
	arr = [];
	arrPrint = [];
	numBraces=0;
	document.getElementById('RightHandCol').innerHTML = arrPrint.join("<br>");
}
