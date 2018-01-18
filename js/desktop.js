sm.route = sm.route || {};
sm.route.page = function () {
	var url = sm.url_dir;
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
		sm.util.add_new.js("home");
		//homepage
	}
};

//onload stuff
sm.init.desktop = function () {
	var i = 0, links = document.getElementsByClassName("nav_item"), link;
	for (i = 0; i < links.length; i += 1) {
		link = links[i];
		setTimeout(function (l) {
			l.classList.add("visible");
		}, i * 1E2, link);
	};
	w.addEventListener("resize", function () {
		sm.util.throttle(sm.route.viewport);
	});
};
sm.init.desktop();
