<header id="intro" class="music_player panel">
		<div class="corner"></div>
		<h1 id="page_title" <?php if ($page_hero_img) {
			echo "class='with_hero'";
		}?>><span class="corner-spacer">&nbsp;</span><?php echo $page_title; ?></h1>
		<?php
			if ($page_hero_img) {
				echo "<a href='" . $htp_root . "gallery/" . $page_hero_img . "' class='hero_img'>" . img_element($page_hero_img) . "</a>";
			}
			$alias_data = api_fetch("table=aliases&id=" . $data["alias"]);
			if ($alias_data) {
				echo "<p class='page_description subtitle'>By: <a href='" . $htp_root . $alias_data["url"] . "' title='Visit artist page.'>" . $alias_data["title"] . "</a></p>";
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
			if (valExists("stream", $data)) {
				$stream_links = json_decode($data["stream"], true);
				if (valExists("name", $stream_links)) {
					$stream_links = [$stream_links];
				}
				echo "<p class='page_description'>Streamable tracks coming soon..<br/>
				In the meantime please listen on the following platforms:<br/><nav class='page_description'><ul>";
				foreach($stream_links as $link) {
					echo "<li><a href='" . $link["url"] . "' title='Stream via " . $link["name"] . "' rel='noopener noreferrer' target='_blank'>" . $link["name"] . "</a></li>";
				}
				echo "</ul></nav>";
			}
		?>
</header>
