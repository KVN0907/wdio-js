const base = require('./amazonBasePage');
const amazonTdata = require('../testData/amazonTdata');
const amazonBasePage = require('./amazonBasePage');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class amamzonProductListPage extends base {
    /**
     * define selectors using getter methods
     */
    get searchItem(){return $('//span[contains(text(),"FIFA 21 Standard Edition (PS4)")]')}
    get productPrice(){return $('#priceblock_ourprice')}

   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    search(){
        this.searchItem.scrollIntoView();
        
       // browser.pause();
     //   browser.switchWindow('FIFA 21 Standard Edition (PS4): Amazon.in: Video Games');
      /* var parentWindow = browser.getWindowHandle()
        this.searchItem.click();
        browser.pause(3000)
        var ID = browser.getWindowHandles()
        for(var i = 0; i< ID.length; i++){
            if( ID[i]!= parentWindow){
              browser.switchToWindow(ID[i])
              console.log(browser.getTitle());
              this.productPrice.isDisplayed();
                break;
            }
        }
        browser.pause(3000)
        browser.switchToWindow(parentWindow)  */

      this.switchToWindow(this.searchItem,this.productPrice);
    }
    open () {
        return super.open('');
    }
}

module.exports = new amamzonProductListPage();
