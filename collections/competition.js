Competition = new Meteor.Collection('competition');

if (Meteor.isServer) {
	Competition.allow({
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

	Meteor.publish('competition', function() {
		return Competition.find()
	});
}