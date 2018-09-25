<article id="narrative" class="panel_wrapper">
	<?php
		$narrative = json_decode($data["narrative"], true);
		if ($narrative) {
			foreach ($narrative as $row) {
				echo "<section class='panel'>";
					if (valExists("i", $row)) {
							if (is_array($row["i"])) {
								foreach ($row["i"] as $img) {
									echo img_element($img);
								}
							} else {
								echo img_element($row["i"]);
							}
					}

					if (valExists("p", $row)) {
						echo "<dl class='text_elem'>";
							if (!is_array($row["p"])) {
								echo "<dd>" . $row["p"] ."</dd>";
							} else {
								foreach ($row["p"] as $str) {
									if (substr($str, 0, 1) === "#") {
										echo "<dt>" . str_replace("#", "", $str) . "</dt>";
									} else {
										echo "<dd>" . $str . "</dd>";
									}
								}
							}
						echo "</dl>";
					}
				echo "<p class='clear_left'></p></section>";
			}
		}
	?>
</article>
