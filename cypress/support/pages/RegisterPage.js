
const locator = require('../locator/RegisterPageLocator')


class RegisterPage {
    async inputEmail(email) {
        cy.xpath(locator.datatestid.email)
            .type(email)
            .should('have.value', email)
    }

    async inputName(nama_lengkap) {
        cy.xpath(locator.datatestid.nama_lengkap)
            .type(nama_lengkap)
            .should('have.value', nama_lengkap)
    }

    async inputBirthday(tanggal_lahir) {
        cy.xpath(locator.datatestid.tanggal_lahir)
            .type(tanggal_lahir)
            .should('have.value', tanggal_lahir)
    }

    async inputGender(jenis_kelamin) {
        cy.xpath(locator.datatestid.jenis_kelamin)
            .select(jenis_kelamin)
            .should('have.value', jenis_kelamin)
    }

    async inputAddress(alamat_lengkap) {
        cy.xpath(locator.datatestid.alamat_lengkap)
            .type(alamat_lengkap)
            .should('have.value', alamat_lengkap)
    }

    async inputInstagram(akun_instagram) {
        cy.xpath(locator.datatestid.akun_instagram)
            .type(akun_instagram)
            .should('have.value', akun_instagram)
    }

    async inputPhoneNumber(nomor_wa) {
        cy.xpath(locator.datatestid.nomor_wa)
            .type(nomor_wa)
            .should('have.value', nomor_wa)
    }

    async inputUsername(username) {
        cy.xpath(locator.datatestid.username)
            .type(username)
            .should('have.value', username)
    }

    async inputBirthPlace(tempat_lahir) {
        cy.xpath(locator.datatestid.tempat_lahir)
            .type(tempat_lahir)
            .should('have.value', tempat_lahir)
    }

    async inputOccupation(jenis_pekerjaan) {
        cy.xpath(locator.datatestid.jenis_pekerjaan)
            .select(jenis_pekerjaan)
            .should('contain', jenis_pekerjaan)
    }

    async inputRegency(kota) {
        cy.xpath(locator.datatestid.kota)
            .click()
            .type(kota + '\n')
            .should('contain', kota)
    }

    async inputReference( kode_referral) {
        cy.xpath(locator.datatestid. kode_referral)
            .type( kode_referral)
            .should('have.value',  kode_referral)
    }

    async checkTermsConditions() {
        cy.xpath(locator.datatestid.setuju)
            .click()
            .should('be.checked')
    }

    async submit() {
        cy.xpath(locator.datatestid.button_register)
            .click()
    }

    async confirm() {
        cy.xpath(locator.datatestid.confirm_button)
            .click()
    }

    async cancel() {
        cy.xpath(locator.datatestid.cancel_button)
            .click()
    }

    async verify_success(name) {
        cy.xpath(locator.datatestid.confirmation_modal)
            .should('contain', 'Pendaftaran Kamu berhasil terkirim.')
    }

    async verify_empty_email() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Email tidak boleh kosong!')
    }

    async verify_empty_name() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Nama Lengkap tidak boleh kosong!')
    }

    async verify_empty_birthday() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Tanggal Lahir tidak boleh kosong!')
    }

    async verify_empty_gender() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Jenis Kelamin tidak boleh kosong!')
    }

    async verify_empty_address() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Alamat tidak boleh kosong!')
    }

    async verify_empty_phone_number() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Nomor WhatsApp tidak boleh kosong!')
    }

    async verify_empty_username() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Username tidak boleh kosong!')
    }

    async verify_empty_birth_place() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Tempat Lahir tidak boleh kosong!')
    }

    async verify_empty_occupation() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Jenis Pekerjaan tidak boleh kosong!')
    }

    async verify_empty_regency() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Kota/Kabupaten tidak boleh kosong!')
    }

    async verify_disagree_terms() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Kamu belum menyetujui syarat dan ketentuan!')
    }

    async verify_existing_email() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Email ini sudah terdaftar, silahkan gunakan email lain.')
    }

    async verify_invalid_email_format() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Format email tidak sesuai.')
    }

    async verify_invalid_phone_number_format() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Format nomor WhatsApp tidak sesuai.')
    }

    async verify_username_space() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Username tidak boleh ada spasi.')
    }

    async verify_future_birthdate() {
        cy.xpath(locator.datatestid.warning_massage)
            .should('contain', 'Tanggal Lahir tidak boleh di masa depan.')
    }

    async verify_cancel(url) {
        cy.xpath(locator.datatestid.cancel_button)
            .should('not.be.visible')
    }
}




module.exports = RegisterPage
