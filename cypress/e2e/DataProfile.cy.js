const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')
const DataProfilePage = require ('../support/Pages/DataProfilePage')



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
   

  

  

    it('Valid Data', () => {
        
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()
        
        
        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })

    it('Empty Birth Place', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()

        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.clearBirthPlace()
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_birth_place()
    })

    it('Empty Birthday', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        
        
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()

        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.clearBirthday()
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_birthday()
    })

    it('Empty Address', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
       
      
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()

        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.clearAddress()
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_address()
    })

    // Test case 'Empty Regency' is expected to fail.
    it('Empty Regency', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()

        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.clearRegency()
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_regency()
    })

    
    it('Empty Hobby', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
      
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()

        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.clearHobby()
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })

    
    it('Empty Instagram', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        
       
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()

        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.clearInstagram()
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })


    it('Empty Facebook', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
      
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()


        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.clearFacebook()
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_success()
    })

 
    it('Empty Bank Name', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
     
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()


        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.clearBank()
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_bank_name()
    })

    it('Empty Bank Account Number', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()


        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.clearBankAccountNumber()
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_bank_account_number()
    })

    it('Empty Bank Account Name', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
       
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()


        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.clearBankAccountName()
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_empty_bank_account_name()
    })

    
    it('Empty Occupation', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()


        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.clearOccupation()
        dataprofilepage.submit()

        dataprofilepage.verify_empty_occupation()
    })

    it('Invalid Bank Account Number', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
      
        
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()


        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber('123')
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.submit()

        dataprofilepage.verify_invalid_bank_account_number()
    })

    it('Cancel', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
       
       
        dashboardpage.verify_dashboard_page()
        cy.get('.mt-4 > .btn').click()
        cy.get('a > .btn').click()


        dataprofilepage.inputGender(UserData.datatest.gender)
        dataprofilepage.inputBirthPlace(UserData.datatest.birthplace)
        dataprofilepage.inputBirthday(UserData.datatest.birthday)
        dataprofilepage.inputAddress(UserData.datatest.address)
        dataprofilepage.inputRegency(UserData.datatest.regency)
        dataprofilepage.inputHobby(UserData.datatest.hobby)
        dataprofilepage.inputInstagram(UserData.datatest.instagram)
        dataprofilepage.inputFacebook(UserData.datatest.facebook)
        dataprofilepage.inputBank(UserData.datatest.bank)
        dataprofilepage.inputBankAccountNumber(UserData.datatest.bankaccnumber)
        dataprofilepage.inputBankAccountName(UserData.datatest.bankaccname)
        dataprofilepage.inputOccupation(UserData.datatest.occupation)
        dataprofilepage.cancel()
        dashboardpage.verify_dashboard_page()

        
    })
})


  
     

