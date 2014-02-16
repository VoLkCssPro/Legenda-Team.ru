Meteor.users.allow({
	insert: function (userId, doc) {
		if (Meteor.users.findOne({_id: userId, "profile.isAdmin": true})) {
			return true
		}
	},
	update: function (userId, doc, fields, modifier) {
		if (Meteor.users.findOne({_id: userId, "profile.isAdmin": true})) {
			return true
		}
	},
	remove: function (userId, doc) {
		if (Meteor.users.findOne({_id: userId, "profile.isAdmin": true})) {
			return true
		}
	}
});