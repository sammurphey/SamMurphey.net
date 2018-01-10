var w = window,
	sm = sm || {};

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
		sm.util.log("Global CSS loaded.");
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
						sm.util.addStyle(child, "bottom", "53px");
						break;
					case (i + 1 == x):
						sm.util.addStyle(child, "bottom", "29px");
						break;
					default:
						sm.util.addStyle(child, "bottom", "77px");
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
	}
};
sm.interact = {
	scroll: {
		main: function () {
			sm.util.log("scrolling");
		}
	}
};

w.onload = function () {
	setTimeout(function () {
		w.b = document.getElementById("body");
		sm.console = document.getElementById("console").getElementsByClassName("container")[0]
		sm.util.log("System starting up...");
		sm.util.load_defered_css();
		w.onscroll = sm.interact.scroll.main();
		var i = 0;
		for (i = 0; i < 12; i += 1) {
			setTimeout(function (i) {
				sm.util.log("newMessage #" + i);
			}, 600 * i, i + 1);
		};
	}, 100);
};
