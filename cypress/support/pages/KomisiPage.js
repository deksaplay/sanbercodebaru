const locator = require('../locator/KomisiLocator')


class KomisiPage {
   

    async click_komisi() {
        cy.xpath(locator.datatestid.komisi).click()
    }

    async click_komisi_undangan() {
        cy.xpath(locator.datatestid.komisi_undangan).click()
    }

    async click_penarikan_dana() {
        cy.xpath(locator.datatestid.penarikan_dana).click()
    }
}

module.exports = KomisiPage
