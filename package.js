Package.describe({
    name: 'lablancas:template-helpers',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Use underscorejs and momentjs functions as template helpers',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/lablancas/template-helpers',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.4.2');
    api.use('underscore');
    api.use('momentjs:moment@2.9.0');
    api.use('blaze');
    
    api.addFiles('template-helpers.js');

    api.export('TemplateHelpers');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('lablancas:template-helpers');
    api.use('momentjs:moment@2.9.0');
    api.addFiles('template-helpers-tests.js');
    
});
