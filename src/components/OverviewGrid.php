<article class="overview_grid">
	<header class="panel">
		<?php
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
					}
					$grid_title = " Projects";
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
		?>
	</header>
	<section class='grid'>

	</section>
</article>
