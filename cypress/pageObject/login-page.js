class loginPage {
  visit() {
    cy.goToLoginPage();
  }

  linktoLogin() {
    cy.get(`a[href="/app/login"]`).click()
  }

  getToastNOtifs = {
    error: () => cy.get(`div[class*='p-toast-message-error']`),
    message: () => cy.get(`div[class*='p-toast-detail']`)
  }

  getHideIcon() {
    const hideIcon = cy.get(`svg[class*='p-icon']`)
    hideIcon.click();
  }

  inputEmail() {
    const emailField = cy.get("#email");
    emailField.type(Cypress.env("email"));
  }

  inputPassword(pass) {
    const passwordField = cy.get(`#password`);
    passwordField.type(Cypress.env(pass));
  }

  submit() {
    const signInBtn = cy.get(`button[type='submit']`);
    signInBtn.click();
  }

  forgotPassPage = {
    forgotPw: () => cy.get(`a[href='/app/reset-password']`).click(),
    getRcvrPass: () => cy.get(`h2[class='header']`),
    getRcvrEmail: () => cy.get(`#email`).type('test2@gmail.com'),
    clickReset: () => cy.get(`span[class='p-button-label']`).click(),
    rstSuccessMsg: () => cy.get(`div[class='p-message-text p-message-text']`)
  }

  //QR page objecs
  qrPage = {
    addQrBtn: () => cy.get(`button[aria-label*='Add QR Code']`)
  }
}

export default loginPage;