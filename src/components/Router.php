<?php

if ($ref_data && valExists("view", $ref_data)) {
	$current_view = $ref_data["view"];
}

if (valExists("links", $data)) {
	$page_links = $data["links"];
	if (substr($page_links, 0, 1) === "[") {
		$page_links = json_decode($page_links, true);
	}
}

if (valExists("profile_img", $data)) {
	$page_profile_photo = $data["profile_img"];
}

if (valExists("cover_img", $data)) {
	$page_hero_img = $data["cover_img"];
}

require_once("./src/components/Sidebar.php");
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
