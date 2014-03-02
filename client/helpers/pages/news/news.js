Template.prevNews.events({
	'click .deleteNews': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		if(target.hasAttribute("data-id")) {
			News.remove(target.getAttribute("data-id"))
		}
	},
});

Template.addNews.events({
	'click #addBtnNews': function() {
		News.insert({
				'title': $('#titleNewsI').val(), 
				'tema': $('#temaNewsI').val(), 
				'short': $('#shortNewsI').val(), 
				'desc': $('#descNewsI').val(),
				'date': Date.now()
			}, function() {
				$('#titleNewsI').val('');
				$('#temaNewsI').val('');
				$('#shortNewsI').val('');
				$('#descNewsI').val('');
		});
	}
});
