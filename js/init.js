var w = window,
	sm = sm || {};
sm.st = 0;
sm.util = {
	addStyle: function (elem, prop, val, vendors) {
		var i, ii, property, value
		if (!sm.util.isElem(elem)) {
			elem = document.getElementById(elem)
		}
		if (sm.util.isElem(elem)) {
			if (!sm.util.isArray(prop)) {
				prop = [prop]
				val = [val]
			}
			for (i = 0; i < prop.length; i += 1) {
				var thisProp = String(prop[i]),
					thisVal = String(val[i])
				if (typeof vendors !== "undefined") {
					if (!sm.util.isArray(vendors)) {
						vendors.toLowerCase() == "all" ? vendors = ["webkit", "moz", "ms", "o"] : vendors = [vendors]
					}
					for (ii = 0; ii < vendors.length; ii += 1) {
						elem.style[vendors[i] + thisProp] = thisVal
					}
				}
				thisProp = thisProp.charAt(0).toLowerCase() + thisProp.slice(1)
				elem.style[thisProp] = thisVal
			}
		}
	},
	load_css: function (url, cb, args) {
	},
	load_defered_css: function () {
		var old_css = document.getElementById("defered_styles"),
			new_css = document.getElementById("stylesheets"),
			children = old_css.childNodes,
			child, link, href, i;

		for (i = 0; i < children.length; i += 1) {
			child = children[i].data;
			href = child.split("href");
			href = href[1].split("\"");
			link = document.createElement("link");
			link.id = "css_" + i;
			link.rel = "stylesheet";

			link.href = href[1];
			new_css.appendChild(link);
		};
		new_css.removeChild(old_css);
	},
	events: {
		cancel: function (event) {
			sm.util.events.prevent(event)
			sm.util.events.stop(event)
		},
		prevent: function (event) {
			if (event && event !== "undefined" && typeof event !== "undefined") {
				event = event || window.event
				event.preventDefault()
			}
		},
		stop: function (event) {
			if (event && event !== "undefined" && typeof event !== "undefined") {
				event = event || window.event
				event.stopPropagation()
			}
		}
	},
	getSize: function (elem, prop) {
		if (!sm.util.isElem(elem)) {
			elem = document.getElementById(elem)
		}
		var size
		typeof prop !== "undefined" ? size = parseInt(elem.getBoundingClientRect()[prop], 10) : size = elem.getBoundingClientRect()
		return size
	},
	getTrg: function (event) {
		event = event || window.event
		if (event.srcElement) {
			return event.srcElement
		} else {
			return event.target
		}
	},
	isElem: function (elem) {
		return (sm.util.isNode(elem) && elem.nodeType == 1)
	},
	isArray: function(v) {
		return (v.constructor === Array)
	},
	isNode: function(elem) {
		return (typeof Node === "object" ? elem instanceof Node : elem && typeof elem === "object" && typeof elem.nodeType === "number" && typeof elem.nodeName==="string" && elem.nodeType !== 3)
	},
	isNumeric: function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n)
	},
	isObj: function (v) {
		return (typeof v == "object")
	},
	log: function (text) {
		var msg = document.createElement("p"),
			children = sm.console.childNodes,
			child, i, x = children.length;
		if (x) {
			for (i = 0; i < x; i += 1) {
				child = children[i]
				switch(true) {
					case (i + 2 == x):
						sm.util.addStyle(child, "bottom", "52px");
						break;
					case (i + 1 == x):
						sm.util.addStyle(child, "bottom", "28px");
						break;
					default:
						sm.util.addStyle(child, "bottom", "76px");
				};
			};
		} else {
			x = 2;
		};
		x -= 1;
		msg.id = "log_" + x;
		msg.className = "log_msg";
		msg.innerHTML = text;
		sm.console.appendChild(msg);
	},
	replaceAll: function(target, search, replacement) {
		return target.split(search).join(replacement)
	},
	replaceAt: function(str, index, char) {
		return str.substr(0, index) + char + str.substr(index + char.length);
	},
	xhr: function (method, url, data, cb, args) {
		var conn = new XMLHttpRequest,
			resp = false,
			i, data_items, formatted_data = "";

		conn.onreadystatechange = function() {
			if (conn.readyState === 4) {
				if (conn.status === 200) {
					resp = conn.responseText;
					if (url.indexOf(".json") > 0) {
						resp = JSON.parse(resp, true);
					}
				} else {
					resp = conn.status;
				}
				console.log(resp);
				if (typeof cb !== "undefined") {
					typeof args !== "undefined" ? cb(resp, args) : cb(resp);
				} else {
					return resp;
				}
			}
		}
		method = method.toUpperCase();
		if (typeof data !== "undefined") {
			if (sm.util.isArray(data)) {
				data_items = data[0];
				for (i in data_items) {
					if (formatted_data.length > 0) {
						formatted_data += "&";
					} else {
						formatted_data += "?";
					}
					formatted_data += i + "=" + data_items[i];
				}
				url += formatted_data;
				formatted_data = "";
			} else {
				formatted_data = data;
			}
		}
		conn.open(method, url, !0);
		conn.send(formatted_data);
	}
};
sm.interact = {
	scroll: {
		main: function () {
			var st = w.m.scrollTop;
			sm.defer_scroll = sm.defer_scroll || 0
			if (sm.defer_scroll <= 0) {
				if (st > sm.st) {//dwn
					if (!w.b.classList.contains("int")) {
						w.b.classList.add("int");
						w.b.classList.remove("ext");
					}
				} else if (st < sm.st){//up
					if (w.b.classList.contains("int")) {
						w.b.classList.remove("int");
						w.b.classList.add("ext");
					}
				};
				sm.defer_scroll = 1;
				sm.scroll_int = setInterval(function () {
					sm.defer_scroll -= 1;
					if (sm.defer_scroll <= 0) {
						clearTimeout(sm.scroll_int);
					}
				}, 60);
			};
			sm.st = st;
		}
	}
};
sm.build = function (resp) {
	console.log("building")
	w.m.childNodes[0].innerHTML += JSON.stringify(resp);
}
w.onload = function () {
	w.b = document.getElementById("body");
	w.m = document.getElementById("main");
	//sm.util.log("System starting up...");
	sm.util.load_defered_css();
	w.m.childNodes[0].onscroll = sm.interact.scroll.main;
	var i = 0, links = document.getElementsByClassName("nav_item"), link;
	for (i = 0; i < links.length; i += 1) {
		link = links[i];
		setTimeout(function (l) {
			l.classList.add("visible");
		}, i * 1E2, link);
	};
	sm.url = window.location.origin + "/";
	sm.util.xhr("get", sm.url + "data/ref/music.json", "", sm.build);
};
