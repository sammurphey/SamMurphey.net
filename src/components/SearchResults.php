<section id="search_results" class="panel_wrapper">
	<header class='panel'><h2>Results:</h2></header>
	<?php
	if ($data) {
		if (valExists("id", $data)) {
			$data = [$data];
		}
		echo"<nav><ul class='grid'>";

			foreach($data as $result) {
				echo "<li class='grid_item'><a href='" . $htp_root . $result["url"] ."'>";
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
				echo "</a></li>";
			}
		echo "</ul></nav>";
	} else {
		echo "<section class='panel'>";
		if (strlen($search_term) > 0 && $search_term !== "blank_default") {
			echo "<p>Sorry we couldn't find anything that matched your search.</p>";
		} else {
			echo "<p>Enter keywords in the box above to display relevant projects here.</p>";
		}
		echo "</section>";
	}
	?>
</section>
