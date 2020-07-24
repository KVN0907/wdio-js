const AmazonHomePage = require('../pageobjects/amazonHomePage');
const AmazonLoginPage = require('../pageobjects/amazonLoginPage');
// import {  } from '../pageobjects/amazonLoginPage';
// import { } from '../pageobjects/amazonPDPpage';
// import {  } from '../pageobjects/amazonProductListPage';
// import { amazonTdata } from '../testData/amazonTdata';



describe('Open Amazon Page', () => {
    
    xit('Should open and validate Amzon Logo', () => {

        AmazonHomePage.open();
        AmazonHomePage.validateHomePage();
        AmazonHomePage.search();
       
    });

    xit('Navigate to Login and should login sucessfully',() => {
        AmazonHomePage.accountsSignIn.click();
        AmazonLoginPage.login();
        AmazonHomePage.validateUserName();
    })
   


});


