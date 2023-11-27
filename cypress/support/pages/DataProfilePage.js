const locator = require('../locator/DataProfileLocator')


class DataProfilePage {
   
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
    

        async inputBirthday(tanggal_lahir) {
            cy.xpath(locator.DataProfileLocator.tanggal_lahir)
                .clear()
                .type(tanggal_lahir)
                .should('have.value', tanggal_lahir)
        }
    
        async inputGender(jenis_kelamin) {
            cy.xpath(locator.DataProfileLocator.jenis_kelamin)
                .select(gender)
                .should('have.value', jenis_kelamin)
        }
    
        async inputAddress(alamat) {
            cy.xpath(locator.DataProfileLocator.alamat)
                .clear()
                .type(alamat)
                .should('have.value', alamat)
        }
    
        async inputInstagram(instagram) {
            cy.xpath(locator.DataProfileLocator.instagram)
                .clear()
                .type(instagram)
                .should('have.value', instagram)
        }
    
        async inputFacebook(facebook) {
            cy.xpath(locator.DataProfileLocator.facebook)
                .clear()
                .type(facebook)
                .should('have.value', facebook)
        }
    
        async inputPhoneNumber(phone_number) {
            cy.xpath(locator.DataProfileLocator.phone_number)
                .clear()
                .type(phone_number)
                .should('have.value', phone_number)
        }
    
        async inputBirthPlace(tempat_lahir) {
            cy.xpath(locator.DataProfileLocator.tempat_lahir)
                .clear()
                .type(tempat_lahir)
                .should('have.value', tempat_lahir)
        }
    
        async inputOccupation(pekerjaan) {
            cy.xpath(locator.DataProfileLocator.pekerjaan)
                .select(pekerjaan)
                .should('contain', pekerjaan)
        }
    
        async inputRegency(kota) {
            cy.xpath(locator.DataProfileLocator.kota)
                .click()
                .type(kota + '\n')
                .should('contain', kota)
        }
    
        async inputHobby(hobi) {
            cy.xpath(locator.DataProfileLocator.hobi)
                .clear()
                .type(hobi)
                .should('have.value', hobi)
        }
    
        async inputBank(nama_bank) {
            cy.xpath(locator.DataProfileLocator.nama_bank)
                .select(nama_bank)
                .should('contain', nama_bank)
        }
    
        async inputBankAccountNumber(bankacc) {
            cy.xpath(locator.DataProfileLocator.bankacc)
                .clear()
                .type(bankacc)
                .should('have.value', bankacc)
        }
    
        async inputBankAccountName(bankaccname) {
            cy.xpath(locator.DataProfileLocator.bankaccname)
                .clear()
                .type(bankaccname)
                .should('have.value', bankaccname)
        }
    
        async clearBirthday() {
            cy.xpath(locator.DataProfileLocator.tanggal_lahir)
                .clear()
                .should('have.value', '')
        }
    
        async clearAddress() {
            cy.xpath(locator.DataProfileLocator.alamat)
                .clear()
                .should('have.value', '')
        }
    
        async clearInstagram() {
            cy.xpath(locator.DataProfileLocator.instagram)
                .clear()
                .should('have.value', '')
        }
    
        async clearFacebook() {
            cy.xpath(locator.DataProfileLocator.facebook)
                .clear()
                .should('have.value', '')
        }
    
        async clearPhoneNumber() {
            cy.xpath(locator.DataProfileLocator.phone_number)
                .clear()
                .should('have.value', '')
        }
    
        async clearBirthPlace() {
            cy.xpath(locator.DataProfileLocator.tempat_lahir)
                .clear()
                .should('have.value', '')
        }
    
        async clearOccupation() {
            cy.xpath(locator.DataProfileLocator.pekerjaan)
                .select('Pilih Pekerjaan...')
                .should('contain', 'Pilih Pekerjaan...')
        }
    
        async clearRegency() {
            cy.xpath(locator.DataProfileLocator.kota)
                .click()
                .type('Select Domicile...\n')
                .should('contain', 'Select Domicile...')
        }
    
        async clearHobby() {
            cy.xpath(locator.DataProfileLocator.hobi)
                .clear()
                .should('have.value', '')
        }
    
        async clearBank() {
            cy.xpath(locator.DataProfileLocator.nama_bank)
                .select('Pilih bank...')
                .should('contain', 'Pilih bank...')
        }
    
        async clearBankAccountNumber() {
            cy.xpath(locator.DataProfileLocator.bankacc)
                .clear()
                .should('have.value', '')
        }
    
        async clearBankAccountName() {
            cy.xpath(locator.DataProfileLocator.bankaccname)
                .clear()
                .should('have.value', '')
        }
    
        async submit() {
            cy.xpath(locator.DataProfileLocator.buton_simpan)
                .click()
        }
    
        async cancel() {
            cy.xpath(locator.DataProfileLocator.button_batal)
                .click()
        }
    
        async verify_success() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Data profil berhasil diupdate')
        }
    
        async verify_empty_birthday() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan Tanggal Lahir')
        }
    
        async verify_empty_address() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan alamat')
        }
    
        async verify_empty_birth_place() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan tempat lahir')
        }
    
        async verify_empty_occupation() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan Jenis Pekerjaan')
        }
    
        async verify_empty_regency() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan Kota/Kabupaten')
        }
    
        async verify_empty_bank_name() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan Nama Bank')
        }
    
        async verify_empty_bank_account_number() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan nomor rekening')
        }
    
        async verify_empty_bank_account_name() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan nama pemilik rekening')
        }
    
        async verify_invalid_bank_account_number() {
            cy.xpath(locator.DataProfileLocator.warn_message).should('contain', 'Masukan nomor rekening yang valid')
        }
        async lihat_profile() {
            cy.xpath(locator.DataProfileLocator.lihat_profile).click()
        }
        async ubah_informasi() {
            cy.xpath(locator.DataProfileLocator.ubah_informasi).click()
        }
    }


module.exports = DataProfilePage
