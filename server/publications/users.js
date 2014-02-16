Meteor.publish(null, function() {
	return Meteor.users.find({}, {fields: {
		'username': 1,
		'emails': 1,
		'profile': 1
	}});
});