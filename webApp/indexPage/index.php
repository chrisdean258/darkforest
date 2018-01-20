<!DOCTYPE html>
<html lang="en">
<head>
  <title>DarkForest: A Programming Adventure</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/darkmain.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
  
    body {
     background: url(imgs/forest.jpg) no-repeat center fixed; 
     background-size: cover;
    }
 
     
    /* Add a gray background color and some padding to the footer */
    footer {
      background-color: #f2f2f2;
      padding: 25px;
    }
  
	.button {
    background-color: #575555; /* Green */
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: initial;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.button1 {padding: 14px 40px;}

@font-face {
    font-family: myFirstFont;
    src: url(fonts/ConnectionSerif.otf);
}
h1 {
    font-family: myFirstFont;
    font-size: 80px;
    color:#990b0b;
}
h2 {
    font-family: myFirstFont;
    font-size: 40px;
    color:#990b0b;
}
h3 {
    font-family: myFirstFont;
    font-size: 20px;
    color:black;
}

.container {
    position: relative;
}

.center {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 18px;
}


 </style>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">DarkForest</a>
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
<div class="center">
  <br>
  <h1>dark forest:</h1>
  <h2>a programming adventure</h2>
  <button class="button button1" style="margin-right: 50px"><h3>start</h3></button>
  <button class="button button1" style="margin-left: 50px"><h3>register</h3></button>
</div>
</body>
</html>

