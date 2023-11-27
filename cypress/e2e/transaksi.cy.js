const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
  })

describe('User bisa transaksi', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/login')
    })
   

    it('User bisa transaksi', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        cy.get('.mm-active > .has-arrow').click();
        cy.get('.mm-active > .sub-menu > li > a').click();
      
    })
   
})
