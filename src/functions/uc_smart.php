<?php
//smart ucwords function
function ucSmart($string){
  return preg_replace_callback(
    "/\b(A|An|The|And|Of|But|Or|For|Nor|With|On|At|To|From|By)\b/i",
    function($matches){
      return strtolower($matches[1]);
    },ucwords($string)
  );
}
