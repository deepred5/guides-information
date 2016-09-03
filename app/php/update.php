<?PHP

	require_once('connect.php');
	
	$name = $_POST['name'];
	$id = $_POST['id'];
	$cardId = $_POST['cardId'];
	$age = $_POST['age'];
	$sex = $_POST['sex'];
	$workYears = $_POST['workYears'];
	$specialty = $_POST['specialty'];
	$gindex = $_POST['gindex'];
	
	$sql = "update guides_list set name = '$name', id = '$id', cardId = '$cardId', age = '$age', 
	sex = '$sex', workYears = '$workYears', specialty = '$specialty' where gindex = '$gindex'";
	
	$query = mysql_query($sql);
	
	if($query){
		echo '{"code":"1","message":"保存成功"}';
	}
	else{
		echo '{"code":"0","message":"保存失败"}';
	}

?>