sm.build = sm.build || {};
sm.build.skeleton = function (resp) {
	var elem, i, item;
	console.log("Building skeleton..");
	for (i = 0; i < resp.length; i += 1) {
		item = resp[i];
		elem = document.createElement("div");
		if (typeof item.id !== "undefined") {
			elem.id = item.id;
		}
		if (typeof item.class !== "undefined") {
			elem.className = item.class;
		}
		if (typeof item.content !== "undefined") {
			elem.innerHTML = item.content;
		}
		sm.main_content_container.appendChild(elem);
	}
};

//onload stuff
sm.init.desktop = function () {
	console.log("Init: Desktop");
	var link, links = document.getElementsByClassName("nav_item"),
		i = 0, int;
	for (i = 0; i < links.length; i += 1) {
		link = links[i];
		setTimeout(function (l) {
			l.classList.add("visible");
		}, i * 1E2, link);
	};
	int = setInterval(function () {
		if (sm.router.find_page !== "undefined") {
			clearInterval(int);
			sm.router.find_page(sm.build.skeleton);
		} else {
			console.log("waiting..");
		}
	}, 100)
};
sm.init.desktop();
