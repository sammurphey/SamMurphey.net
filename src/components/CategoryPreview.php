<article class="category_preview">
	<?php
		// Get category data
		$current_categories = [];

		// Choose which ones to show this time
		$categories_data = api_fetch("table=categories&sort_by=id");
		$categories = [];
		$separated_categories = [];

					// for sorting in a minute..
		function catord($a, $b) {
			return strcmp($a["order"], $b["order"]);
		}

		foreach($categories_data as $cat) {
			if (valExists("subcategories", $cat)) {
				if ($current_category == "all" || $current_category == $cat["category"]) {
					$subs = json_decode($cat["subcategories"], true);
					$cat["subcategories"] = [];
					foreach ($subs as $sub) {
						$sub_index = $sub - 1;
						$cat["subcategories"][] = $categories_data[$sub_index];
					}
					usort($cat["subcategories"], "catord");
					$current_categories[] = $cat;
				}
			}
		}

		foreach ($current_categories as $category) {
			echo "<section id='" . $category["category"] . "_category_preview'>";
				if ($current_category == "all") {
					echo "<header class='panel'>";
						echo "<h2>" . ucSmart($category["title"]) . "</h2>";
						echo "<p>";
						if (is_array($category["description"])) {
							foreach($category["description"] as $desc){
								echo "<span>". $desc . "<br/></span>";
							}
						} else {
							echo $category["description"];
						}
						echo "</p>";
						echo "<p><a href='" . $htp_root . strtolower($category["url"]) . "'>See everything on the " . strtolower($category["title"]) . " page.</a></p>";
					echo "</header>";
				}
				if (valExists("subcategories", $category)) {
					$subcategories = $category["subcategories"];
					echo "<section class='subcategories_previews'>";
						if ($category["category"] === "music"){
							echo "<header class='panel'><h3>Aliases</h3></header>";
						}
						echo "<div class='panel_container'>";
							foreach ($subcategories as $subcategory) {
								echo "<section class='inline_panel'><a href='" . $htp_root . $subcategory['url'] ."'>";
									echo "<header class='panel panel_header'>";
										if (valExists("cover_img", $subcategory)) {
											echo "<div class='profile_bg'><div class='bg_container'>" . img_element($subcategory["cover_img"], "tall") . "</div></div>";
										}
										if (valExists("profile_img", $subcategory)){
											echo "<div class='profile_photo'>" . img_element($subcategory["profile_img"]) . "</div>";
										}
										echo "<h3>" . $subcategory["title"] . "</h3>";
									echo "</header>";
									echo "<article class='panel panel_article'>";
										if (valExists("description", $subcategory)) {
											$subcategory_description = $subcategory["description"];
											echo "<p>";
												if (substr($subcategory_description, 0, 1) === "[") {
													$subcategory_description = json_decode($subcategory_description, true);
													echo $subcategory_description[0];
												} else {
													echo $subcategory["description"];
												}
											echo "</p>";
										}

									echo "</article>";
								echo "</a></section>";
							}
						echo "</div>";
					echo "</section>";
				}
		}
	?>
</article>
