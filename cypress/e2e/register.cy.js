const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')
const RegisterPage = require('../support/pages/RegisterPage')
const registertest = require('../support/datatest/registertest')

let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
let registerpage = new RegisterPage()

Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
  })

describe('user bisa register', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/register')

    })
    it('with valid data', () => {
        registerpage.inputEmail(registertest.data_register.email)
        registerpage.inputName(registertest.data_register.name)
        registerpage.inputBirthday(registertest.data_register.birthday)
        registerpage.inputGender(registertest.data_register.gender)
        registerpage.inputAddress(registertest.data_register.address)
        registerpage.inputInstagram(registertest.data_register.instagram)
        registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
        registerpage.inputUsername(registertest.data_register.username)
        registerpage.inputBirthPlace(registertest.data_register.birthplace)
        registerpage.inputOccupation(registertest.data_register.occupation)
        registerpage.inputRegency(registertest.data_register.regency)
        registerpage.inputReference(registertest.data_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        
    })

    
        it('Email kosong', () => {
            
    
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_email()
        })
    
        it('tidak ada nama', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_name()
        })
    
        it('tidak ada tanggal lahir', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_birthday
        })
    
        it('tidak ada gender', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_gender()
        })
    
        it('tidak ada alamat', () => {
            
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_address()
        })
    
        it('tidak ada phone number', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_phone_number()
        })

        it('tidak ada user name', () => {
            
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_username()
        })
    
        it('tidak ada tempat lahir', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_birth_place()
        })
    
        it('tidak ada pekerjaan', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_occupation()
        })
    
        it('tidak ada kota', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
    
            registerpage.verify_empty_regency()
        })
    
        it('tidak ada instagram', () => {
            
    
            registerpage.inputEmail(registertest.data_register.email2)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp2)
            registerpage.inputUsername(registertest.data_register.username2)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
            registerpage.confirm()
    
            registerpage.verify_success()
        })
    
        it('tidak ada reference', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp3)
            registerpage.inputUsername(registertest.data_register.username3)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.checkTermsConditions()
            registerpage.submit()
            registerpage.confirm()
    
            registerpage.verify_success()
        })
    
        it('tidak ada checklist Terms & Conditions', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.submit()
    
            registerpage.verify_disagree_terms()
        })
    
        it('batalkan Confirmation', () => {
            
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername(registertest.data_register.username)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
            cy.wait(1000)
            registerpage.cancel()
    
            registerpage.verify_cancel()
        })
        it('format email yang salah', () => {
            
    
            registerpage.inputEmail('contfdsfdohinvalidfdfds');
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp4)
            registerpage.inputUsername(registertest.data_register.username4)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
            registerpage.confirm()
    
            registerpage.verify_invalid_email_format()
        })
    
        
        it('format phone number yang salah', () => {
           
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber('801');
            registerpage.inputUsername(registertest.data_register.username5)
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
            registerpage.confirm()
    
            registerpage.verify_invalid_phone_number_format()
        })
    
        it('Username dengan spasi', () => {
            
    
            registerpage.inputEmail(registertest.data_register.email)
            registerpage.inputName(registertest.data_register.name)
            registerpage.inputBirthday(registertest.data_register.birthday)
            registerpage.inputGender(registertest.data_register.gender)
            registerpage.inputAddress(registertest.data_register.address)
            registerpage.inputInstagram(registertest.data_register.instagram)
            registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
            registerpage.inputUsername('user name');
            registerpage.inputBirthPlace(registertest.data_register.birthplace)
            registerpage.inputOccupation(registertest.data_register.occupation)
            registerpage.inputRegency(registertest.data_register.regency)
            registerpage.inputReference(registertest.data_register.reference)
            registerpage.checkTermsConditions()
            registerpage.submit()
            registerpage.confirm()
    
            registerpage.verify_username_space()
        })
// format input birtday salah

it('input birtday salah', () => {
            
        registerpage.inputEmail(registertest.data_register.email)
        registerpage.inputName(registertest.data_register.name)
        registerpage.inputBirthday(2222-11-11);
        registerpage.inputGender(registertest.data_register.gender)
        registerpage.inputAddress(registertest.data_register.address)
        registerpage.inputInstagram(registertest.data_register.instagram)
        registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
        registerpage.inputUsername(registertest.data_register.username)
        registerpage.inputBirthPlace(registertest.data_register.birthplace)
        registerpage.inputOccupation(registertest.data_register.occupation)
        registerpage.inputRegency(registertest.data_register.regency)
        registerpage.inputReference(registertest.data_register.reference)
        registerpage.checkTermsConditions()
        registerpage.submit()
        registerpage.verify_future_birthdate()

         })
         it('email sudah ada', () => {
            
         registerpage.inputEmail('syafradha@gmail.com');
         registerpage.inputName(registertest.data_register.name)
         registerpage.inputBirthday(registertest.data_register.birthday)
         registerpage.inputGender(registertest.data_register.gender)
         registerpage.inputAddress(registertest.data_register.address)
         registerpage.inputInstagram(registertest.data_register.instagram)
         registerpage.inputPhoneNumber(registertest.data_register.whatsapp)
         registerpage.inputUsername(registertest.data_register.username)
         registerpage.inputBirthPlace(registertest.data_register.birthplace)
         registerpage.inputOccupation(registertest.data_register.occupation)
         registerpage.inputRegency(registertest.data_register.regency)
         registerpage.inputReference(registertest.data_register.reference)
         registerpage.checkTermsConditions()
         registerpage.submit()
         
 
})
})

