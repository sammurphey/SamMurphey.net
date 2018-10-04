<?php
function sanitize($data) {
	return addslashes($data);
}
function escapeQuotes($data) {
	$str = str_replace("'", "’", $data);
	$res_str = array_chunk(explode('"',$str),2);
	foreach( $res_str as &$val){
	   $val  = implode('“',$val);
	}
	return implode('”',$res_str);
}
