var Client = require('../../lib/browser-client');

var client = new Client('http://localhost:2883?token=browser_client');

client.on('connected', function() {
	
	client.subscribe('chat');
	
	client.on('message', function(topic, message) {
		console.log('browser_client got: [' + topic + '] ' + message);
	});


	setInterval(function() {
		client.publish('chat', 'I\'m a message from browser_client.');
	}, 2000);

});