/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class amazonBasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
       return browser.url('https://www.amazon.in/')
    }

    switchToWindow(parentElement, childElement){
        var parentWindow = browser.getWindowHandle()
        parentElement.click();
        var ID = browser.getWindowHandles()
        for(var i = 0; i< ID.length; i++){
            if( ID[i]!= parentWindow){
              browser.switchToWindow(ID[i])
              console.log(browser.getTitle());
              childElement.isDisplayed();
              break;
            }
        }
        //browser.waitUntil
       // browser.switchToWindow(parentWindow)
    }
    
}
