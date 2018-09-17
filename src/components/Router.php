<?php
$current_path = substr($_SERVER["REQUEST_URI"], 1);
// dev
$current_path = trim($current_path, "sammurphey_dev");
$current_path = ltrim(rtrim($current_path, "/"), "/");
if (strlen($current_path) > 0) {
	$data = file_get_contents("https://api.sammurphey.net/v2/index.php?url=". $current_path . "&public=true");
	$data = json_decode($data, true);
	$data = $data[0];
} else {
	$data = file_get_contents("https://api.sammurphey.net/v2/index.php?view=overview&publc=true");
	$data = json_decode($data, true);
}

$view = "overview";
if (array_key_exists("view", $data)) {
	$view = $data["view"];
}

// echo "<pre>";
// print_r($data);
// echo "<br/><br/><b>".$view."</b></pre>";

echo "<div id='app'>";

switch ($view) {
	case "overview":
		include_once("./src/views/Overview.php");
		break;
	case "subcategory":
		include_once("./src/views/Subcategory.php");
		break;
	case "project":
		include_once("./src/views/Project.php");
		break;
	case "details":
		include_once("./src/views/Details.php");
		break;
}
include_once("./src/components/Footer.php");
echo "</div>";
