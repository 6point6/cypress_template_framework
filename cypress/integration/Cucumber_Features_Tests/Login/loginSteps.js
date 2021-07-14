
//Classes imported to use fuctions in them

import LoginPage from './loginPage'
import HomePage from '../Home/homePage'
import AccountPage from '../Account/accountPage'
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps' //imported to use Gerkins statements

Given ('I have navigated to the home page', () => {
    HomePage.navToHomePage()
})

Given (/^(?:I have clicked|I click) on the "(.*)" button$/, (buttonText) => {
    HomePage.clickOnButton(buttonText)
})

Then ('I should see the homepage', () => {
    AccountPage.acctSummaryTabIsVisible()
})

When ('I login using the following credentials', (credentials) => {
    LoginPage.enterUsername(credentials.raw()[0][0])
    LoginPage.enterPassword(credentials.raw()[0][1])
    LoginPage.clickOnSubmitBtn()
})

Then ('I should see an error message of {string}', (expected) => {
    LoginPage.verifyErrorMsg(expected)
})