<section id="metadata" class="panel">
	<h2>Metadata</h2>
	<?php
		if ($page_credits) {
			echo "<p class='subtitle'>Credits: ";
			if (is_array($page_credits)) {
				foreach($page_credits as $credit) {
					echo "<span>" . $credit . "<br/></span>";
				}
			} else {
				echo "<span>" . $page_credits . "</span>";
			}
			echo "</p>";
		}
		if ($page_keywords) {
			echo "<p class='subtitle'>Keywords: ";
			$processed_keywords = [];
			if (is_array($page_keywords)) {
				foreach($page_keywords as $keyword) {
					$processed_keywords[] = "<a href='" . $htp_root . "search/" . $keyword . "'>" . $keyword . "</a>";
				}
				$processed_keywords = implode(", </span><span>", $processed_keywords);
				echo "<span>" . $processed_keywords . "</span>";
			} else {
				echo "<span>" . $page_keywords . "</span>";
			}
			echo "</p>";
		}
	?>
</section>
