<article class="project_view">
	<?php
		switch ($current_category) {
			case "music":
				include_once($php_root . "src/components/MusicPlayer.php");
				if (valExists("songs", $data) || valExists("adtl_imgs", $data)){
					include_once($php_root . "src/components/MusicInfo.php");
				}
				break;
			default:
				include_once($php_root . "src/components/Intro.php");
				echo "<section id='project_info'>";
					if (valExists("narrative", $data)) {
						include_once($php_root . "src/components/Narrative.php");
					}
				echo "</section>";
				if (valExists("imgs", $data)) {
					include_once($php_root . "src/components/ProjectImgs.php");
				}
				break;
		}
		if ($page_credits || $page_keywords) {
			include_once($php_root . "src/components/Meta.php");
		}
		if ($related_pages) {
			include_once($php_root . "src/components/Related.php");
		}
	?>
</article>
