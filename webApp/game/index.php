<!DOCTYPE html>
<html lang="en">
<head>
  <title>dark forest: a programming adventure</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="../css/darkgame.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
		<script>
			<?php
			echo exec("/home/colin/darkforest/mazegen/mazegen 30 30");
			?>
			//var maze_xs = [ 1, 2, 3, 4, 5, 6, 7 ];
			//var maze_ys = [ 1, 2, 3, 4, 5, 6, 7 ];
			//var boardWidth = 30;
			//var boardHeight = 30;
		</script>
		<script src="block.js"></script>
		<script src="person.js"></script>
		<script src="game.js"></script>
		<script src="callbacks.js"></script>

</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">dark forest</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">How to play</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Stats</a></li>
      </ul>
    </div>
  </div>
</nav>
<br>
  <div id="wrapper">
    <div id="leftcolumn">
      <center>
      <div id="canvasparentdiv"></div>
      </center>
    </div>
    <div id="rightcolumn">
       <table>
  <tr>
    <th>Commands</th>
    <th>Your Code</th>
  </tr>
  <tr>
    <td>
      <select id="moveSelect" class="ui search dropdown" onselect="selectCallbackMove()">
	    <option value="" selected disabled hidden>move</option>
	    <option value="move up">move up</option>
	    <option value="move left">move left</option>
	    <option value="move right">move right</option>
	    <option value="move down">move down</option>
      </select>
    </td>
    <td>placeholder0</td>
  </tr>
  <tr>
    <td>
	  <select id="ifSelect" class="ui search dropdown" onselect="selectCallbackIf()">
	    <option value="" selected disabled hidden>if</option>
		<option value="if can move up">if can move up</option>
		<option value="if can move left">if can move left</option>
		<option value="if can move right">if can move right</option>
		<option value="if can move down">if can move down</option>
	  </select>
	</td>
    <td>placeholder1</td>
  </tr>
  <tr>
    <td>
	  <select id="whileSelect" class="ui search dropdown" onselect="selectCallbackWhile()">
	    <option value="" selected disabled hidden>while</option>
		<option value="while can move up">while can move up</option>
		<option value="while can move left">while can move left</option>
		<option value="while can move right">while can move right</option>
		<option value="while can move down">while can move down</option>
	  </select>
	</td>
    <td>placeholder2</td>
  </tr>
  <tr>
    <td>
	  <select id="forSelect" class="ui search dropdown" onselect="selectCallbackFor()">
	    <option value="" selected disabled hidden>for</option>
		<option value="for 1 step">for 1 step</option>
		<option value="for 2 steps">for 2 steps</option>
		<option value="for 3 steps">for 3 steps</option>
		<option value="for 4 steps">for 4 steps</option>
		<option value="for 5 steps">for 5 steps</option>
		<option value="for 6 steps">for 6 steps</option>
		<option value="for 7 steps">for 7 steps</option>
		<option value="for 8 steps">for 8 steps</option>
		<option value="for 9 steps">for 9 steps</option>
		<option value="for 10 steps">for 10 steps</option>
		<option value="for 11 steps">for 11 steps</option>
		<option value="for 12 steps">for 12 steps</option>
		<option value="for 13 steps">for 13 steps</option>
		<option value="for 14 steps">for 14 steps</option>
		<option value="for 15 steps">for 15 steps</option>
		<option value="for 16 steps">for 16 steps</option>
		<option value="for 17 steps">for 17 steps</option>
		<option value="for 18 steps">for 18 steps</option>
		<option value="for 19 steps">for 19 steps</option>
		<option value="for 20 steps">for 20 steps</option>
	  </select>
	</td>
    <td>placeholder3</td>
  </tr>
  <tr>
    <td>
	  <select id="doneSelect" class="ui search dropdown" onselect="selectCallbackDone()">
	    <option value="done">done</option>
	  </select>
	</td>
    <td>placeholder4</td>
  </tr>
  <tr>
    <td>
      <button class="button button1" style="margin-right: 50px"><h3>start</h3></button>
    </td>
    <td>
      <button class="button button1" style="margin-left: 50px"><h3>stop</h3></button>
    </td>
  </tr>
</table>
    </div>
</div>
</body>
</html>

