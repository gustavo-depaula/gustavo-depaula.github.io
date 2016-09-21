<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<form action="index.php" method="get">
		<input type="text" id="name" name="name"/>
		<input type="submit" id="submit" value="Go"></input>
		<p><?php
			$name = echo $_GET["name"];
		?></p>

	</form>


</body>
</html>