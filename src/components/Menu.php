<label for="menu_checkbox" id="menu_btn" class='btn header_btn'>
	<svg class="sml icon" width="32" height="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path class='color' d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
</label>
<input id="menu_checkbox" name="menu_checkbox" type="checkbox" />
<nav id="menu">
	<label for="menu_checkbox" id="close_menu_btn" class='btn header_btn'>
		<svg class="sml icon" width="32" height="32" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
	</label>
	<ul>
		<li>
			<a href="<?php echo $htp_root;?>music" class="btn">Music</a>
		</li>
		<li>
			<a href="<?php echo $htp_root;?>code" class="btn">Code</a>
		</li>
		<li>
			<a href="<?php echo $htp_root;?>art" class="btn">Art</a>
		</li>
		<li>
			<a href="<?php echo $htp_root;?>design" class="btn">Design</a>
		</li>
		<li>
			<a href="<?php echo $htp_root;?>store" class="btn">Store</a>
		</li>
	</ul>
</nav>
