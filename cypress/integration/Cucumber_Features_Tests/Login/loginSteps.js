
//Classes imported to use fuctions in them

import LoginPage from './loginPage'
import HomePage from '../Home/homePage'
import AccountPage from '../Account/accountPage'
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps' //imported to use Gerkins statements

Given ('I navigate to the home page', () => {
    HomePage.navToHomePage()
})

When ('I click on signin button', () => {
    HomePage.clickOnSignInbtn()
})

Then ('I should see the homepage', () => {
    AccountPage.acctSummaryTabIsVisible()
})

And ('I enter credentials {string} {string} and click on submit', (username,password) => {
    LoginPage.enterUsername(username)
    LoginPage.enterPassword(password)
    LoginPage.clickOnSubmitBtn()
})

Then ('I should see an error message', () => {
    LoginPage.displayErrorMsg()
})