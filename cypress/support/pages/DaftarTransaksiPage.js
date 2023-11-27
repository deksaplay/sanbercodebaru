const locator = require('../locator/DaftarTransaksiLocator')


class DaftarTransaksiPage {
    
     
    async click_transaksi() {
        cy.xpath(locator.datatestid.transaksi).click()
    }
    async click_daftar_transaksi() {
        cy.xpath(locator.datatestid. daftar_transaksi).click()
    }
}

module.exports = DaftarTransaksiPage
