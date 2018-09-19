<article class="overview_grid">
	<header class="panel">
		<?php
			$grid_url = false;
			switch($current_category) {
				case "music":
					$grid_title = "All Recent Music Releases";
					$grid_desc = [
						"Browse work from all of the aliases above.",
						"They are displayed in reverse-chronological order, with the most recent work first.",
						"Tap on a tile to learn more about it."
					];
					break;
				case "store":
					$grid_title = "All Products";
					$grid_desc = [
						"Browse items from all of the subcategories above.",
						"They are arranged with the newest items first.",
						"Tap on a tile to learn more about it."
					];
					break;
				default:
					$grid_title = "All Recent";
					if ($current_category !== "all") {
						 $grid_title .= ucSmart($current_category);
					} else {
						$grid_url = "view=overview&sort_by=date&sort_dir=DESC";
					}
					$grid_title .= " Projects";
					$grid_desc = [
						"Browse work from all of the subcategories above.",
						"They are displayed in reverse-chronological order, with the most recent work first.",
						"Tap on a tile to learn more about it."
					];
			}
			echo "<h2>" . $grid_title . "</h2><p>";
				if (is_array($grid_desc)) {
					foreach ($grid_desc as $line) {
						echo "<span>".$line."<br/></span>";
					}
				} else {
					echo $grid_desc;
				}
			echo "</p>";
		echo "</header>";
			if (!$grid_url) {
				$grid_url = "category=" . $current_category . "&view=overview&sort_by=date&sort_dir=DESC";
			}
			$grid_data = api_fetch($grid_url);
			if ($grid_data) {
				echo "<section class='grid'>";
					foreach ($grid_data as $grid_item) {
						$item_data = api_fetch("table=" . $grid_item["table"] . "&id=" . $grid_item["ref_id"]);
						if ($item_data) {
							echo "<div class='grid_item'><a href='" . $htp_root . $item_data["url"] ."'>";
								if (valExists("cover_img", $item_data)) {
									echo img_element($item_data["cover_img"]);
								}
								echo "<div class='container'><div class='content'>";
									echo "<h3>";
										if (valExists("alias", $item_data)) {
											echo "<span class='subtitle'>" . $item_data["alias"] . "<br/></span>";
										}
									echo "<span class='title'>" . $item_data["title"] . "</span></h3>";
									echo "<p class='date'>" . $item_data["date"] . "</p>";
									echo "<div class='grid_item_sidebar'><p>";
										echo "<span>" . ucSmart($grid_item["category"]) . "<br/></span>";
										echo "<span>" . ucSmart($grid_item["subcategory"]) . "</span>";
									echo "</p></div>";
								echo "</div></div>";
							echo "</a></div>";
						}
					}
				echo "</section>";
			}
		?>
</article>
