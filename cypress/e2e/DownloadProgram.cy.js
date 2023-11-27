const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')
const DownloadProgramPage = require('../support/pages/DownloadProgramPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
let downloadprogrampage = new DownloadProgramPage
Cypress.on('uncaught:exception', (err, runnable)=>{
  return false
  })

describe('look download program', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/register')
    })
   

  
    it('download program', () => {
        downloadprogrampage.click_download()
    })
    
})
