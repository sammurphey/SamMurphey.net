<section id="project_imgs">
	<?php
		$proj_imgs = json_decode($data["imgs"], true);
		if ($proj_imgs) {
				echo "<nav><ul class='grid'>";
				foreach($proj_imgs as $proj_img) {
					echo "<li class='grid_item'><a href='" . $htp_root . "gallery/" . $proj_img . "'>" . img_element($proj_img) . "</a></li>";
				}
				echo "</ul></nav>";
		}
	?>
</section>
