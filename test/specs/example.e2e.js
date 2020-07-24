const LoginPage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');
const homePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    
    it('Should search given location', () => {

        LoginPage.open();
        LoginPage.search('Manali');
        browser.react$('div', {
            props: { name: '30' }
        }).click();
        // browser.react$('div', {
        //     props: { name: '15' }
        // }).click();
      
        browser.pause(5000)
    });
});


