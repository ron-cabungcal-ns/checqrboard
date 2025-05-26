import loginPage from '../pageObject/login-page';


describe('CheckQR Board Login Page', () => {
  const landingPage = new loginPage()

   it('Check Landing Page', () => {
    landingPage.visit()
    cy.url().should('include', '/app/login')
  })

  it('Login Success', () => {
    landingPage.visit()
    landingPage.inputEmail()
    landingPage.inputPassword('valid_password')
    landingPage.submit()
    landingPage.getToastNOtifs.message().should('have.text','Login successful')
    cy.url().should('include', '/app/location')
    landingPage.qrPage.addQrBtn().should('be.visible').and('have.text','Add QR Code')
  })

  it('Login With Empty Fields', () => {
    landingPage.visit()
    landingPage.submit()
    landingPage.getToastNOtifs.message().should('have.text','missing email or phone')
  })

  it('Login Fail', () => {
    landingPage.visit()
    landingPage.inputEmail()
    landingPage.inputPassword('invalid_password')
    landingPage.submit()
    landingPage.getToastNOtifs.message().should('have.text', 'Invalid login credentials')
  })

  it('Toggle Password Field View', () => {
    landingPage.visit()
    landingPage.inputPassword('valid_password')
    landingPage.getHideIcon();
  })

  it('Forgot Password', () => {
    landingPage.visit()
    landingPage.forgotPassPage.forgotPw()
    cy.url().should('include', '/app/reset-password')
    landingPage.forgotPassPage.getRcvrPass().should('have.text','Recover Password')
    landingPage.forgotPassPage.getRcvrEmail()
    landingPage.forgotPassPage.clickReset()
    landingPage.forgotPassPage.rstSuccessMsg().should('have.text','Check your email for the login link!')
    landingPage.linktoLogin()
  })

})