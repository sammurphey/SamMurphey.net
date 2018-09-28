<section id="music_info" class="panel_wrapper">
<?php

	// TRACKLIST
	if ($current_view == "project" && valExists("songs", $data)) {
		echo "<section id='tracklist' class='panel'><header><h2>Tracklist</h2></header><ol>";
			$songs_data = json_decode($data["songs"], true);
			foreach ($songs_data as $song) {
				echo "<li><a data-id='" . $song["id"] ."' href='" . $htp_root . $current_path . "?now_playing=" . urlencode($song["name"]) . "'>" . $song["name"] . "</a></li>";
			}
		echo "</ol></section>";
	}





	//TABS GROUP
	echo "<section id='music_details' class='tab_group panel_wrapper'>";

		/// RADIO BUTTONS
		if ($page_description) {
			echo "<input id='tab_selector_1' name='tabs_selectors' type='radio' checked='true' />";
		}
		echo "<input id='tab_selector_2' name='tabs_selectors' type='radio'";
		if (!$page_description) {
			echo "checked='true'";
		}
		echo "/>";

		// TAB BUTTONS
		if ($page_description && valExists("adtl_imgs", $data)) {
			?>
				<nav class="tabs panel_wrapper">
					<ul>
						<li>
							<label for="tab_selector_1" id="tab_1" class="tab panel">About</label>
						</li>
						<li>
							<label for="tab_selector_2" id="tab_2" class="tab panel">Photos</label>
						</li>
					</ul>
				</nav>
			<?php
		}

		// PAGES
		echo "<section class='tab_pages panel_wrapper'>";
			if ($page_description) {
				echo "<section id='page_1' class='tab_page panel'><header><h2>About</h2></header><p>";
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
					echo "<section id='page_2' class='tab_page grid_container selected'>";
						echo "<header class='tab_page_header panel'><h2>Photos</h2></header>";
						echo "<nav><ul class='grid'>";
						foreach($adtl_imgs as $img) {
							echo "<li class='grid_item'><a href='" . $htp_root . "gallery/" . $img . "'>" . img_element($img) . "</a></li>";
						}
						echo "</ul></nav>";
					echo "</section>";
				}
			}
		echo "</section>";
	echo "</section>";
?>
</section>
