<article class="<?php echo $current_view; ?>_grid">
	<header class="panel">
		<?php
		$grid_title = false;
		$grid_desc = false;
		$grid_url = false;

			switch($current_view) {
				case "overview": {
					$grid_url = "category=" . $current_category . "&view=overview&sort_by=date&sort_dir=DESC";
					switch($current_category) {

						case "music": {
							$grid_title = "All Recent Music Releases";
							$grid_desc = [
								"Browse work from all of the aliases above.",
								"They are displayed in reverse-chronological order, with the most recent work first.",
								"Tap on a tile to learn more about it."
							];
							break;
						}
						case "store": {
							$grid_title = "All Products";
							$grid_desc = [
								"Browse items from all of the subcategories above.",
								"They are arranged with the newest items first.",
								"Tap on a tile to learn more about it."
							];
							break;
						}
						case "all": {
							$grid_url = "view=overview&sort_by=date&sort_dir=DESC";
						}
						default: {
							$grid_title = "All Recent";
							if ($current_category !== "all") {
								 $grid_title .= ucSmart($current_category);
							}
							$grid_title .= " Projects";
							$grid_desc = [
								"Browse work from all of the subcategories above.",
								"They are displayed in reverse-chronological order, with the most recent work first.",
								"Tap on a tile to learn more about it."
							];
						}
					}
					break;
				}
				case "subcategory": {
					$grid_url = "subcategory=" . $current_subcategory . "&view=overview&sort_by=date&sort_dir=DESC";
					if ($current_subcategory == "3d") {
						$grid_title = "All Recent 3D Work";
					} elseif ($current_subcategory == "social") {
						$grid_title = "All Recent Social Media Campaigns";
					} else {
						$grid_title = "All Recent " . ucSmart($current_subcategory);
					}
					break;
				}
			}
			if ($grid_title) {
				echo "<h2>" . $grid_title . "</h2>";
			}
			if ($grid_desc) {
				echo "<p>";
				if (is_array($grid_desc)) {
					foreach ($grid_desc as $line) {
						echo "<span>".$line."<br/></span>";
					}
				} else {
					echo $grid_desc;
				}
				echo "</p>";
			}
		echo "</header>";
			$grid_data = api_fetch($grid_url);
			if ($grid_data) {
				echo "<nav><ul class='grid'>";
					if (valExists("id", $grid_data)) {
						//	Returned one result.
						$grid_data = [$grid_data];
					}
					foreach ($grid_data as $grid_item) {
						echo "<li class='grid_item'><a href='" . $htp_root . $grid_item["url"] ."'>";
							if (valExists("cover_img", $grid_item)) {
								echo img_element($grid_item["cover_img"]);
							}
							echo "<div class='container'><div class='content'>";
								echo "<h3>" . $grid_item["title"] . "</h3>";
								echo "<p class='date'>" . $grid_item["date"] . "</p>";
								echo "<aside class='grid_item_sidebar'><p>";
									echo "<span>" . ucSmart($grid_item["category"]) . "<br/></span>";
									echo "<span>" . ucSmart($grid_item["subcategory"]) . "</span>";
								echo "</p></aside>";
							echo "</div></div>";
						echo "</a></li>";
					}
				echo "</ul></nav>";
			}
		?>
</article>
