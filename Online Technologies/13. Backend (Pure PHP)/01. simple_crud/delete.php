<?php

	require('connection.php');

	$id = $_GET['id'];

	$sql_cmd = "DELETE FROM tblemployees WHERE employeeid = :id";

	$stmt = $conn->prepare($sql_cmd);

	$stmt->bindParam(":id", $id, PDO::PARAM_INT);

	$stmt->execute();

	header("Location: index.php");

?>