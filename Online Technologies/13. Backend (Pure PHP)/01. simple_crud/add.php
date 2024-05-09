<?php include('connection.php'); ?>
<?php 

	/*

		1. SQL String 
		2. Prepare the SQL String Statement
		3. Bind Parameters to SQL String
		4. Execute Query

	*/

	$lastname = $_POST['lastname'];
	$firstname = $_POST['firstname'];
	$department = $_POST['department'];

	$sql_string = "INSERT INTO tblemployees (lastname, firstname, department) VALUES (:lastname, :firstname, :department)";
	$stmt_prepare = $conn->prepare($sql_string);

	$stmt_prepare->bindParam(":lastname", $lastname, PDO::PARAM_STR);
	$stmt_prepare->bindParam(":firstname", $firstname, PDO::PARAM_STR);
	$stmt_prepare->bindParam(":department", $department, PDO::PARAM_STR);

	$stmt_prepare->execute();

	header("Location: index.php");


?>