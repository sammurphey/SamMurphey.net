<?php

// get data
if (strlen($current_path) > 0) {
	$tmp_data = api_fetch("url=". $current_path);
	$data = api_fetch("table=". $tmp_data["table"] . "&id=" . $tmp_data["ref_id"]);
} else { //homepage, just get all the projects
	$data = api_fetch("view=overview");
}

if (array_key_exists("view", $data)) { $current_view = $data["view"]; }
if (array_key_exists("title", $data)) { $page_title = $data["title"]; }
if (array_key_exists("description", $data)) { $page_description = $data["description"]; } else {
	if ($current_view !== "overview") {
		$page_description = "";
	}
}
if (array_key_exists("category", $data)) { $current_category = $data["category"]; }
// echo "<pre>";
// print_r($data);
// echo "<br/><br/><b>".$view."</b></pre>";


switch ($current_view) {
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
