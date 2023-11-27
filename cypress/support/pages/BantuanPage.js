const locator = require('../locator/BantuanLocator')

class BantuanPage{
    async click_perbesar() {
   
    cy.viewport(window.screen.width, window.screen.height);
}




    async verify_dashboard_page() {
        cy.xpath(locator.datatestid.dashboard, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.promosi, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.konten_marketing, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.pesan, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.klien, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.event, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.transaksi, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.komisi, { timeout: 10000 }).should('be.visible')
    }
    async click_dashboard() {
        cy.xpath(locator.datatestid.dashboard).click()
    }
    async click_dashboard() {
        cy.xpath(locator.datatestid.dashboard).click()
    }
    async klick_bantuan() {
        cy.xpath(locator.datatestid.bantuan).click()
    }
    async klick_nama() {
        cy.xpath(locator.datatestid.click_nama).click()
    }

 }






module.exports = BantuanPage
