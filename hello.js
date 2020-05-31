(function (window) {
	var helloSpeak = {};
	var greeting = "Hello ";
	helloSpeak.sayhello= function(name) {
		console.log(greeting + " " + name);
    }

    window.helloSpeak = helloSpeak;
	}) (window);
