const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')
const EditProfile = require('../support/datatest/EditProfile')

const DataProfilePage = require('../support/pages/DataProfilePage')




let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
let dataprofilepage = new DataProfilePage()

Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
   })

describe('User should be able to login', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/login')
    })



  

    it.only('Valid Data', () => {
        
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click();
        cy.get('a > .btn').click();
        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })

    it('Empty Birth Place', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()
        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.clearBirthPlace()
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_birth_place()
    })

    it('Empty Birthday', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()

        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.clearBirthday()
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_birthday()
    })

    it('Empty Address', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()

        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.clearAddress()
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_address()
    })

    // Test case 'Empty Regency' is expected to fail.
    it('Empty Regency', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()

        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.clearRegency()
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_regency()
    })

    
    it('Empty Hobby', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()

        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.clearHobby()
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })

    
    it('Empty Instagram', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()

        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.clearInstagram()
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })


    it('Empty Facebook', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()


        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.clearFacebook()
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })

 
    it('Empty Bank Name', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()


        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.clearBank()
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_bank_name()
    })

    it('Empty Bank Account Number', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()


        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.clearBankAccountNumber()
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_bank_account_number()
    })

    it('Empty Bank Account Name', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()


        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.clearBankAccountName()
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_bank_account_name()
    })

    
    it('Empty Occupation', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()


        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.clearOccupation()
        dataprofilepage.submit()

        dataprofilepage.verify_empty_occupation()
    })

    it('Invalid Bank Account Number', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()


        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber('123')
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_invalid_bank_account_number()
    })

    it('Cancel', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        dataprofilepage.lihat_profile()
        dataprofilepage.ubah_informasi()


        dataprofilepage.inputGender(editprofile.dataeditprofile.gender)
        dataprofilepage.inputBirthPlace(editprofile.dataeditprofile.birthplace)
        dataprofilepage.inputBirthday(editprofile.dataeditprofile.birthday)
        dataprofilepage.inputAddress(editprofile.dataeditprofile.address)
        dataprofilepage.inputRegency(editprofile.dataeditprofile.regency)
        dataprofilepage.inputHobby(editprofile.dataeditprofile.hobby)
        dataprofilepage.inputInstagram(editprofile.dataeditprofile.instagram)
        dataprofilepage.inputFacebook(editprofile.dataeditprofile.facebook)
        dataprofilepage.inputBank(editprofile.dataeditprofile.bank)
        dataprofilepage.inputBankAccountNumber(editprofile.dataeditprofile.bankaccnumber)
        dataprofilepage.inputBankAccountName(editprofile.dataeditprofile.bankaccname)
        dataprofilepage.inputOccupation(editprofile.dataeditprofile.occupation)
        dataprofilepage.cancel()
        dashboardpage.verify_dashboard_page()

        
    })
})


  
     

