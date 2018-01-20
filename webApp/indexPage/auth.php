<?php
require ("config.php");

/***********************************************
auth.php
This will test the client's entered info with what is in the SQL database
and if it is correct will log the user in and save the session info
**********************************************/
	
			session_start();
			$servername = "localhost"
			$username = DB_USER
			$password = DB_PASSWORD
			$dbname = DB_DATABASE
			$conn = mysqli_connect($servername, $username, $password, $dbname);
			$user = $conn->real_escape_string($_POST['user']);
			$pass = $conn->real_escape_string($_POST['pass']);
			
			if(!$conn)
			{
				die("Connection failed: " . mysqli_connect_error());
			}

			$sql = "SELECT userName FROM Persons WHERE (userName = '$user' AND curPassword = '$pass')";
			$result = mysqli_query($conn, $sql);
			if(mysqli_num_rows($result) != 0)
			{
				$_SESSION['user'] = $user; 
				$_SESSION['pass'] = $pass;
				header('Location: /cable/genindex.php');
			}else
			{
				header('Location: /cable/authfailed.php');
			}


?>
