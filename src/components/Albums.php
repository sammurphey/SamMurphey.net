<?php
	$albums_data = api_fetch("table=albums&alias=" . $data["id"] . "&sort_by=date&sort_dir=DESC");
	if ($albums_data) {
		echo "<article class='albums_section'><header class='panel'><h2>Albums</h2></header>";
		if (valExists("id", $albums_data)) {
			$albums_data = [$albums_data];
		}
		echo "<section class='grid'>";
		foreach($albums_data as $album) {
			echo "<div class='grid_item'><a href='" . $htp_root . $album["url"] . "'>";
				if(valExists("cover_img", $album)) {
					echo img_element($album["cover_img"]);
				}
				echo "<div class='container'><div class='content'>";
					echo "<h3><span class='subtitle'>" . $page_title . " - <br/></span><span class='title'>" . $album["title"] . "</span></h3>";
					echo "<p class='date'>" . $album["date"] . "</p>";
					echo "<div class='grid_item_sidebar'><p>";
						if (valExists("category", $album)) {
							echo "<span>" . ucSmart($album["category"]) . "</span>";
						}
						echo "<span>Album</span>";
					echo "</p></div>";
				echo "</div></div>";
			echo "</a></div>";
		}
		echo "</section></article>";
	}
?>