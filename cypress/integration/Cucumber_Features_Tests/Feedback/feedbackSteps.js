
//Classes imported to use fuctions in them

import FeedbackPage from './feedbackPage'
import HomePage from '../Home/homePage'
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps' //imported to use Gerkins statements

Given ('I navigate to the feedback page', () => {
    HomePage.navToHomePage()
    HomePage.clickOnFeedback()
    FeedbackPage.feedbackTitleIsVisible()
})

When ('I fill the feedback form', () => {
    FeedbackPage.fillFeedbackForm()
})

And ('I click on send button', () => {
    FeedbackPage.clickOnSendMsg()
})

Then ('I can see the form has been submitted', () => {
    FeedbackPage.feedbackMsgSentSuccessfully()
})

And ('I click on clear button', () => {
    FeedbackPage.clickOnClearbtn()
})

Then ('All fields are cleared and previously entered text deleted', () => {
    FeedbackPage.emptyFeedbackForm()
})