<article class="project_view">
	<?php
		switch ($current_category) {
			case "music":
				include_once($php_root . "src/components/MusicPlayer.php");
				break;
			default:
				include_once($php_root . "src/components/Intro.php");
				break;
		}
	?>
</article>
