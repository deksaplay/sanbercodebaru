const locator = require('../locator/PromosiLocator')


class PromosiPage {
   

    async click_promosi() {
        cy.xpath(locator.datatestid.promosi).click()
    }

   async verify_login_failed() {
    cy.get(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = PromosiPage
