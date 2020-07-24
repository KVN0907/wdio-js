const base = require('./amazonBasePage');
const amazonTdata = require('../testData/amazonTdata');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class amazonPDPpage extends base {
    /**
     * define selectors using getter methods
     */
   get productTitle(){return $('#productTitle')}
   get productPrice(){return $('#priceblock_ourprice')}
   get addToWishListButton(){return $('#add-to-wishlist-button-submit')}
   get yourWishList(){return $('=Your Wish List')}
   get userMenu(){return $('//span[contains(text(),"Account & Lists")]')}
   get closeWishList(){return $('header.a-popover-header>button')}
   get viewWishlist(){return $('//span[contains(text(),"View Wish List")]')}

   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    addToWishList(){
        expect(this.productTitle.getText()).toEqual(amazonTdata.pdpTitle);
        expect(this.productPrice.getText()).toContain(amazonTdata.price);
        this.addToWishListButton.click();
        
    }

    gotoWishList(){
       
        this.viewWishlist.click();
        this.userMenu.moveTo(30,60);
        this.yourWishList.click();
    }
    open () {
        return super.open('');
    }
}

module.exports = new amazonPDPpage();
