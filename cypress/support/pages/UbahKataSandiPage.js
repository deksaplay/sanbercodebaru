const locator = require('../locator/UbahKataSandiLocator')


class UbahFotoPage {
    

    async click_lihat_profile() {
        cy.xpath(locator.datatestid.lihat_profile).click()
    }

    async click_ubah_informasi() {
        cy.xpath(locator.datatestid.ubah_informasi).click()
    }

    async click_ubah_foto() {
        cy.xpath(locator.datatestid.ubah_foto).click()
    }

    async click_ubah_kata_sandi() {
        cy.xpath(locator.datatestid.ubah_kata_sandi).click()
    }

    async click_choose_file() {
        cy.xpath(locator.datatestid.choose_file).click()
    }

    async click_button_simpan() {
        cy.xpath(locator.datatestid.button_simpan).click()
    }


    async click_keluar() {
        cy.xpath(locator.datatestid.button_keluar).click()
    }

    async click_kata_sandi_baru() {
        cy.xpath(locator.datatestid.Kata_sandi_baru).click()
    }

    async click_konfirmasi_kata_sandi() {
        cy.xpath(locator.datatestid.Konfirmasi_kata_sandi).click()
    }

    


   async verify_login_failed() {
    cy.get(locator.datatestid.err_login_message).should('be.visible')
    }
}

module.exports = UbahFotoPage
