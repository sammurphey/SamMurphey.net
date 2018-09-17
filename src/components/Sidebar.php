<?php
	$last_updated = "9/15/2018";
 ?>
<aside id="sidebar">
	<div class="contents">
		<div id="console">
			<p>Last Updated: <span><?php echo $last_updated; ?></span></p>
			<p>Contact: <a href="mailto:weirdoonthebus@gmail.com">weirdoonthebus@gmail.com</a></p>
			<p>Source: <a href="https://github.com/sammurphey/SamMurphey.net.git">github.com/sammurphey/SamMurphey.net.git</a></p>
		</div>
		<a href="https://api.qrserver.com/v1/create-qr-code/?data=https://sammurphey.net/<?php echo $current_path ?>&size=666x666"} id="qr_wrapper" class="">
			<img id="qr_code" src="https://api.qrserver.com/v1/create-qr-code/?data=https://sammurphey.net<?php echo $current_path; ?>&size=64x64&bgcolor=989898" alt="QR Code" title="Share" />
		</a>
	</div>
</aside>
