<?php

/***********************************************
auth.php
This will test the client's entered info with what is in the SQL database
and if it is correct will log the user in and save the session info
**********************************************/
			session_start();
			$servername = "localhost"
			$username = "root"
			$password = "sgar!2018Fish"
			$dbname = "darkforest"
			$conn = mysqli_connect($servername, $username, $password, $dbname);
			#$user = $conn->real_escape_string($_POST['user2']);
			#$pass = $conn->real_escape_string($_POST['pass2']);
			echo $user = $_POST['user2'];
			#echo $pass = $_POST['pass2']
			if(!$conn)
			{
				die("Connection failed: " . mysqli_connect_error());
			}

			$sql = "SELECT userName FROM Persons WHERE (userName = '$user' AND curPassword = '$pass')";
			$result = mysqli_query($conn, $sql);
			if(mysqli_num_rows($result) != 0)
			{
				$_SESSION['userName'] = $user; 
				$_SESSION['curPassword'] = $pass;
				header('Location: genindex.php');
			}else
			{
				header('Location: authfailed.php');
			}


?>
