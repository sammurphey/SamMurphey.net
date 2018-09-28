<?php
$htp_root = "http://localhost/sammurphey_dev/";
if (empty($_POST) === false) {
	$search_term = addslashes($_POST["search"]);
	header("Location: " . $htp_root ."search/" . urlencode($search_term));
	die();
} else {
	header("Location: ". $htp_root ."search");
	die();
}
?>
