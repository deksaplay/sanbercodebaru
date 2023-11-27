const locator = require('../locator/LogoutLocator')



class LogoutPage {
    
     async klik_nama() {
    cy.xpath(locator.datatestid.click_nama).click()
    }

    async klik_logout() {
        cy.xpath(locator.datatestid.keluar).click()
        }
}

module.exports = LogoutPage

