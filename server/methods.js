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
	'addEntryCon': function(conId, urlGiveEntry, descGiveEntry) {
		if (!this.userId) throw new Meteor.Error('Авторизуйтесь');
		if ( Contests.findOne( {"_id": conId, "entryConReady.userId": this.userId} ) ) throw new Meteor.Error('Вы уже учавствуете в конкурсе');
		var user = {
			userId: this.userId,
			urlGiveEntry: urlGiveEntry,
			descGiveEntry: descGiveEntry
		};
		Contests.update({_id: conId}, { $addToSet: {"entryConReady": user } });
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