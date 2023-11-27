const locator = require('../locator/PesanLocator')


class PesanPage {
    
    

    async click_pesan() {
        cy.xpath(locator.datatestid.pesan).click()
    }

   async verify_login_failed() {
    cy.get(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = PesanPage
