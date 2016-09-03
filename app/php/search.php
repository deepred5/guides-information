<?php  
	require_once('connect.php');

	$keywords = $_POST['keywords'];

	$sql = "select * from guides_list where name like '%$keywords%' or id like '%$keywords%' or
	cardId like '%$keywords%' or age like '%$keywords%' or sex like '%$keywords%' or workYears like '%$keywords%' or
	specialty like '%$keywords%'";

	$query = mysql_query($sql);

	if ($query && mysql_num_rows($query)) {
		while ($row = mysql_fetch_assoc($query)) {
			$data[] = $row;
		}
		echo json_encode($data);
	}
?>