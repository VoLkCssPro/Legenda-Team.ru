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
	},
	'addPlayer': function(id) {
		if (!this.userId) throw new Meteor.Error('Авторизуйтесь');
		var user = Meteor.users.findOne(this.userId);
		if (Competition.findOne({_id: id, "members.username": user.username})) throw new Meteor.Error('Вы уже участвуете в этом соревновании');
		Competition.update(id, {
			$addToSet: {
				members: {
					username: user.username,
					skype: user.profile.skype
				}
			}
		});
		return "Успешно"
	}
});