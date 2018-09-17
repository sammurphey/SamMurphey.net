<section id="intro">
	<div class="panel">
		<div class="corner"></div>
		<h1 id='page_title'><span class="corner-spacer"></span><?php echo $page_title; ?></h1>
		<?php
			if ($page_description) {
				echo "<p id='page_description'>";
				if (is_array($page_description)) {
					for ($i = 0; $i < count($page_description); $i++) {
						echo "<span>".$page_description[$i]."<br/></span>";
					}
				} else {
					echo $page_description;
				}
				echo "</p>";
			}
		?>
	</div>
</section>
