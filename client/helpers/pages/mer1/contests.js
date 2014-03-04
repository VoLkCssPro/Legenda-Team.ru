Template.contests.rendered = function() {
	$("#rulesConDotaI").tagsinput('items');
};


Template.contests.events({
	'click a[data-toggle="collapse"]': function(e) { e.preventDefault() },
	'click .deleteContest': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		if(target.hasAttribute("data-id")) {
			Contests.remove(target.getAttribute("data-id"))
		}
	}
});

Template.addContests.events({
	'click #addButtonContests': function() {
		$("#addButtonContests").button("loading");
		$("#rules").tagsinput('items')
		Contests.insert({
			'name': $('#name').val(), 
			'description': $('#description').val(), 
			'aim': $('#aim').val(), 
			'rules': $("#rules").tagsinput('items'),
			'game': $('#game').val()
		}, function() {
			$('#name').val('');
			$('#description').val('');
			$('#aim').val('');
			$("#addButtonContests").button("reset");
			$("#rules").tagsinput('removeAll');
		});
	}
});

Template.entryContests.events({
	'click .btnGiveEntry': function() {
		Contests.update(id, {
			$addToSet: {
				entryContests: {
					var url = $('urlInput');
					var desc = $('descInput');
				}
			}
		});
	}
})