<?php include('connection.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title> Simple CRUD Application </title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon">
	</head>
<body>

	<div id="wrapper">
		
		<form action="add.php" method="post">
			
			<fieldset>
				<legend><strong> Add Record </strong></legend>
				<div>
					<label for="firstname"> First Name </label>
					<input type="text" name="firstname" id="firstname">
				</div>
				<div>
					<label for="lastname"> Last Name </label>
					<input type="text" name="lastname" id="lastname">
				</div>
				<div>
					<label for="department"> Department </label>
					<input type="text" name="department" id="department">
				</div>
				<div>
					<label> &nbsp; </label>
					<input type="submit" value="CREATE">
				</div>

			</fieldset>
			
		</form>

		<hr>

		<?php

			$sql_string = "SELECT * FROM tblemployees";
			$stmt_prepare = $conn->prepare($sql_string);

			$stmt_prepare->execute();

			$count = $stmt_prepare->rowCount();

			if ($count > 0) {

				echo "<table>";
					echo "<tr>";
					echo "<td> First Name </td>";
					echo "<td> Last Name </td>";
					echo "<td> Department </td>";
				echo "</tr>";

				while ($result = $stmt_prepare->fetch(PDO::FETCH_ASSOC)) {

					echo "<tr>";
						echo "<td>" . $result['firstname'] . "</td>";
						echo "<td>" . $result['lastname'] . "</td>";
						echo "<td>" . $result['department'] . "</td>";
						echo "<td><a href='update.php?id={$result['employeeid']}'> UPDATE </a>";
						echo "<td><a href='delete.php?id={$result['employeeid']}' onclick=\"return confirm('Are you Sure?')\"> DELETE </a>";
					echo "</tr>";

				}

				echo "</table>";

			} else {

				echo "No Records Found or Database is Empty!";

			}

		?>
		
	</div>

</body>
<script src="js/jquery.js"></script>
<script src="js/main.js"></script>
</html>