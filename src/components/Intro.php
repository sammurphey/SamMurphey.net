<header id="intro" class="panel">
		<div class="corner"></div>
		<h1 id='page_title' <?php
		 	if ($page_profile_photo) {
				echo "class='with_profile'";
			}
		?>><span class="corner-spacer"></span><?php echo $page_title; ?></h1>
		<?php
			if ($page_profile_photo) {
				echo "<div class='profile_photo lrg'>" . img_element($page_profile_photo) . "</div>";
			}
			if ($page_description) {
				echo "<p id='page_description'>";
				if (is_array($page_description)) {
					foreach ($page_description as $line) {
						echo "<span>".$line."<br/></span>";
					}
				} else {
					echo $page_description;
				}
				echo "</p>";
			}
			if ($page_links) {
				echo "<nav class='external_links'><ul>";
				foreach($page_links as $link) {
					echo "<li><a href='" . $link["url"] . "' title='" . $link["name"] . "' class='btn chip sml' target='_blank' rel='noopener noreferrer'>";

						$link_img = $cdn_root . "ui/social/" . strtolower($link["name"]) . ".svg";

						$test = get_headers($link_img);
						if ($test[0] !== "HTTP/1.1 200 OK") {
							$link_img = $cdn_root . "social/web.svg";
						}

						echo "<img class='icon' src='" . $link_img . "'>";
					echo "</a></li>";
				}
				echo "</ul></nav>";
			}
		?>
</header>
