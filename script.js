(function ()  {
	var names = ["Harly", "Charlie" , "John", "Damon" , "juliet"]
	for (var i =0 ; i < names.length ; i ++) {
		var firstLetter =names[i].charAt(0).toLowerCase();
		if ( firstLetter === 'j') {
			byeSpeak.saygoodbye(names[i]);
        } else {
        	helloSpeak.sayhello(names[i]);
        }

	}
})();

