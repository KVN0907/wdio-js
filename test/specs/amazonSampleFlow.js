const AmazonHomePage = require('../pageobjects/amazonHomePage');
const AmazonLoginPage = require('../pageobjects/amazonLoginPage');
const AmazonPlpPage = require("../pageobjects/amazonProductListPage");
const AmazonPDPpage = require("../pageobjects/amazonPDPpage");
const amazonPDPpage = require('../pageobjects/amazonPDPpage');
const amazonHomePage = require('../pageobjects/amazonHomePage');
//const { addFeature } = require('@wdio/allure-reporter').default
// import {  } from '../pageobjects/amazonLoginPage';
// import { } from '../pageobjects/amazonPDPpage';
// import {  } from '../pageobjects/amazonProductListPage';
// import { amazonTdata } from '../testData/amazonTdata';



describe('Open Amazon Page', () => {
    
    it('Should open and validate Amzon Logo', () => {
     //   allureReporter.addFeature('Feature');
        AmazonHomePage.open();
        AmazonHomePage.accountsSignIn.click();
        AmazonLoginPage.login();
        AmazonHomePage.validateUserName();
        AmazonHomePage.search();
        AmazonPlpPage.search();
        AmazonPDPpage.addToWishList();
        //amazonPDPpage.gotoWishList();
    })
});


