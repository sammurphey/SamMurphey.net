<article id="narrative" class="panel_wrapper">
	<?php
		$narrative = json_decode($data["narrative"], true);
		if ($narrative) {
			foreach ($narrative as $row) {
				echo "<section class='panel'>";
					if (valExists("i", $row)) {
							if (is_array($row["i"])) {
								foreach ($row["i"] as $img) {
									echo "<a href='" . $htp_root . "gallery/" . $img . "'>" . img_element($img) . "</a>";
								}
							} else {
								echo "<a href='" . $htp_root . "gallery/" . $row["i"] . "'>" . img_element($row["i"]) . "</a>";
							}
					}

					if (valExists("p", $row)) {
						//echo "<dl class='text_elem'>";
							if (!is_array($row["p"])) {
								echo "<p>" . $row["p"] ."</p>";
							} else {
								foreach ($row["p"] as $str) {
									if (substr($str, 0, 1) === "#") {
										echo "<h2>" . str_replace("#", "", $str) . "</h2>";
									} else {
										echo "<p>" . $str . "</p>";
									}
								}
							}
						//echo "</dl>";
					}
				echo "</section>";
			}
		}
	?>
</article>
