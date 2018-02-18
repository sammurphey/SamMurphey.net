var w = window,
	sm = {
		util: {
			add_new: {
				css: function (url) {
					var elem,
						siblings = document.getElementsByTagName("link"),
						sib_href, i, found_duplicate = false;
					url = String(url);
					if (url.indexOf("https") < 0) {
						url = sm.url_base + "css/" + url + ".css";
					}
					for (i = 0; i < siblings.length; i += 1) {
						sib_href = siblings[i].href;
						if (typeof sib_href !== "undefined") {
							if (sib_href.toLowerCase() == url.toLowerCase()) {
								found_duplicate = true;
							}
						}
					}
					if (!found_duplicate) {
						console.log("Adding: " + url);
						elem = document.createElement("link");
						elem.href = url;
						elem.rel = "stylesheet";
						sm.body.appendChild(elem);
					}
				},
				js: function (url) {
					var elem,
						siblings = document.getElementsByTagName("script"),
						sib_src, i, found_duplicate = false, func = false;
					url = String(url);
					if (url.indexOf("http") < 0) {
						func = sm.init[url];
						url = sm.url_base + "js/" + url + ".js";
					}
					for (i = 0; i < siblings.length; i += 1) {
						sib_src = siblings[i].src
						if (typeof sib_src !== "undefined") {
							if (sib_src.toLowerCase() == url.toLowerCase()) {
								found_duplicate = true;
							}
						}
					}
					if (!found_duplicate) {
						console.log("Activating: " + url);
						elem = document.createElement("script"),
						elem.setAttribute("async", "");
						elem.setAttribute("defer", "");
						elem.src = url;
						elem.type = "text/javascript";
						sm.body.appendChild(elem);
					} else if (func) {
						console.log("Restarting: " + url);
						func();
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
					sm.body.appendChild(link);
				};
				sm.body.removeChild(old_css);
			},
			replaceAll: function (target, search, replacement) {
				return target.split(search).join(replacement)
			},
			replaceAt: function (str, index, char) {
				return str.substr(0, index) + char + str.substr(index + char.length);
			},
			removeLastSlash: function (str) {
				return str.replace(/\/\s*$/, "");
			},
			throttle: function (id, cb, args) {
				sm.throttle_wait = sm.throttle_wait || {};
				if (typeof sm.throttle_wait[id] == "undefined") {
					sm.throttle_wait[id] = 0
				}
				if (sm.throttle_wait[id] <= 0) {
					if (typeof sm.throttle_timer !== "undefined") {
						if (typeof sm.throttle_timer[id] !== "undefined") {
							clearTimeout(sm.throttle_timer[id]);
						}
					} else {
						sm.throttle_timer = {};
					}
					if (typeof args !== "undefined") {
						cb(args);
					} else {
						cb();
					}
					sm.throttle_wait[id] = 1;
					sm.throttle_timer[id] = setTimeout(function () {
						sm.throttle_wait[id] -= 1;
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
							console.log("Xhr handshake successful!");
							resp = conn.responseText;
							if (url.indexOf(".json") > 0) {
								console.log("Parsing json response..");
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
				console.log("Activating xhr \"" + method + "\" connection to: " + url);
				conn.open(method, url, !0);
				conn.send(formatted_data);
			}
		},
		init: {
			init: function () {
				var i, j, link, links;
				sm.url_base = "http://127.0.0.1/sam/";
				sm.url = window.location.href.replace(sm.url_base, "");
				sm.url.split("/");
				sm.body = document.getElementById("body");
				sm.main = document.getElementById("main");
				sm.main_content = document.getElementById("main_content");
				sm.main_content_container = document.getElementById("main_content_container");
				sm.util.load_defered_css();
				sm.util.add_new.js("router");
				sm.util.add_new.css("desktop");
				i = setInterval(function () {
					if (typeof sm.router !== "undefined") {
						clearInterval(i);
						sm.router.getCurrentPage();
					} else {
						console.log("waiting..");
					}
				}, 100);
				links = document.getElementsByClassName("nav_item");
				for (j = 0; j < links.length; j += 1) {
					link = links[j];
					setTimeout(function (l) {
						l.classList.add("visible");
					}, j * 1E2, link);
				};
			}
		}
	};
w.onload = sm.init.init;
