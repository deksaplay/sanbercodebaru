const locator = require('../locator/TransaksiLocator')


class TransaksiPage {
    

    async click_transaksi() {
        cy.xpath(locator.datatestid.transaksi).click()
    }

    async click_daftar_transaksi() {
        cy.xpath(locator.datatestid.daftar_transaksi).click()
    }

   async verify_login_failed() {
    cy.get(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = TransaksiPage
