(function (module, window, undefined) {

	function print(obj) {
		var content = "";
		for(var i = 0; i < obj.blocks.length; i++) {
			var block = obj.blocks[i];
			content += "<h4>" + block.headline + "</h4><p>";
			for(var j = 0; j < block.lines.length; j++) {
				var line = block.lines[j];
				if(typeof line.value === "string" && line.value.match(/^(url:)\S+/) !== null) {
					content += "<a href=\"" + line.value.substring(4, line.value.length) + "\" target=\"_blank\">" + line.key + "</a>";
				} else {
					content += line.key + ": ";
					if(typeof line.value === "object" && line.value.length !== undefined) {
						line.value = line.value.join(", ");
					}
					content += line.value;
				}
				if(block.linebreaks === true) {
					content += "<br>";
				} else if(j < block.lines.length - 1) {
					content += " - ";
				}
			}
			content += "</p>";
		}
		window.document.getElementsByClassName('text')[0].innerHTML = content;

		window.document.getElementById('name').innerHTML = obj.me.name;
		window.document.getElementById('title').innerHTML = obj.me.title;
		window.document.getElementById('mail').innerHTML = obj.me.mail.replace("@", "[at]");
		window.document.getElementById('mail').href = "mailto:" + obj.me.mail;
		window.document.getElementById('image').src = obj.me.image;
	}

	function init() {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
		    if (request.readyState == 4 && request.status == 200) {
		        var json = JSON.parse(request.responseText);
		        print(json);
		    }
		}
		request.open("GET", "content.json", true);
		request.send();
	}

	init();

})((window.l = {}), window);