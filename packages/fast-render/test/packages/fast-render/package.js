var fs = Npm.require('fs');
var path = Npm.require('path');

Package.describe({
  "summary": "a way to render the initial page super fast!"
});

Npm.depends({
  "connect": "2.12.0"
});

Package.on_use(function(api) {
  api.use(['minimongo', 'livedata', 'mongo-livedata', 'ejson', 'underscore', 'webapp', 'routepolicy', 'accounts-base'], ['server']);
  api.use(['underscore', 'deps', 'ejson'], ['client']);

  // This is needed due to Meteor Issue #1358
  //   https://github.com/meteor/meteor/issues/1358
  // The 'weak' flag doesn't support non-core (ie. atmosphere) packages yet.
  if(isIronRouterExists()) {
    api.use(['iron-router'], ['client', 'server'], {weak: true});
  }

  //a hack to detect if IR has been added or removed from the app
  //  if IR was not there on the app and added later, FR cannot detect it,
  //  since Meteor caches packages. this is how we force FR to invalidate the cache.
  api.add_files('../../.meteor/packages', ['client', 'server']);

  api.add_files([
    'lib/server/inject_data.html',
    'lib/server/inject_config.html',
  ], 'server', {isAsset: true}); 

  api.add_files([
    'lib/server/utils.js',
    'lib/server/fast_render.js',
    'lib/server/context.js',
    'lib/server/inject.js',
    'lib/server/iron_router_support.js',
  ], 'server');  

  api.add_files([
    'lib/vendor/cookies.js',
    'lib/vendor/deepExtend.js',
    'lib/client/log.js',
    'lib/client/fast_render.js',
    'lib/client/ddp_update.js',
    'lib/client/data_handler.js',
    'lib/client/iron_router_support.js',
    'lib/client/auth.js'
  ], 'client'); 

  api.export('FastRender', ['client', 'server']);
  api.export('__init_fast_render', ['client']);
});

function isIronRouterExists() {
  var meteorPackages = fs.readFileSync(path.resolve('.meteor/packages'), 'utf8');
  return !!meteorPackages.match(/iron-router/);
}
