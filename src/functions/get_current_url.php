<?php
	$current_path = substr($_SERVER["REQUEST_URI"], 1);
	$current_path = str_replace("sammurphey_dev", "", $current_path); // dev env
	$current_path = ltrim(rtrim($current_path, "/"), "/");
?>
