<?php include('connection.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<title> Simple CRUD Application </title>
		<link rel="stylesheet" href="css/styles.css">
	</head>
<body>

	<div id="wrapper">

		<?php 

			$id = $_GET['id'];

			$sql_string = "SELECT * FROM tblemployees WHERE employeeid = :id LIMIT 1";

			$stmt = $conn->prepare($sql_string);

			$stmt->bindParam(':id', $id, PDO::PARAM_INT);

			$stmt->execute();

			$result = $stmt->fetch(PDO::FETCH_ASSOC);


			if (isset($_POST['update'])) {

				$lastname = $_POST['lastname'];
				$firstname = $_POST['firstname'];
				$department = $_POST['department'];

				$sql_string = "UPDATE tblemployees SET lastname = :lastname, firstname = :firstname, department = :department WHERE employeeid = :id";

				$stmt = $conn->prepare($sql_string);

				$stmt->bindParam(':lastname', $lastname, PDO::PARAM_STR);
				$stmt->bindParam(':firstname', $firstname, PDO::PARAM_STR);
				$stmt->bindParam(':department', $department, PDO::PARAM_STR);
				$stmt->bindParam(':id', $id, PDO::PARAM_INT);

				$stmt->execute();

				header("Location: index.php");

			}

		?>
		
		<form action="update.php?id=<?php echo $result['employeeid']; ?>" method="post">
			
			<fieldset>
				<legend> Update Record </legend>
				<div>
					<label for="firstname"> First Name </label>
					<input type="text" name="firstname" id="firstname" value="<?php echo $result['firstname']; ?>">
				</div>
				<div>
					<label for="lastname"> Last Name </label>
					<input type="text" name="lastname" id="lastname" value="<?php echo $result['lastname']; ?>">
				</div>
				<div>
					<label for="department"> Department </label>
					<input type="text" name="department" id="department" value="<?php echo $result['department']; ?>">
				</div>
				<div>
					<label for=""> &nbsp;</label>
					<input type="submit" value="UPDATE" name="update">
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
						echo "<td><a href=\"delete.php?id={$result['employeeid']}\" onclick=\"return confirm('Are you Sure?')\"> DELETE </a>";
					echo "</tr>";

				}

				echo "</table>";

			} else {

				echo "No Records Found or Database is Empty!";

			}

		
		?>
		
	</div>

</body>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/main.js"></script>
</html>