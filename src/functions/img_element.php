<?php
function img_element ($id, $override_shape = false) {
	$img_data = api_fetch("table=imgs&id=" . $id);
	$src_base = "https://cdn.sammurphey.net/v2/";
	$img_src = $src_base . $img_data["path"] . "." . $img_data["ext"];


	//ALT + TITLE
	if ($img_data["alt"]) {
		$img_alt = $img_data["alt"];
	} else {
		$img_alt = $img_data["title"];
	}
	if ($img_data["title"]) {
		$img_title = $img_data["title"];
	} else {
		$img_title = $img_data["alt"];
	}
	// SRC SET
	if ($img_data["sizes"]) {
		$img_srcset = "";
		for ($i = 0; $i < $img_data["sizes"]; $i++) {
			$new_img_path = $src_base . $img_data["path"];
			$tmp_img_size = $i + 1;
			switch(true) {
				case ($tmp_img_size < 7):
					$new_img_size = $tmp_img_size * 100;
					break;
				case ($tmp_img_size < 14):
					$new_img_size = 600 + (($tmp_img_size - 6) * 200);
					break;
				default:
					$new_img_size = 2000 + (($tmp_img_size - 13) * 400);
					break;
			}
			$img_srcset .= $new_img_path . "__" . $new_img_size . "px." . $img_data["ext"] . " " . $new_img_size . "w, ";
			if ($tmp_img_size === $img_data["sizes"]) {
				$img_srcset .= $new_img_path . "." . $img_data["ext"] . " " . $img_data["original_size"] . "w, ";
			}
		}
	} else {
		$img_srcset = false;
	}

	//POSITIONING
	$img_container_style = false;
	switch($img_data["position"]) {
		case "left":
			$img_container_style = "flex-direction: row";
			break;
		case "right":
			$img_container_style = "flex-direction: row-reverse";
			break;
		case "top":
			$img_container_style = "flex-direction: column";
			break;
		case "bottom":
			$img_container_style = "flex-direction: column-reverse";
			break;
		default:
			$img_container_style = "justify-content: center; align-items: center";
	}
	//SHAPE
	$img_style = false;
	if ($override_shape) {
		$img_shape = $override_shape;
	} else {
		$img_shape = $img_data["shape"];
	}
	switch($img_shape) {
		case "tall":
			$img_style = "height: auto; width: 100%";
			break;
		default:
			$img_style = "height: 100%; width: auto";
	}
	$img_elem = "<div class='img_container' data-id='" . $id . "' data-type='" . $img_data["ext"] . "' data-shape='" . $img_shape . "' data-pos='" . $img_data["position"] . "' style='" . $img_container_style . "'>";

	switch($img_data["ext"]) {
		case "mp4":
		return false;
			$img_elem .= "<video autoplay loop><source src='" . $img_src . "' type='video/mp4'></video>";
			break;
		default:
			$img_elem .= "<img alt='" . $img_alt . "' title='" . $img_title . "' style='" . $img_style . "' src='" . $img_src . "'";
			if ($img_srcset) {
				$img_elem .= "srcset='" . $img_srcset . "'";
			}
			$img_elem .= " onload='(function(e){e.parentNode.classList.add(\"loaded\")})(this)'/>";
	}
	$img_elem .= "</div>";
	return $img_elem;
}
