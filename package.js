// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'brettle:bootstrap-with-injected-meta-tags',  // http://atmospherejs.com/brettle/bootstrap
  summary: 'twbs:bootstrap with required meta tags injected at top of head.',
  version: '3.3.5',
  git: 'https://github.com/brettle/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.use('meteorhacks:inject-initial', 'server');
  api.addFiles([
    'dist/fonts/glyphicons-halflings-regular.eot',
    'dist/fonts/glyphicons-halflings-regular.svg',
    'dist/fonts/glyphicons-halflings-regular.ttf',
    'dist/fonts/glyphicons-halflings-regular.woff',
    'dist/fonts/glyphicons-halflings-regular.woff2',
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
  api.addFiles([
    'dist/js/meteor-add-meta.js'
  ], 'server');
});
