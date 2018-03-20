sm.router = sm.router || {};
sm.router.find_page = function (cb, args) {
	var url = sm.url_dir,
		data = false,
		data_addr = sm.url_base + "data/";
	console.log("Finding page: " + url);
	if (url.length > 1) {
		url.split("/");
		switch(true) {
			case (url[0].indexOf("music") >= 0): {

				break;
			}
			case (url[0].indexOf("code") >= 0): {

				break;
			}
			case (url[0].indexOf("art") >= 0): {

				break;
			}
			case (url[0].indexOf("store") >= 0): {

				break;
			}
			default: {
				// 404
			}
		}
	} else {
		data_addr += "pages/home";
	}
	data_addr += ".json";
	console.log(cb);
	if (args !== "undefined") {
		sm.util.xhr("GET", data_addr, false, cb, args);
	} else {
		sm.util.xhr("GET", data_addr, false, cb);
	}
};
