<?php
function sanitize($data) {
	return addslashes($data);
}
function escapeQuotes($data) {
	return str_replace("\"", "“", str_replace("'", "’", $data));
}
