<header id="intro" class="music_player panel">
		<div class="corner"></div>
		<h1 id="page_title" <?php if ($page_hero_img) {
			echo "class='with_hero'";
		}?>><span class="corner-spacer">&nbsp;</span><?php echo $page_title; ?></h1>
		<?php
			if ($page_hero_img) {
				echo "<div class='hero_img'>" . img_element($page_hero_img) . "</div>";
			}
			$alias_data = api_fetch("table=aliases&id=" . $data["alias"]);
			if ($alias_data) {
				echo "<p class='subtitle'>By: <a href='" . $htp_root . $alias_data["url"] . "' title='Visit artist page.'>" . $alias_data["title"] . "</a></p>";
			}

			echo "<aside class='info_sidebar'>";
			echo "<p class='subtitle'>Released: <span>" . $data["date"] . "</span></p>";
			echo "<p class='subtitle'>Publisher: <a title='Visit publisher' rel='noopener noreferrer' target='_blank' ";
				if (valExists("label", $data)) {
					$label_data = json_decode($data["label"], true);
					echo "href='" . $label_data["url"] . "'>" . $label_data["name"];
				} else {
					echo "href='https://sammurphey.bandcamp.com'>Self Released";
				}
				echo "</a></p>";
			echo "</aside>";
		?>
</header>
