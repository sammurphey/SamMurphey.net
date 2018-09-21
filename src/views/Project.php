<article class="project_view">
	<?php
		switch ($current_category) {
			case "music":
				include_once($php_root . "src/components/MusicPlayer.php");
				include_once($php_root . "src/components/MusicInfo.php");
				break;
			default:
				include_once($php_root . "src/components/Intro.php");
				break;
		}
	?>
</article>
