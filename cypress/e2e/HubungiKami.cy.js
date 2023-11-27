const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
  })

describe('user bisa melihat hubungi kami', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/register')
    })
   

    it('user bisa melihat hubungi kami', () => {
        cy.get(':nth-child(4) > a').click();
      
    })
   
})
