const username = '[name="username"]'
const password = '[type="password"]'
const loginButton = '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'

class Login{
    usename() { return cy.get(username) }
    password() { return cy.get(password) }
    loginButton() { return cy.get(loginButton) }
} export default Login;