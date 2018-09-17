<?php
// Enable Error Reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Init variables
$document_title = "Sam Murphey | Homepage";
$document_description = "My name is Samantha Murphey. I'm a 23 year old trans-lesbian hacker-girl living in LA, with a passion for merging art and code!";
$keywords = "code, art, music, design, games, transgender, lgbt, los angeles";
$document_url = "https://sammurphey.net";
$robots_txt= "INDEX FOLLOW";
$document_version = "7.3.3";
$creation_date = "9/16/2017";

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<!-- document setup -->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">

	<!-- proper meta -->
	<title><?php echo $document_title; ?></title>
	<meta name="description" content="<?php echo $document_description; ?>">
	<meta name="keywords" content="<?php echo $keywords; ?>">
	<meta name="author" content="Sam Murphey">
	<meta name="robots" content="<?php echo $robots_txt; ?>">
	<meta name="version" content="<?php echo $document_version; ?>">
	<meta name="creation_date" content="<?php echo $creation_date; ?>">
	<meta name="flattr:id" content="w1pd2k">

	<!-- lang & alternates -->
	<meta name="language" content="en">
	<link rel="alternate" href="<?php echo $document_url; ?>" hreflang="x-default">
	<link rel="alternate" href="<?php echo $document_url; ?>" hreflang="en">
	<link rel="cannonical" href="<?php echo $document_url; ?>">

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script',
	'https://www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-93371306-1', 'auto');
	ga('send', 'pageview');
	</script>
	<style>
		<?php require_once("./src/css/index.css"); ?>
	</style>
</head>
<body>
	<?php require_once("./src/App.php"); ?>
</body>
</html>
