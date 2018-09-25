<section class="narrative">
	<article class="story_mode">
		<?php
			$narrative = json_decode($data["narrative"], true);
			if ($narrative) {
				foreach ($narrative as $row) {
					echo "<section class='panel_wrapper'>";
					foreach ($row as $panel) {
						if (valExists("p", $panel)) {
							echo "<section class='panel text_elem'>";
								if (!is_array($panel["p"])) {
									echo "<p>" . $panel["p"] ."</p>";
								} else {
									foreach ($panel["p"] as $str) {
										if (substr($str, 0, 1) === "#") {
											echo "<h2>" . str_replace("#", "", $str) . "</h2>";
										} else {
											echo "<p>" . $str . "</p>";
										}
									}
								}
							echo "</section>";
						} elseif (valExists("i", $panel)) {
							echo "<section class='panel img_elem'>";
								if (is_array($panel["i"])) {
									foreach ($panel["i"] as $img) {
										echo img_element($img);
									}
								} else {
									echo img_element($panel["i"]);
								}
							echo "</section>";
						}

					}
					echo "</section>";
				}
			}
		?>
	</article>
</section>
