var w = window,
	sm = sm || {};

sm.util = {
	log: function (text) {
		var msg = document.createElement("p"),
			x = sm.console.childNodes.length - 1;

		msg.id = "log_" + x;
		msg.innerHTML = text;
		sm.console.appendChild(msg);

	}
}

sm.init = {
	load_css: function () {
		var old_css = document.getElementById("defered_styles"),
			new_css = document.getElementById("stylesheets"),
			children = old_css.childNodes,
			child, link, href, i;

		for (i = 0; i < children.length; i += 1) {
			child = children[i].data
			href = child.split("href")
			href = href[1].split("\"");
			console.log(href[1])
			link = document.createElement("link");
			link.id = "css_" + i;
			link.rel = "stylesheet";

			link.href = href[1];
			new_css.appendChild(link);
		};
		new_css.removeChild(old_css);
		sm.util.log("Global CSS loaded.");
	}
};

w.onload = function () {
	setTimeout(function () {
		w.b = document.getElementById("body");
		sm.console = document.getElementById("console");
		sm.util.log("System starting up...");
		sm.init.load_css();
	}, 100);
};
