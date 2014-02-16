var assert = require('assert');

suite('DDP', function() {
  suite('.send', function() {
    test('emitting ready just after the sub', function(done, server, client) {
      server.evalSync(function() {
        Posts = new Meteor.Collection('posts');
        Meteor.publish('abc', function() {
          return Posts.find();
        });
        emit('return');
      });

      var data = client.evalSync(function() {
        __fast_render_config = {
          subscriptions: {abc: true},
          subscriptionIdMap: {}
        };
        Meteor.default_connection._livedata_data = function(msg) {
          if(msg.frGen) {
            setTimeout(function() {
              emit('return', {
                msg: msg, 
                frData: __fast_render_config
              });
            }, 0);
          }
        };

        Meteor.subscribe('abc');
      });

      var idMap = {};
      idMap[data.msg.subs[0]] = 'abc';
      assert.deepEqual(idMap, data.frData.subscriptionIdMap);
      done();
    });
  });

  suite('._livedata_data', function() {
    test('actual ready comes back', function(done, server, client) {
      server.evalSync(function() {
        Posts = new Meteor.Collection('posts');
        Meteor.publish('abc', function() {
          return Posts.find();
        });
        emit('return');
      });

      client.evalSync(function() {
        __fast_render_config = {
          subscriptions: {abc: true},

          subscriptionIdMap: {},
          loadedSubscriptions: {}
        };
        Meteor.subscribe('abc');
        emit('return');
      });

      Wait(server, 800);

      var frData = client.evalSync(function() {
        emit('return', __fast_render_config);
      });

      assert.deepEqual(frData, {
        subscriptions: {},
        subscriptionIdMap: {},
        loadedSubscriptions: {abc: true}
      });
      done();
    });

    test('added-fix', function(done, server, client) {
      server.evalSync(function() {
        Posts = new Meteor.Collection('posts');
        Posts.insert({_id: 'one', abc: 10});

        Meteor.publish('abc', function() {
          return Posts.find();
        });
        emit('return');
      });

      client.evalSync(function() {
        //to make sure, revertedBackToOriginal is never happening
        __fast_render_config.subscriptions['fake-one'] = true;
        Posts = new Meteor.Collection('posts');
        Meteor.subscribe('abc');
        emit('return');
      });

      Wait(server, 500);

      var posts = client.evalSync(function() {
        var msg = {"msg":"added","collection":"posts","id":"one","fields":{"abc": 60}};
        Meteor.default_connection._livedata_data(msg);
        emit('return', Posts.find().fetch());
      });

      assert.deepEqual(posts, [
        {_id: 'one', abc: 60}
      ])

      done();
    });

    test('added-fix:ignore-simulations', function(done, server, client) {
      server.evalSync(function() {
        Posts = new Meteor.Collection('posts');
        Posts.allow({
          insert: function() {return true;}
        });

        Meteor.publish('abc', function() {
          return Posts.find();
        });
        emit('return');
      });

      client.evalSync(function() {
        Posts = new Meteor.Collection('posts');
        Meteor.subscribe('abc');
        emit('return');
      });

      Wait(server, 500);

      client.evalSync(function() {
        Posts.insert({_id: "cool", abc: 100});
        emit('return');
      });

      Wait(server, 200);

      var posts = client.evalSync(function() {
        emit('return', Posts.find().fetch());
      });

      assert.deepEqual(posts, [
        {_id: 'cool', abc: 100}
      ])

      done();
    });
  });
});
