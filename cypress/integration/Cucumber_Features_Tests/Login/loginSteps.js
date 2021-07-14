
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

When ('I login using the following credentials', (credentials) => {
    LoginPage.enterUsername(credentials.raw()[0][0])
    LoginPage.enterPassword(credentials.raw()[0][1])
    LoginPage.clickOnSubmitBtn()
})

Then ('I should see an error message', () => {
    LoginPage.displayErrorMsg()
})