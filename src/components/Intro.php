<header id="intro" class="panel">
		<div class="corner"></div>
		<h1 id='page_title'><span class="corner-spacer"></span><?php echo $page_title; ?></h1>
		<?php
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
		?>
</header>
