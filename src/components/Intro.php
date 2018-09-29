<header id="intro" class="panel<?php if ($current_category == "all") {
	echo " homepage_intro";
}?>">
		<div class="corner"></div>
		<h1 id='page_title' <?php
			if ($page_profile_photo) {
				echo "class='with_profile'";
			}
			if ($current_view == "project" || $current_view == "details") {
				if ($page_hero_img) {
					echo "class='with_hero'";
				}
			}
		?>><span class="corner-spacer">&nbsp;</span><?php echo $page_title; ?></h1>
		<?php
			if ($page_profile_photo) {
				echo "<div class='profile_photo lrg'>" . img_element($page_profile_photo) . "</div>";
			}
			if ($current_view == "project" || $current_view == "details") {
				if ($page_hero_img) {
					echo "<div class='hero_img'><a href='" . $htp_root . "gallery/" . $page_hero_img . "'>" . img_element($page_hero_img) . "</a></div>";
				}
			}
			if ($page_description) {
				echo "<p class='page_description'>";
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
			if (valExists("cta_text", $data)) {
				$cta_text = $data["cta_text"];
				echo "<p class='page_description'>";
					if (substr($cta_text, 0, 1) === "[") {
						$cta_text = json_decode($cta_text, true);
						foreach($cta_text as $line) {
							echo "<span>" . $line . "<br/></span>";
						}
					} else {
						echo $cta_text;
					}
				echo "</p>";
			}
			if (valExists("cta_btns", $data)) {
				$cta_btns = json_decode($data["cta_btns"], true);
				if (is_array($cta_btns)) {
					if (valExists("name", $cta_btns)) {
						$cta_btns = [$cta_btns];
					}
					echo "<nav class='page_description'><ul>";
						foreach($cta_btns as $btn) {
							echo "<li><a href='" . $btn["url"] . "' rel='noopener noreferrer' class='btn cta_btn' target='_blank'>";
								$btn_img = $cdn_root . "ui/social/"; if (valExists("icon",$btn)) {
									$btn_img .= strtolower($btn["icon"]);
								} else {
									$btn_img .= strtolower($btn["name"]);
								}
								$btn_img .= ".svg";
								$test = get_headers($btn_img);
								if ($test[0] !== "HTTP/1.1 200 OK") {
									$btn_img = $cdn_root . "ui/social/web.svg";
								}
								$btn_img = file_get_contents($btn_img);
								echo $btn_img;
							echo $btn["name"];
							echo "</a></li>";
						}
					echo "</ul><nav>";
				}
			}
			if ($current_view == "404") {
				echo "<nav class='back_home_link'><a href='" . $htp_root . "' class='btn'>Back to Home</a></nav>";
			}
			echo "<div class='clear_left'></div>";
		?>
</header>
