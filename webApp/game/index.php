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
      <select class="ui search dropdown">
	    <option value="" selected disabled hidden>move</option>
	    <option value="1">move up</option>
	    <option value="2">move left</option>
	    <option value="3">move right</option>
	    <option value="4">move down</option>
      </select>
    </td>
    <td>Maria Anders</td>
  </tr>
  <tr>
    <td>
	  <select class="ui search dropdown">
	    <option value="" selected disabled hidden>if</option>
		<option value="1">if can move up</option>
		<option value="2">if can move left</option>
		<option value="3">if can move right</option>
		<option value="4">if can move down</option>
	  </select>
	</td>
    <td>Francisco Chang</td>
  </tr>
  <tr>
    <td>
	  <select class="ui search dropdown">
	    <option value="" selected disabled hidden>while</option>
		<option value="1">while can move up</option>
		<option value="2">while can move left</option>
		<option value="3">while can move right</option>
		<option value="4">while can move down</option>
	  </select>
	</td>
    <td>Roland Mendel</td>
  </tr>
  <tr>
    <td>
	  <select class="ui search dropdown">
	    <option value="" selected disabled hidden>for</option>
		<option value="1">for 1 step</option>
		<option value="2">for 2 steps</option>
		<option value="3">for 3 steps</option>
		<option value="4">for 4 steps</option>
		<option value="5">for 5 steps</option>
		<option value="6">for 6 steps</option>
		<option value="7">for 7 steps</option>
		<option value="8">for 8 steps</option>
		<option value="9">for 9 steps</option>
		<option value="10">for 10 steps</option>
		<option value="11">for 11 steps</option>
		<option value="12">for 12 steps</option>
		<option value="13">for 13 steps</option>
		<option value="14">for 14 steps</option>
		<option value="15">for 15 steps</option>
		<option value="16">for 16 steps</option>
		<option value="17">for 17 steps</option>
		<option value="18">for 18 steps</option>
		<option value="19">for 19 steps</option>
		<option value="20">for 20 steps</option>
	  </select>
	</td>
    <td>Helen Bennett</td>
  </tr>
  <tr>
    <td>
	  <select class="ui search dropdown">
	    <option value="">done</option>
	  </select>
	</td>
    <td>Yoshi Tannamuri</td>
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

