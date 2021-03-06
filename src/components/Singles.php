<?php
	$singles_data = api_fetch("table=songs&type=single&alias=" . $data["id"] . "&sort_by=date&sort_dir=DESC");
	if ($singles_data) {
		echo "<article class='singles_section'><header class='panel'><h2>Singles</h2></header>";
		if (valExists("id", $singles_data)) {
			$singles_data = [$singles_data];
		}
		echo "<nav><ul class='grid'>";
		foreach($singles_data as $single) {
			echo "<li class='grid_item'><a href='" . $htp_root . $single["url"] . "'>";
				if(valExists("cover_img", $single)) {
					echo img_element($single["cover_img"]);
				}
				echo "<div class='container'><div class='content'>";
					echo "<h3>" . $single["title"] . "</h3>";
					echo "<p class='date'>" . $single["date"] . "</p>";
					echo "<div class='grid_item_sidebar'><p>";
						echo "<span>Music<br/></span>";
						echo "<span>" . $page_title . "</span>";
					echo "</p></div>";
				echo "</div></div>";
			echo "</a><li>";
		}
		echo "</ul></nav></article>";
	}
?>
