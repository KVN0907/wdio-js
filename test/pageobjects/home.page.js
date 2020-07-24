const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get inputLocation(){ return $("//input[@id='bigsearch-query-attached-query']")}
    get checkInDate() {return browser.react$('t', {
        props: { name: 'Add dates' }
    }).click()
    }
    get selectCheckInDate() {return browser.react$('t', {
        props: { name: '1' }
    }).click()
    }
    get nrCheckInDate(){return $('body.with-new-header.touch:nth-child(2)')}
    get selectDate(){return $('body.with-new-header.touch:nth-child(2) tr:nth-child(1) td:nth-child(7) div:nth-child(1)')}
    get checkOutDate(){return $('//div[contains(text(),"Check out")]')};
    get searchButton(){return $('//button[@type="submit"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
 
    search(location){
        this.searchButton.click();
        this.inputLocation.setValue(location);
        this.nrCheckInDate.click();  
        //this.checkOutDate.click();
       
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
