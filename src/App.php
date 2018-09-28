<!-- DELAY CSS LOADING -->
<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400i" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
<link href="<?php echo $htp_root; ?>src/css/App.css" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
<!-- FALLBACK, LOAD IMMEDIATELY -->
<noscript>
	<style>
		.img_container {
			animation: flicker_on 1s linear forwards!important;
		}
	</style>
	<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400i" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
	<link href="<?php echo $htp_root; ?>src/css/App.css" rel="stylesheet" media="all" rel="stylesheet">
</noscript>
<?php
require_once($php_root . "src/components/Header.php");
echo "<main id='app'>";
		require_once($php_root . "src/functions/security.php");
		require_once($php_root . "src/functions/img_element.php");
		require_once($php_root . "src/components/Router.php");
		include_once($php_root . "src/components/Footer.php");
echo "</main>";
?>
