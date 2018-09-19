<?php
?>

<article class="category_preview">
	<?php
		// Get category data
		$current_categories = [];

		// Choose which ones to show this time
		if ($current_category === "all") {
			$categories_data = api_fetch("table=categories&sort_by=order");
			foreach($categories_data as $cat) {
				$current_categories[] = $cat["category"];
			}
		} else {
			$current_categories[] = $current_category;
		}

	// Display selected categories
		foreach ($current_categories as $category) {
			if ($current_category === "all") {
				$current_category_data = api_fetch("table=categories&category=".$category);
				?>
					<section id="<?php echo $category; ?>_category_preview">
						<header class="panel">
							<h2><?php echo ucSmart($category); ?></h2>
							<p>
							<?php
								if (is_array($current_category_data["description"])) {
									foreach($current_category_data["description"] as $line) {
										echo "<span>". $line . "<br/></span>";
									}
								} else {
									echo $current_category_data["description"];
								}
							?>
							</p>
						</header>
				<?php
			}
			echo "<section class='subcategories_previews'>";
			if ($category === "music" ){
				echo "<header class='panel'><h3>Aliases</h3></header>";
				$subcategories = api_fetch("table=aliases&sort_by=order");
			} else {
				$subcategories = api_fetch("table=".$category."_subcategories&sort_by=order");
			}
			if ($subcategories) {
				echo "<div class='panel_container'>";
				if (array_key_exists("id", $subcategories)) {
					$subcategories = [$subcategories];
				}
				foreach($subcategories as $subcategory) {
					?>
					<div class="inline_panel">
						<a href="<?php echo $htp_root . $subcategory['url']; ?>">
							<div class="panel panel_header">
							<?php
								if (array_key_exists("cover_img", $subcategory) && $subcategory["cover_img"]) {
									echo "<div class='profile_bg'><div class='bg_container'>" . img_element($subcategory["cover_img"], "tall") . "</div></div>";
								}
								if (array_key_exists("profile_img", $subcategory) && $subcategory["profile_img"]) {
									echo "<div class='profile_photo'>" . img_element($subcategory["profile_img"]) . "</div>";
								}
							echo "<h3>" . $subcategory["title"] . "</h3>";
							?>
							</div>
							<div class="panel panel_article">
								<?php
									if (array_key_exists("description", $subcategory)) {

										echo "<p>";
										if (is_array($subcategory["description"])) {
											foreach ($subcategory["description"] as $line) {
												echo "<span>" . $line . "<br/></span>";
											}
										} else {
											echo $subcategory["description"];
										}
										echo "</p>";
									}
								?>
							</div>
						</a>
					</div>
				<?php
				}
				echo "</div>";
			}
			echo "</section></section>";
		}
	?>
</article>
