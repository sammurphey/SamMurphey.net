<?php
function api_fetch($params, $public = true) {
	$api_url = "https://api.sammurphey.net/v3/index.php?" . $params;
	if ($public) {
		$api_url .= "&public=true";
	}
	$api_res = file_get_contents($api_url);
	if (strlen($api_res) > 2) {
		$api_json = json_decode($api_res, true);
		if (count($api_json) === 1) {
			$api_json = $api_json[0];
		}
		return $api_json;
	} else {
		return false;
	}
}
?>
