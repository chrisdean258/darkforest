<?php
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>dark forest: a programming adventure</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/darkmain.css">
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
      <a class="navbar-brand" href="#">dark forest</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="about.php">About</a></li>
        <li><a href="howto.php">How to play</a></li>
        <li><a href="contact.php">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="center">
  <br>
  <h1>dark forest:</h1>
  <h2>a programming adventure</h2>
<!--  <button class="button button1" style="margin-right: 50px" onclick="document.getElementbyId('id01').style.display='block'" style="width:auto;"><h3>start</h3></button>-->
  <center><button class="button button1" href="#" data-toggle="modal" data-target="#login-modal"> <h3>start</h3></button></center>
</div>

<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    	  <div class="modal-dialog">
				<div class="loginmodal-container">
					<h1>Pick your forest map!</h1><br>
				  <form id="loginForm" method="post" action="">
					<!--<input type="text" name="playerName" placeholder="Username">-->
					<!--<input type="password" name="pass2" placeholder="Password">-->
					
  				<center><button class="button button1" href="10index.php"><h3>10x10</h3></button></center>
  				<center><button class="button button1" href="#"><h3>15x15</h3></button></center>
  				<center><button class="button button1" href="#"><h3>20x20</h3></button></center>
  				<center><button class="button button1" href="#"><h3>25x25</h3></button></center>
  				<center><button class="button button1" href="game/index.php"><h3>30x30</h3></button></center>
  				<center><button class="button button1" href="#"><h3>35x35</h3></button></center>
				
		
				<form action="http://darkforest.net/game/index.php">
    					<input type="submit" value="Go to Google" />
				</form>
			
				<!--<input type="submit" value="login" class="login loginmodal-submit" onclick="loginValidate()">-->
				<!--	<input type="submit" name="login" class="login loginmodal-submit" value="Login">-->
				  </form>
				</div>
			</div>
		  </div>

<!--<script>
	function loginValidate(){
 	  document.getElementById("loginForm").submit();
	}
<script>-->

</body>
</html>

