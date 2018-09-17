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
			$current_category_data = api_fetch("table=categories&category=".$category);
			?>
				<section id="<?php echo $category; ?>_category_preview">
					<header class="panel">
						<h2><?php echo $category; ?></h2>
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
				<section class='subcategories_previews'>
			<?php
			if ($category === "music" ){
				echo "<header class='panel'><h3>Aliases</h3></header>";
				$subcategories = api_fetch("table=aliases&sort_by=order");
			} else {
				$subcategories = api_fetch("table=".$category."_subcategories&sort_by=order");
			}
			if ($subcategories) {
				echo "<div class='panel_container'>";
				foreach($subcategories as $subcategory) {
					?>
						<div class="inline_panel">
							<div class="panel panel_header"></div>
							<div class="panel panel_article"></div>
						</div>
					<?php
				}
				echo "</div>";
			}
			echo "</section>";
		}
	?>
</article>
