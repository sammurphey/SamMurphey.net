<section id="support" class="panel">
	<h2>Support</h2>
	<p>If you like what I do, please consider supporting the work with a small one time donation <3<br/>
	-or- even better, through recurring support on Patreon, where you'll get early access to the latest projects!</p>
	<nav>
		<ul>
	<?php
		echo "<li><a href='https://patreon.com/sammurphey' class='btn cta_btn'>";
		$btn_img = file_get_contents($cdn_root . "ui/social/patreon.svg");
		echo $btn_img;
		echo "Patreon</a></li>";
		echo "<li><a href='https://www.paypal.me/sammurphey' class='btn cta_btn'>";
		$btn_img = file_get_contents($cdn_root . "ui/social/paypal.svg");
		echo $btn_img;
		echo "PayPal</a></li>";
		echo "<li><a href='http://ko-fi.com/sammurphey' class='btn cta_btn'>";
		$btn_img = file_get_contents($cdn_root . "ui/social/kofi.svg");
		echo $btn_img;
		echo "KoFi</a></li>";
	?>
		</ul>
	</nav>
</section>
