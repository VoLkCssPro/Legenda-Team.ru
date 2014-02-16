Template.stat.events({
	'click .fineRS': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		if(target.hasAttribute("data-id")) {
			Meteor.users.update({_id: target.getAttribute("data-id")}, {$inc: {"profile.RS": -5}});
		}
	},
	'click .incRS': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		if(target.hasAttribute("data-id")) {
			Meteor.users.update({_id: target.getAttribute("data-id")}, {$inc: {"profile.RS": 5}});
		}
	},
	'click .refreshRS': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		if(target.hasAttribute("data-id")) {
			Meteor.users.update({_id: target.getAttribute("data-id")}, {$set: {"profile.RS": 0}});
		}
	},
	'click .refreshAllRS': function() {
		Meteor.call('refreshRS', function (error, result) {
			if (error) {
				alert(error)
			}
		});
	},

});