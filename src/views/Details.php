<article class="details_view">
	<?php
		switch ($current_category) {
			case "music":
				include_once($php_root . "src/components/MusicPlayer.php");
				break;
			case "img":
				include_once($php_root . "src/components/FullSizeImg.php");
				break;
			case "search":
				include_once($php_root . "src/components/SearchIntro.php");
				include_once($php_root . "src/components/SearchResults.php");
				break;
			default:
				include_once($php_root . "src/components/Intro.php");
		}
		if ($current_category !== "search" && ($page_credits || $page_keywords)) {
			include_once($php_root . "src/components/Meta.php");
		}
		if ($related_pages) {
			include_once($php_root . "src/components/Related.php");
		}
	?>
</article>
