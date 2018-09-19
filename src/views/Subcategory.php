<article class="subcategory_view">
	<?php
		include_once($php_root . "src/components/Intro.php");
		if ($current_category === "music") {
			include_once($php_root . "src/components/Albums.php");
			include_once($php_root . "src/components/Singles.php");
		} else {
			include_once($php_root . "src/components/SubcategoryGrid.php");
		}
	?>
</article>
