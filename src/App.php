<!-- DELAY CSS LOADING -->
<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400i" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
<link href="<?php echo $htp_root; ?>src/css/App.css" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
<!-- FALLBACK, LOAD IMMEDIATELY -->
<noscript>
	<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400i" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
	<link href="<?php echo $htp_root; ?>src/css/App.css" rel="stylesheet" media="all" rel="stylesheet">
</noscript>
<?php
require_once("./src/components/Header.php");
echo "<main id='app'>";
		require_once("./src/functions/img_element.php");
		require_once("./src/components/Router.php");
		include_once("./src/components/Footer.php");
echo "</main>";
?>
