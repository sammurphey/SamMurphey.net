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
			$search_term = urldecode($search_term);
		} else {
			$search_term = "blank_default";
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
	if (valExists("keywords", $data)) {
		$page_keywords = json_decode($data["keywords"], true);
		$keywords = implode(", ", $page_keywords);
	}
}
if (!$search_term) {
	if ($data) {
				// title
		if (valExists("title", $data)) {
			$page_title = $data["title"];
			$title_prefix = "Sam Murphey";
			$title_separator = " | ";
			$title_suffix = "Homepage";
			if ($current_category == "all") {
				$page_title = "Hello World,";
				$page_description = "My name is Samantha Murphey. I'm a 23 y/o trans-lesbian hacker-girl living in LA, with a passion for merging art and code! I make web-apps, produce music, design logos and fonts, and draw with everything from pencils to 3D. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll to the bottom for a full reverse-chronological view of ALL my work.";
			} elseif ($current_category == "img") {
				$title_separator .= "Gallery | ";
				$title_suffix = "Img #" . $data["id"];
			} elseif ($current_category == "music") {
				if ($ref_data) {
					if (valExists("alias", $ref_data)) {
						$title_prefix = $ref_data["alias"];
					}
				}
				if ($title_prefix == $page_title) {
					$title_suffix = "Releases";
				}
				$title_separator .= "Music | ";
			} else {
				$title_suffix = $page_title;
				if ($current_subcategory) {
					$title_separator .= ucSmart($current_subcategory) . " | ";
				} elseif ($current_category) {
					$title_separator .= ucSmart($current_category) . " | ";
				}
			}
			$document_title = $title_prefix . $title_separator . $title_suffix;

		}

				//	description
		if ($current_category == "search") {
			$page_description = "Search results for '" . $search_term . "'";
		} elseif ($current_category == "img") {
			if (valExists("title", $data)) {
				$page_description = $data["title"];
			} else {
				$page_description = $data["alt"];
			}
			$document_description = "Img #" . $data["id"] . "; ";
			if (is_array($page_description)) {
				$document_description .= $page_description[0];
			} else {
				$document_description .= $page_description;
			}
		} elseif (valExists("description", $data)) {
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
		$document_description = $page_description;
	}
} else {
	$document_title = "Sam Murphey | Search | " . ucSmart($search_term);
}
// clean up
//$page_title = escapeQuotes($page_title);
$document_title = escapeQuotes($document_title);
//$page_description = escapeQuotes($page_description);
$document_description = escapeQuotes($document_description);
