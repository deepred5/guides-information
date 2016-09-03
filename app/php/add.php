<?PHP

	require_once('connect.php');
	
	$name = $_POST['name'];
	$id = $_POST['id'];
	$cardId = $_POST['cardId'];
	$age = $_POST['age'];
	$sex = $_POST['sex'];
	$workYears = $_POST['workYears'];
	$specialty = $_POST['specialty'];
	
	$sql = "insert into guides_list(name, id, cardId, age, sex, workYears, specialty) 
			values('$name', '$id', '$cardId', '$age', '$sex', '$workYears', '$specialty')";
	
	$query = mysql_query($sql);
	
	if($query){
		echo '{"code":"1","message":"添加成功"}';
	}
	else{
		echo '{"code":"0","message":"添加失败"}';
	}

?>