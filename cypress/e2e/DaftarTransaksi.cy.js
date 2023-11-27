const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')
const DaftarTransaksiPage = require('../support/pages/DaftarTransaksiPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
let daftartransaksipage = new DaftarTransaksiPage

Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
  })

describe('User should be able to login', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/login')
    })
   

    it('look daftar transaksi', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
        daftartransaksipage.click_transaksi()
        //daftartransaksipage.click_daftar_transaksi()

      
    })
   
})
