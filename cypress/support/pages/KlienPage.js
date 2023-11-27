const locator = require('../locator/KlienLocator')


class KlienPage {
  

    async click_login_button() {
        cy.xpath(locator.datatestid.btn_login).click()
    }

   async verify_login_failed() {
    cy.get(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = KlienPage
