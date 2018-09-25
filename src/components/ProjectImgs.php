<section id="project_imgs">
	<?php
		$proj_imgs = json_decode($data["imgs"], true);
		if ($proj_imgs) {
				echo "<article class='grid'>";
				foreach($proj_imgs as $proj_img) {
					echo "<section class='grid_item'><a href='" . $htp_root . "gallery/" . $proj_img . "'>" . img_element($proj_img) . "</a></section>";
				}
				echo "</article>";
		}
	?>
</section>
