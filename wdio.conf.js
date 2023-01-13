const logger = require('./logger/logger');

    exports.config = {
    
        specs: [
            './specs/*.js'
        ],
        exclude: [
        ],
        maxInstances: 10,
        capabilities: [{
    
          
            maxInstances: 5,
         
            browserName: 'chrome',
            acceptInsecureCerts: true
    
        }],
    
        // Test Configurations
       
        logLevel: 'error',
     
        logLevels: {
            webdriver: 'error',
        },
        
        bail: 0,
       
        baseUrl: 'https://www.google.ru',
      
        waitforTimeout: 10000,
     
        connectionRetryTimeout: 120000,
     
        connectionRetryCount: 3,
    
        // Test runner services
    
        services: ['chromedriver'],
        framework: 'mocha',
        reporters: ['spec'],
        mochaOpts: {
            ui: 'bdd',
            timeout: 60000
        },
        
      
        // Hooks
        before: async () => {
            browser.addCommand('open', async function (url) {
                logger.info(`Opening ${url}`);
                return this.url(url);
            });
        },

        beforeTest: async () => {
            await browser.maximizeWindow();
        },
    
    }