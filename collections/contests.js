Contests = new Meteor.Collection('contests');

if (Meteor.isServer) {
	Contests.allow({
		insert: function (userId) {
			if (Meteor.users.findOne(userId).profile.isAdmin == true) {
				return true;
			} else {
				return false;
			}
		},
		update: function (userId) {
			if (Meteor.users.findOne(userId).profile.isAdmin == true) {
				return true;
			} else {
				return false;
			}
		},
		remove: function (userId) {
			if (Meteor.users.findOne(userId).profile.isAdmin == true) {
				return true;
			} else {
				return false;
			}
		}
	});

	Meteor.publish('contests', function() {
		return Contests.find()
	});
}