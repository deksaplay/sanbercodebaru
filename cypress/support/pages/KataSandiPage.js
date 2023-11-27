const locator = require('../locator/UbahKataSandiLocator')


class KataSandiPage {
   

    async type_password(password) {
        cy.xpath(locator.datatestid.pass_input)
            .type(password)
            .should('have.value', password)
    }

    async click_login_button() {
        cy.xpath(locator.datatestid.btn_login).click()
    }

   async verify_login_failed() {
    cy.get(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = KataSandiPage
