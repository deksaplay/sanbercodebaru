const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')
const BantuanPage = require('../support/pages/BantuanPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
let bantuanpage = new BantuanPage()

Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
  })

describe('User should be able to login', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/login')
    })
   

    it('look bantuan mimin', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        bantuanpage.klick_nama()
        bantuanpage.klick_bantuan()
      
    })
   
})