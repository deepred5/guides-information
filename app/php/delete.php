<?php  
	require_once('connect.php');

	$gindex = $_POST['gindex'];


	$sql = "delete from guides_list where gindex = $gindex";


	$query = mysql_query($sql);
	
	if($query){
		echo '{"code":"1","message":"删除成功"}';
	}
	else{
		echo '{"code":"0","message":"删除失败"}';
	}

?>