exports.config = {

    directConnect: true,
    
    capabilities: {
        'browserName': 'chrome'
    },
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './features/*.feature'
    ],

    onPrepare: function () {

        browser.manage().window().maximize();

    },
    cucumberOpts: {
        require: ['./features./StepDefinitions/*.js']
    }
};