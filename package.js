Package.describe({
  name: 'mfq:errors',
  summary: 'A pattern to display errors to users',
  version: '1.0.0'
  git: 'https://github.com/MFQ/meteor-errors.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  // api.addFiles('mfq:errors.js');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors_list.js', 'errors_list.html', 'errors_list.js'], 'client');
  if (api.export)
    api.export('Errors');

});

Package.onTest(function(api) {
  api.use('mfq:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');
  api.addFiles('mfq:errors-tests.js', 'client');
});
