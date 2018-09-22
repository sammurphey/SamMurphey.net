<article id="music_info" class="panel_wrapper">
<?php
	if ($current_view == "project" && valExists("songs", $data)) {
		echo "<section id='tracklist' class='panel'><header><h2>Tracklist</h2></header><ol>";
			$songs_data = json_decode($data["songs"], true);
			foreach ($songs_data as $song) {
				echo "<li><a data-id='" . $song["id"] ."' href='" . $htp_root . $current_path . "?now_playing=" . urlencode($song["name"]) . "'>" . $song["name"] . "</a></li>";
			}
		echo "</ol></section>";
	}
	echo "<section id='music_details' class='tab_group panel_wrapper'>";
		echo "<header class='tabs panel_wrapper'>";
			if ($page_description) {
				echo "<div id='desc_tab' class='tab panel '>About</div>";
			}
			if ($data["adtl_imgs"]) {
				echo "<div id='img_tab' class='tab panel selected'>Photos</div>";
			}
		echo "</header>";
		echo "<article class='tab_pages panel_wrapper'>";
			if ($page_description) {
				echo "<section class='tab_page panel'><header><h2>About</h2></header><p>";
				if (is_array($page_description)) {
					foreach($page_description as $line) {
						echo "<span>" . $line . "<br/></span>";
					}
				} else {
					echo $page_description;
				}
				echo "</p></section>";
			}
			if ($data["adtl_imgs"]) {
				$adtl_imgs = json_decode($data["adtl_imgs"], true);
				if ($adtl_imgs) {
					echo "<section class='tab_page grid selected'>";
						foreach($adtl_imgs as $img) {
							echo "<div class='grid_item'><a href='" . $htp_root . "gallery/" . $img . "'>" . img_element($img) . "</a></div>";
						}
					echo "</section>";
				}
			}
		echo "</article>";
	echo "</section>";
?>
</article>
