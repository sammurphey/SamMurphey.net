sm.router = sm.router || {};
sm.router.getCurrentPage = function (cb, args) {
	var url,
		data = false,
		data_addr = sm.url_base + "data/";

	sm.url_base = "http://127.0.0.1/sam/";
	sm.url = window.location.href.replace(sm.url_base, "");
	console.log("Plain: " + sm.url);
	sm.url = sm.util.removeLastSlash(sm.url);
	console.log("Remove Last: " + sm.url);
	sm.url = sm.url.split("/");
	console.log("Shards:");
	console.dir(sm.url);
	//make a copy to manipulate safely
	url = sm.url;




	data_addr += ".json";
	console.log(cb);
	if (args !== "undefined") {
		sm.util.xhr("GET", data_addr, false, cb, args);
	} else {
		sm.util.xhr("GET", data_addr, false, cb);
	}
};
