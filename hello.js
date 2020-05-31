(function (window) {
	var helloSpeak = new Object();
	var greeting = "Hello ";
	helloSpeak.sayhello= function(name) {
		console.log(greeting + " " + name);
    }

    window.helloSpeak = helloSpeak;
	}) (window);
