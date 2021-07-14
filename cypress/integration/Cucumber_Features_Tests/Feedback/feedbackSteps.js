//Classes imported to use functions in them

import FeedbackPage from './feedbackPage'
import HomePage from '../Home/homePage'
import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps' //imported to use Gerkin statements

Given('I have navigated to the feedback page', () => {
    HomePage.navToHomePage()
    HomePage.clickOnFeedback()
    FeedbackPage.feedbackTitleIsVisible()
    FeedbackPage.isFeedbackFormVisible(true)
})

Given('I have filled in the feedback form with the following details', (feedback) => {
    FeedbackPage.fillFeedbackForm(feedback)
})

When('I click on the {string} button', (buttonText) => {
    FeedbackPage.clickOnButton(buttonText)
})

Then('I can see the form has been submitted', () => {
    FeedbackPage.isFeedbackFormVisible(false);
})

Then('the following message is displayed', (message) => {
    FeedbackPage.verifySubmittedMessage(message)
})

Then('all fields are cleared and previously entered text deleted', () => {
    FeedbackPage.emptyFeedbackForm()
})