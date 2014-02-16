Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading'
});

Router.map(function () {
	this.route('index', {
		path: '/',
		template: 'index'
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
		template: 'admin',
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
});