<?php
$ref_data = "unused";
$data = false;
$search_term = false;
if (strlen($current_path) > 0) {
	if (strpos($current_path, "gallery/") !== false) {
		$img_id = str_replace("gallery/", "", $current_path);
		if ($img_id) {
			$current_view = "details";
			$current_category = "img";
			$data = api_fetch("table=imgs&id=" . $img_id);
		}
	} elseif (strpos($current_path, "search") !== false) {
		$current_view = "details";
		$current_category = "search";
		if (strpos($current_path, "search/") !== false) {
			$search_term = str_replace("search/", "", $current_path);
			if ($search_term) {
				$data = api_fetch("search=" . $search_term . "&sort_by=date&sort_dir=DESC");
			}
		} else {
			$search_term = true;
		}
	}else {
		$ref_data = api_fetch("url=". $current_path);
		if (valExists("table", $ref_data) && valExists("ref_id", $ref_data)) {
			$data = api_fetch("table=". $ref_data["table"] . "&id=" . $ref_data["ref_id"]);
		}
	}
} else { //homepage, just get all the projects
	$data = api_fetch("view=overview");
	$page_profile_photo = 332;
	// 701
}
if ($ref_data !== "unused") {
	if (valExists("category", $ref_data)) {
		$current_category = $ref_data["category"];
	}
	if (valExists("subcategory", $ref_data)) {
		$current_subcategory = $ref_data["subcategory"];
	}
}
if (!$search_term) {
	if ($data) {
		if (valExists("title", $data)) {
			$page_title = $data["title"];
			$title_prefix = "Sam Murphey";
			$title_separator = " | ";
			if ($current_category == "music") {
				if ($ref_data) {
					if (valExists("alias", $ref_data)) {
						$title_prefix = $ref_data["alias"];
					}
				}
				$title_separator .= "Music | ";
			} elseif ($current_subcategory) {
				$title_separator .= ucSmart($current_subcategory) . " | ";
			} elseif ($current_category) {
				$title_separator .= ucSmart($current_category) . " | ";
			}
			if ($title_prefix == $page_title) {
				if ($current_category == "music") {
					$title_suffix = "Releases";
				} else {
					$title_suffix = "Homepage";
				}
			} else {
				$title_suffix = $page_title;
			}
			$document_title = $title_prefix . $title_separator . $title_suffix;
		}
		if (valExists("description", $data)) {
			$page_description = $data["description"];
			if (substr($page_description, 0, 1) === "[") {
				$page_description = json_decode($page_description, true);
			}
			if (is_array($page_description)) {
				$document_description = $page_description[0];
			} else {
				$document_description = $page_description;
			}
		}
	} else {
		$current_view = "404";
		$current_category = "none";
		$page_title = "404";
		$page_description = "Sorry, but the page you requested could not be found.";
	}
}
