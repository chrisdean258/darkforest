var arr = [];
var numBraces = 0;

function selectCallbackMove()
{
	arr.push(document.getElementById("moveSelect").value);
	for(var i = 0; i < numBraces; i++)
		arr[arr.length-1] = "&nbsp;" + arr[arr.length-1];
	document.getElementById('RightHandCol').innerHTML = arr.join("<br>");
}
function selectCallbackIf()
{
	arr.push(document.getElementById("ifSelect").value);
	for(var i = 0; i < numBraces; i++)
		arr[arr.length-1] = "&nbsp;" + arr[arr.length-1];
	document.getElementById('RightHandCol').innerHTML = arr.join("<br>");
	numBraces++;
}
function selectCallbackWhile()
{
	arr.push(document.getElementById("whileSelect").value);
	for(var i = 0; i < numBraces; i++)
		arr[arr.length-1] = "&nbsp;" + arr[arr.length-1];
	document.getElementById('RightHandCol').innerHTML = arr.join("<br>");
	numBraces++;
}
function selectCallbackFor()
{
	if(this.initialvar == undefined) this.initialvar = [ "k" ];
	var lc = document.getElementById("forSelect").value;
	var lv = this.initialvar.join("");

	arr.push("for(var " + lv + " = 0; " + lv + " < " + lc + " ; " + lv + "++){");

	this.initialvar.push("j");
	for(var i = 0; i < numBraces; i++)
		arr[arr.length-1] = "&nbsp;" + arr[arr.length-1];
	document.getElementById('RightHandCol').innerHTML = arr.join("<br>");
	numBraces++;
}
function selectCallbackDone()
{
	arr.push("}");
	numBraces--;
	for(var i = 0; i < numBraces; i++)
		arr[arr.length-1] = "&nbsp;" + arr[arr.length-1];
	document.getElementById('RightHandCol').innerHTML = arr.join("<br>");
}


function evaluate_arr(run=true)
{
	this.run = run;
	try{
		setTimeout(function(){eval(arr.join(""));}, 4500);
	}
	catch(ex)
	{
		console.log("bad code");
		person.x = 0;
		person.y = boardHeight-1;
	}
}

function clear_arr()
{
	arr = [];
	numBraces=0;
	document.getElementById('RightHandCol').innerHTML = arr.join("<br>");
}
