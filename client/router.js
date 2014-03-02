Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});

Router.map(function () {
	this.route('index', {
		path: '/',
		template: 'index',
		waitOn: function() {
			Meteor.subscribe('news');
		},
		data: function() {
			return {
				news: function() {
					var news = News.find({}, {sort: {date: -1}}).map(function(doc, index, cursor) {
				    	var i = _.extend(doc, {index: index});
				    	i.index++;
				    	return i;
					});
					return news;
				}
			}
		}
	});

	this.route('users', {
		path: '/users',
		template: 'users',
		waitOn: function() {
			return [
				Meteor.subscribe('users'),
			]
		},
		data: function() {
			return {
				users: Meteor.users.find()
			}
		}
	});

	this.route('admin', {
		path: '/admin',
		template: 'admin'
	});

	this.route('contests', {
		path: '/contests',
		template: 'contests',
		waitOn: function() {
			return [
				Meteor.subscribe('contests')
			]
		},
		data: {   // {{contestsDota}}
			contestsDota: function() { 
				return Contests.find({game: 'Dota 2'});
			},
			contestsWot: function() {
				return Contests.find({game: 'WoT'});
			},
			contestsCs: function() {
				return Contests.find({game: 'CS 1.6'});
			},
			contestsCss: function() {
				return Contests.find({game: 'CS:S'});
			},
			contestsCsgo: function() {
				return Contests.find({game: 'CS:GO'});
			}
		}
	});

	this.route('mer2', {
		path: '/mer2',
		template: 'mer2',
		waitOn: function() {
			return [
				Meteor.subscribe('competition')
			]
		},
		data: function() {
			return {
				competition: Competition.find()
			}
		}
	});

	this.route('mer3', {
		path: '/mer3',
		template: 'mer3'
	});

	this.route('stat', {
		path: '/stat',
		template: 'stat',
		waitOn: function() {
			return [
				Meteor.subscribe('users'),
			]
		},
		data: function() {
			return {
				users: function() {
					var users = Meteor.users.find({}, {sort: {'profile.RS': -1}}).map(function(doc, index, cursor) {
				    	var i = _.extend(doc, {index: index});
				    	i.index++;
				    	return i;
					});
					return users;
				}
			}
		}
	});

	this.route('user', {
		path: '/:username',
		template: 'user',
		waitOn: function() {
			return [
				Meteor.subscribe('users'),
			]
		},
		data: function() {
			return Meteor.users.findOne({username: this.params.username});
		}
	});
});