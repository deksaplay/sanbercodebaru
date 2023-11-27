const locator = require('../locator/EventMendatangLocator')


class EventMendatangPage {
   
    async click_event() {
        cy.xpath(locator.datatestid.event).click()
    }
    async click_event_mendatang() {
        cy.xpath(locator.datatestid.event_mendatang).click()
    }
    async click_event_berlalu() {
        cy.xpath(locator.datatestid.event_berlalu).click()
    }
    async click_tambah_event() {
        cy.xpath(locator.datatestid.tambah_event).click()
    }
    async click_cari_event() {
        cy.xpath(locator.datatestid.cari_event).click()
    }
}

module.exports = EventMendatangPage
