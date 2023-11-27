const locator = require('../locator/DownloadProgramLocator')


class DownloadProgramPage {
   

    async click_download() {
        cy.xpath(locator.datatestid. download_program).click()
    }
}

module.exports = DownloadProgramPage

