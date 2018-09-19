<?php

// get data
$ref_data = false;
if (strlen($current_path) > 0) {
	$ref_data = api_fetch("url=". $current_path);
	$data = api_fetch("table=". $ref_data["table"] . "&id=" . $ref_data["ref_id"]);
} else { //homepage, just get all the projects
	$data = api_fetch("view=overview");
	$page_profile_photo = 701;
}
if ($ref_data && valExists("view", $ref_data)) {
	$current_view = $ref_data["view"];
}
if (valExists("category", $data)) {
	$current_category = $data["category"];
}
if (valExists("title", $data)) {
	$page_title = $data["title"];
}
if (valExists("description", $data)) {
	$page_description = $data["description"];
} else {
	if ($current_view !== "overview") {
		$page_description = "";
	}
}
if (valExists("profile_img", $data)) {
	$page_profile_photo = $data["profile_img"];
}

 echo "<pre>Refs<br/>";

 print_r($ref_data);
 echo "<br/>Data<br/>";
 print_r($data);
 echo "<br/><br/><b>".$current_view."</b></pre>";

switch ($current_view) {
	case "overview":
		include_once($php_root . "src/views/Overview.php");
		break;
	case "subcategory":
		include_once($php_root . "src/views/Subcategory.php");
		break;
	case "project":
		include_once($php_root . "src/views/Project.php");
		break;
	case "details":
		include_once($php_root . "src/views/Details.php");
		break;
}
