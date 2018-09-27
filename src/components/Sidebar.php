<aside id="sidebar">
		<!-- links -->
		<section class="rotated_contents">
			<p class="content_block">
				<!-- replace titles with icons for smaller views -->
				<span class="sidebar_title lrg">Last Updated: </span>
				<span class="sidebar_title med">Updated: </span>
				<span class="sidebar_title sml">🕗</span>
				<span class="sidebar_desc"><?php echo $last_updated; ?></span>
			</p>
			<p  class="content_block">
				<span class="sidebar_title lrg">Contact: </span>
				<span class="sidebar_title med">Email: </span>
				<span class="sidebar_title sml">✉️</span>
				<a class="sidebar_desc" href="mailto:weirdoonthebus@gmail.com">weirdoonthebus@gmail.com</a>
			</p>
			<p  class="content_block">
				<span class="sidebar_title lrg">Source: </span>
				<span class="sidebar_title med">Clone: </span>
				<span class="sidebar_title sml">🐱🐙</span>
				<a class="sidebar_desc lrg" href="https://github.com/sammurphey/SamMurphey.net.git">github.com/sammurphey/SamMurphey.net.git</a>
			</p>
		</section>
		<!-- QR -->
		<footer>
			<a href="https://api.qrserver.com/v1/create-qr-code/?data=https://sammurphey.net/<?php echo $current_path ?>&size=666x666"} id="qr_wrapper" class="">
				<img id="qr_code" src="https://api.qrserver.com/v1/create-qr-code/?data=https://sammurphey.net<?php echo $current_path; ?>&size=64x64&bgcolor=989898" alt="QR Code" title="Share" />
			</a>
		</footer>
</aside>
