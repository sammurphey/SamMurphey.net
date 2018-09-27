<?php
	$current_path = substr($_SERVER["REQUEST_URI"], 1);
	if ($current_path == "sammurphey_dev/") {
		$current_view = "overview";
		$current_category = "all";
		$page_title = "Hello World,";
		$page_description = "My name is Samantha Murphey. I'm a 23 y/o trans-lesbian hacker-girl living in LA, with a passion for merging art and code! I make web-apps, produce music, design logos and fonts, and draw with everything from pencils to 3D. There's quite a lot of material on this site to see / hear / play with, so I suggest choosing one of the categories below or to the left to start off with. Or if you think you can brave the chaos, scroll to the bottom for a full reverse-chronological view of ALL my work.";
	}
	$current_path = str_replace("sammurphey_dev", "", $current_path); // dev env
	$current_path = ltrim(rtrim($current_path, "/"), "/");
	$current_path = explode("?", $current_path);
	if (count($current_path) > 1) {
		$current_params = $current_path[1];
	}
	$current_path = $current_path[0];

?>
