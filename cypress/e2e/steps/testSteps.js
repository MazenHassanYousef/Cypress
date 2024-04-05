import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Login from '../../support/Pages/login'
const loginPageObject = new Login()
Given('Login to orange HRM with username {string} and paswword {string}', (username,password)=> {

    loginPageObject.usename().type(username)
    loginPageObject.password().type(password)
    loginPageObject.loginButton().click()

})

