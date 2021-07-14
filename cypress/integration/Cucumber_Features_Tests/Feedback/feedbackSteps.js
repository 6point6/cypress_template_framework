
//Classes imported to use fuctions in them

import FeedbackPage from './feedbackPage'
import HomePage from '../Home/homePage'
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps' //imported to use Gerkins statements

Given('I have navigated to the feedback page', () => {
    HomePage.navToHomePage()
    HomePage.clickOnFeedback()
    FeedbackPage.feedbackTitleIsVisible()
    FeedbackPage.isFeedbackFormVisible(true)
})

Given('I have filled in the feedback form with the following details', (feedback) => {
    FeedbackPage.fillFeedbackForm(feedback)
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