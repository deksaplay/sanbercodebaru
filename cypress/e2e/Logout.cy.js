const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')
const LogoutPage= require('../support/pages/LogoutPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
let logoutpage = new LogoutPage()

Cypress.on('uncaught:exception', (err, runnable)=>{
   return false
  })

describe('user bisa logout', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/login')
    })
   

    it('Logout Page', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        logoutpage.klik_nama()
        logoutpage.klik_logout()
        loginpage.verify_login_page()

      
    })
  
})
