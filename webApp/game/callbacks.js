var arr = []

function selectCallbackMove()
{
	arr.push(document.getElementById("moveSelect").value);
	document.getElementById('RightHandCol').textContent = arr.join("\n");
}
function selectCallbackIf()
{
	arr.push(document.getElementById("ifSelect").value);
	document.getElementById('RightHandCol').textContent = arr.join("\n");
}
function selectCallbackWhile()
{
	arr.push(document.getElementById("whileSelect").value);
	document.getElementById('RightHandCol').textContent = arr.join("\n");
}
function selectCallbackFor()
{
	if(this.initialvar == undefined) this.initialvar = [ "k" ];
	var lc = document.getElementById("forSelect").value;
	var lv = this.initialvar.join("");

	arr.push("for(var " + lv + " = 0; " + lv + " < " + lc + " ; " + lv + "++){");

	this.initialvar.push("j");
	document.getElementById('RightHandCol').textContent = arr.join("\n");
}
function selectCallbackDone()
{
	arr.push("}");
	document.getElementById('RightHandCol').textContent = arr.join("\n");
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
