Meteor.startup(function() {
	console.log('Meteor TicTacToe Running...');
	Onlines.remove({});
	Users.remove({});
});

Meteor.setInterval(function() {
	Onlines.clearAll();
}, Onlines.INTERVAL);
