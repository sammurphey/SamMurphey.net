<section id="related">
	<header class="panel">
		<h2>Releated</h2>
		<p>If you enjoyed this, you might want to check out these too...</p>
	</header>
	<nav><ul class="grid">
		<?php
			foreach($related_pages as $page) {
				echo "<li class='grid_item'><a href='" . $htp_root . $page["url"] . "'>";
					if (valExists("cover_img", $page)) {
						echo img_element($page["cover_img"]);
					}
					echo "<div class='container'><div class='content'>";
						echo "<h3>" . $page["title"] . "</h3>";
						echo "<p class='date'>" . $page["date"] . "</p>";
						echo "<aside class='grid_item_sidebar'><p>";
							echo "<span>" . ucSmart($page["category"]) . "<br/></span>";
							echo "<span>";
								if ($page["category"] == "music") {
									echo $page["alias"];
								} else {
									echo ucSmart($page["subcategory"]);
								}
							echo "<span>";
						echo "</p></aside>";
					echo "</div></div>";
				echo "</a></li>";
			}
		?>
	</ul></nav>
</section>
