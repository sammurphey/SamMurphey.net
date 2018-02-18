sm.router = sm.router || {};
sm.router.getCurrentPage = function (cb, args) {
	var i,
		shard,
		shards,
		lastLoop = false,
		view = "overview",
		file = "all",
		sorting = "date";

	sm.url_base = "http://127.0.0.1/sam/";
	sm.url = window.location.href.replace(sm.url_base, "");
	console.log("Plain: " + sm.url);
	while(sm.url.charAt(sm.url.length - 1) == "/") {
		sm.url = sm.util.removeLastSlash(sm.url);
	}
	console.log("Remove Last: " + sm.url);
	sm.url = sm.url.split("/");
	console.log("Shards:");
	console.dir(sm.url);
	//make a copy to manipulate safely
	shards = sm.url;
	for (i = 0; i < shards.length; i += 1) {
		shard = shards[i];
		lastLoop = false;
		if (i + 1 == shards.length) {
			lastLoop = true;
		}
		switch(i) {
			case 0: {
				switch(shard) {
					case "": {
						//use defaults
						break;
					}
					case "music":
					case "code":
					case "art":
					case "store": {
						file = shard;
						break;
					}
					default: {
						view = "error";
						file = "404";
					}
				}
				break;
			} case 1: {
				switch(file) {
					case "music": {
						switch(shard) {
							case "": {
								break;
							}
							case "shtml":
							case "silentsynthesis":
							case "syntacticsugar": {
								file += "/" + shard;
								break;
							}
							default: {
								view = "error";
								file = "404";
							}
						}
						break;
					}
					case "code": {
						switch(shard) {
							case "": {
								break;
							}
							case "projects":
							case "labs": {
								file += "/shard";
								break;
							}
							default: {
								view = "error";
								file = "404";
							}
						}
						break;
					}
					case "art": {
						switch(shard) {
							case "": {
								break;
							}
							case "3d":
							case "design":
							case "illustration":
							case "photography":
							case "video": {
								file += "/" + shard;
								break;
							}
							default: {
								view = "error";
								file = "404";
							}
						}
						break;
					}
					case "store": {
						switch(shard) {
							case "": {
								break;
							}
							case "albums":
							case "fonts":
							case "icons":
							case "samplepacks":
							case "shirts": {
								file += "/" + shard;
								break;
							}
							default: {
								view = "error";
								file = "404";
							}
						}
						break;
					}
				}
				break;
			} case 2: {
				//tbd
				break;
			}
		}
	}
	file = sm.url_base + "data/" + file + ".json";
	console.log("View: " + view);
	console.log("File: " + file);

	if (args !== "undefined") {
	//	sm.util.xhr("GET", data_addr, false, cb, args);
	} else {
		//sm.util.xhr("GET", data_addr, false, cb);
	}
};
