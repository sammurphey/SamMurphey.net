<section id="search_results" class="panel_wrapper">
	<header class='panel'><h2>Results:</h2></header>
	<?php
	if ($data) {
		if (valExists("id", $data)) {
			$data = [$data];
		}
		echo"<section class='grid'>";
			foreach($data as $result) {
				echo "<section class='grid_item'><a href='" . $htp_root . $result["url"] ."'>";
					if (valExists("cover_img", $result)) {
						echo img_element($result["cover_img"]);
					}
					echo "<div class='container'><div class='content'>";
						echo "<h3>" . $result["title"] . "</h3>";
						echo "<p class='date'>" . $result["date"] . "</p>";
						echo "<aside class='grid_item_sidebar'><p>";
							echo "<span>" . ucSmart($result["category"]) . "<br/></span>";
							echo "<span>" . ucSmart($result["subcategory"]) . "</span>";
						echo "</p></aside>";
					echo "</div></div>";
				echo "</a></section>";
			}
		echo "</section>";
	}
	?>
</section>
