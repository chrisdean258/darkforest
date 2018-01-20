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
	if(this.initialvar == undefined) this.initialvar = [ "k" ];
	var lc = document.getElementById("forSelect").value;
	var lv = this.initialvar.join("");

	arr.push("for(var " + lv + " = 0; " + lv + " < " + lc + " ; " + lv + "++){");

	this.initialvar.push("j");
}
function selectCallbackDone()
{
	arr.push("}");
}


function evaluate_arr(run=true)
{
	this.run = run;
	try{
		setTimeout(function(){eval(arr.join(""));}, 4500);
	}
	catch(ex)
	{
		person.x = 0;
		person.y = boardHeight-1;
	}
}
