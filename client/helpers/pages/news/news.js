Template.prevNews.events({
	'click .deleteNews': function(e) {
		var target = e.currentTarget;
		if(!target) return;
		if(target.hasAttribute("data-id")) {
			News.remove(target.getAttribute("data-id"))
		}
	}
});

Template.addNews.events({
	'click #addBtnNews': function() {
		var titleNews = $('#titleNewsI').val();
		var temaNews = $('#temaNewsI').val();
		var shortNews = $('#shortNewsI').val();
		var descNews = $('#descNewsI').val();
		News.insert({'titleNews': titleNews, 'temaNews': temaNews, 'shortNews': shortNews, 'descNews': descNews}, function() {
			$('#titleNewsI').val('');
			$('#temaNewsI').val('');
			$('#shortNewsI').val('');
			$('#descNewsI').val('');
		});
	}
});