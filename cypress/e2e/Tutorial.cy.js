const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
  })

describe('User bisa melihat tutorial', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/login')
    })
   

    it('user bisa melihat tutorial', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        cy.get('#page-header-user-dropdown > .ms-1').click();
        cy.get('[href="/tutorial"] > span').click();

        
      
    })
    
})
