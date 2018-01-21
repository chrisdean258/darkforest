<!DOCTYPE html>
<html lang="en">
<head>
  <title>how to play dark forest</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/darkhowto.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
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
      <a class="navbar-brand" href="index.php">dark forest</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="about.php">About</a></li>
        <li class="active"><a href="#">How to play</a></li>
        <li><a href="contact.php">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="align-left">
  <h2>your story</h2>
</div>

<div class="align-left">
	<p>
		This little friend is you. 
		<img src="imgs/friend.png" width= 20 height= 20> 
		Unfortunately, you're all alone in the dark forest and a little bit lost too. <br /> <br />
		Your goal is to navigate your way along the old path and out of the forest. (Stay off the grass though!)
		<br />
		<img src="imgs/walk.gif" width=90 height= 45>
		<br /> <br />
		One problem -- it's dark and your lantern can only let you see so far away.
		<br /> <br />

		You lost your map, so you'll have to guess a little bit on where the path is.
		So every step you venture out to look for an escape, you'll discover a little bit more of the path. Eventually, you'll see the way out.
		<br /> <br />

		Your map updates as you discover, so you can gradually go farther. The dark forest is kind of safe for a lonely traveler, but it's not somewhere you want to be stuck.
		You'll start every game in the bottom left corner and finish in the top right.

		<br /> <br />

		Good luck on your journey home!
		<br /> <br />
	</p>
</div>

<div class="align-left">
	<h2>how to play</h2>
		<p>
			The way you travel is a little unique. It's a lot less exhausting of a journey when you know where you're going before you step. For example, it's way
			easier for you to walk five steps forward than to walk a step forward and then walk a step forward and then walk a step forward and then walk a step 
			forward and then walk a step forward.
			<br /> <br />
			So, you're going to be writing code to walk. You'll have several different commands to use:
			<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move one space in any direction (up, down, left, right) <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ex: move right <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move a certain number of steps in any direction <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ex: for 4 steps, move down <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move as many steps as possible <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ex: while (as long as) you can move up, move up <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attempt to move only if possible <br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ex: if can you can move left, move left <br />
			<br />

			You program as many steps as you want before you start moving. In fact, the more the merrier because the fewer times you move, the better your score.
			Watch out though because if you get too hasty and step off the path, it'll count as another move against your score.
			<br /><br />

			Have fun experimenting with writing the code. There's all kinds of ways to optimize it. But don't forget to close your if, for, and while statements. You can put more than one movement statement in them, and when you're done, click "end" to add the closing brace.



		</p>

</div>

</body>
</html>

