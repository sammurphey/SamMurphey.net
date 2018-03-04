sm.build = sm.build || {};
sm.build.skeleton = function (resp) {
	var i, elem, item;
	for (i = 0; i < resp.length; i += 1) {
		item = resp[i];
		elem = document.createElement("div");
		elem.className = "panel";
		elem.innerHTML = "<p>" + item.name + "</p>";
		sm.main_content.appendChild(elem);
	}
}
