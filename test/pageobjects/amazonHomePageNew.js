const BasePage = require('./amazonBasePage');
const data = require('../testData/amazonTdata');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class amazonHomePageNew extends BasePage {
    /**
     * define selectors using getter methods
     */
    
    get amazonLogo(){return $('.nav-sprite.nav-logo-base:nth-child(1)')}
    get accountsSignIn(){return $('Account & Lists')}
    get validateUser(){return $('a.nav-a.nav-a-2.nav-truncate:nth-child(2)>div>span]')}
    get searchBox(){return $('twotabsearchtextbox')}
    get submit(){return $('div.nav-search-submit.nav-sprite > input.nav-input')}
    get searchItem(){return $('//span[contains(text(),"FIFA 21 Standard Edition (PS4)")]')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
 
    validateHomePage(){
        let webText= this.amazonLogo.getText();
        console.log(webText);
        expect(webText).toEqual(data.amazonLogo);
     }
       
    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new amazonHomePageNew();
