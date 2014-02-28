Contests = new Meteor.Collection('contests');

if (Meteor.isServer) {
	Contests.allow({
		insert: function (userId, doc) {
			if (Meteor.users.findOne({_id: userId, 'profile.isAdmin': true})) {
				return true;
			} else {
				return false;
			}
		},
		update: function (userId, doc, fields, modifier) {
			if (Meteor.users.findOne({_id: userId, 'profile.isAdmin': true})) {
				return true;
			} else {
				return false;
			}
		},
		remove: function (userId, doc) {
			if (Meteor.users.findOne({_id: userId, 'profile.isAdmin': true})) {
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