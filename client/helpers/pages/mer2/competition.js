Template.mer2.rendered = function () {
	$("#descriptionCompetitionInput").tagsinput('items');
};

Template.mer2.events({
	'click a[data-toggle="collapse"]': function(e) { e.preventDefault() },
	'click .deleteCompetition': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		if(target.hasAttribute("data-id")) {
			Competition.remove(target.getAttribute("data-id"))
		}
	}
});

Template.addCompetition.events({
	'click #btnAddCompetition': function() {
		var nameCompetition = $('#nameCompetitionInput').val();
		var descriptionCompetition = $('#descriptionCompetitionInput').tagsinput('items');
		Competition.insert({'nameCompetition': nameCompetition, 'descriptionCompetition': descriptionCompetition}, function() {
			$('#nameCompetitionInput').val('');
			$("#descriptionCompetitionInput").tagsinput('removeAll');
		})
	}
})

Template.competitionPlayers.events({
	'click .addPlayer': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		var id = target.getAttribute("data-id")
		Meteor.call('addPlayer', id, function (error, result) {
			if (error) {
				alert(error)
			} else {
				alert(result)
			}
		});
	}
})

