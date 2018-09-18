<?php
function valExists($key, $arr) {
	if (array_key_exists($key, $arr) && $arr[$key]) {
		return true;
	}
	return false;
}
?>
