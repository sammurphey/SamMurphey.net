var w = window,
	sm = {};
sm.route = {
	viewport: function () {
		var x = w.innerWidth || document.documentElement.clientWidth || sm.body.clientWidth
		if (x >= 1024) {
			sm.util.add_new.js("desktop");
		} else {
			sm.util.add_new.js("mobile");
		}
	}
};
sm.util = {
	add_new: {
		css: function () {},
		js: function (url) {
			var elem = document.createElement("script"),
				siblings = document.getElementsByTagName("script"),
				sib_src, i, found_duplicate = false;
			url = url.indexOf("http") >= 0 ? url : sm.url_base + "js/" + url + ".js";
			elem.setAttribute("async", "");
			elem.setAttribute("defer", "");
			elem.type = "text/javascript";
			elem.src = url;
			for (i = 0; i < siblings.length; i += 1) {
				sib_src = siblings[i].src
				if (typeof sib_src !== "undefined") {
					if (sib_src.toLowerCase() == url.toLowerCase()) {
						found_duplicate = true;
					}
				}
			}
			if (!found_duplicate) {
				sm.body.appendChild(elem);
			}
		}
	},
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
	replaceAll: function(target, search, replacement) {
		return target.split(search).join(replacement)
	},
	replaceAt: function(str, index, char) {
		return str.substr(0, index) + char + str.substr(index + char.length);
	},
	throttle: function (cb, args) {
		sm.throttle_wait = sm.throttle_wait || 0
		if (sm.throttle_wait <= 0) {
			clearTimeout(sm.throttle_timer);
			typeof args !== "undefined" ? cb(args) : cb();
			sm.throttle_wait = 1;
			sm.throttle_timer = setTimeout(function () {
				sm.throttle_wait -= 1;
			}, 60);
		}
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
}

sm.init = sm.init || {};
sm.init.init = function () {
	sm.util.load_defered_css();
	sm.url = window.location.href.split(".net/");
	sm.url_base = sm.url[0] + ".net/";
	sm.url_dir = sm.url[1];
	sm.body = document.getElementById("body");
	sm.main = document.getElementById("main");
	sm.inner_main = sm.main.childNodes[0];
	sm.route.viewport();
};

w.onload = sm.init.init;
