<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400i" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
<link href="<?php echo $htp_root; ?>src/css/App.css" rel="stylesheet" media="none" onload="if(media!='all')media='all'" rel="stylesheet">
<?php
require_once("./src/components/Header.php");
// functions
echo "<main id='app'>";
		require_once("./src/functions/img_element.php");
		require_once("./src/components/Router.php");
		include_once("./src/components/Footer.php");
echo "</main>";
?>
