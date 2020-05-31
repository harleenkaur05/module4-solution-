function (window){
	var byeSpeak = new Object();
	var greeting = "GoodBye ";
	byeSpeak.saygoodbye = function saygoodbye(name) {
		console.log(greeting + " " + name);
	}

	window.byeSpeak = byeSpeak;
})(window);
