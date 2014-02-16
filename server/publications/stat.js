Meteor.publish('users', function() {
	return Meteor.users.find({}, {sort: {score: -1, name: 1}});
});
