const locator = require('../locator/KontenMarketingLocator')


class KontenMarketingPage {
    

    async click_konten_marketing() {
        cy.xpath(locator.datatestid.konten_marketing).click()
    }

    async click_download_image() {
        cy.xpath(locator.datatestid.download_image).click()
    }
}

module.exports = KontenMarketingPage
