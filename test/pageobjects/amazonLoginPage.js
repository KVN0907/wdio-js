const base = require('./amazonBasePage');
const amazonTdata = require('../testData/amazonTdata');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class amazonLoginPage extends base {
    /**
     * define selectors using getter methods
     */
   get loginTitle(){return $('.a-spacing-small:nth-child(1)')}
   get emailField(){return $('#ap_email')}
   get continueButton(){return $('#continue')}
   get passwordField(){return $('#ap_password')}
   get loginButton(){return $('#signInSubmit')}

   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    login(){
        console.log(this.loginTitle.getText());
        expect(this.loginTitle.getText()).toEqual(amazonTdata.loginTitle)
        this.emailField.setValue(amazonTdata.email);
        this.continueButton.click();
        this.passwordField.setValue(amazonTdata.password);
        this.loginButton.click();

    }
    open () {
        return super.open('');
    }
}

module.exports = new amazonLoginPage();
