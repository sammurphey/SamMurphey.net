<header id="intro" class="panel search_intro">
		<div class="corner"></div>
		<h1 id='page_title'><span class="corner-spacer">&nbsp;</span>Search</h1>
		<form action="<?php echo $htp_root; ?>src/functions/process_search.php" class="search_box_container" method="post">
			<?php
				echo "<input type='text' name='search' id='search' ";
					if (strlen($search_term) > 0 && $search_term !== "blank_default") {
						echo "placeholder='" . $search_term . "'";
					}
				echo "/>";
				echo "<input type='submit' class='btn' value='Go' />";
			?>
		</div>
</header>
