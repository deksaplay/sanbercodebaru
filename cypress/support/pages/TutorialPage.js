const locator = require('../locator/TutorialLocator')


class TutorialPage {
    

    async click_tutorial() {
        cy.xpath(locator.datatestid.tutorial).click()
    }

    async klik_nama() {
        cy.xpath(locator.datatestid.click_nama).click()
    }


   async verify_login_failed() {
    cy.get(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = TutorialPage
