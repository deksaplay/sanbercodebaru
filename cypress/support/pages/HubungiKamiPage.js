const locator = require('../locator/HubungiKamiLocator')


class HubungiKamiPage {
    
    async click_hubungi_kami() {
        cy.xpath(locator.datatestid.hubungi_kami).click()
    }
}

module.exports = HubungiKamiPage
