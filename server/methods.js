Meteor.methods({
	'refreshRS': function(username) {
		if (Meteor.users.findOne({_id: this.userId, 'profile.isAdmin': true})) {
			result = Meteor.users.update({}, {$set: {'profile.RS': 0}}, {multi: true});
			if (result) {
				return true
			} else {
				return false
			}
		} else {
			throw new Meteor.Error('Доступ запрещен');
		}
	}
});