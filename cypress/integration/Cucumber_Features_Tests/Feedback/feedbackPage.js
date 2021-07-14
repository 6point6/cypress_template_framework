/*

variables to hold the elements
Functions to perform different actions on elements on the FeedbackPage

*/

const url = '/feedback.html'
const nameField = '#name'
const emailField = '#email'
const subjectField = '#subject'
const commentField = '#comment'
const sendMsg = 'input[name="submit"]'
const feedbackTitle = '#feedback-title'
const feedbackMsgSent = '.offset3'
const clearBtn = 'input[name="clear"]'

class FeedbackPage {

    static navToFeedbackPage() {
        cy.get(url)
        cy.url().should('eq', Cypress.config().baseUrl + url)
    }

    static fillFeedbackForm(feedback) {
        //Check the format of the feedback is correct i.e. name, email, subject, body
        const expectedFields = ['Name', 'Email', 'Subject', 'Body']
        expect(feedback.raw()[0]).to.deep.eq(expectedFields)
        const feedbackDetails = feedback.rows()[0]
        cy.get(nameField).type(feedbackDetails[0])
        cy.get(emailField).type(feedbackDetails[1])
        cy.get(subjectField).type(feedbackDetails[2])
        cy.get(commentField).type(feedbackDetails[3])
    }

    static clickOnButton(buttonText) {
        const locator = buttonText === 'Send Message' ? sendMsg : clearBtn
        cy.get(locator).click()
    }

    static feedbackTitleIsVisible() {
        cy.get(feedbackTitle).should('have.text', 'Feedback')
    }

    static isFeedbackFormVisible(visibility) {
        const visCheck = visibility ? 'be.visible' : 'not.exist'
        cy.get(nameField).should(visCheck)
        cy.get(emailField).should(visCheck)
        cy.get(subjectField).should(visCheck)
        cy.get(commentField).should(visCheck)
    }

    static verifySubmittedMessage(message) {
        // While the message in the DOM looks nice & neat, the actual text returned by the element has unexpected line
        // breaks and additional spaces in the text that are hard to work around, especially between sentences. So
        // rather than being able to check the full message text directly, split the expected value into separate
        // sentences and check each appears in the element text
        cy.get(feedbackMsgSent).invoke('text').then(text => {
            const expected = message.replaceAll('\n', ' ').split('. ')
            const actual = text.replaceAll('\n', '')
            console.log(expected)
            expected.forEach(sentence => {
                expect(actual).to.contain(sentence)
            })
        })
    }

    static emptyFeedbackForm() {
        cy.get(nameField).should('be.empty')
        cy.get(emailField).should('be.empty')
        cy.get(subjectField).should('be.empty')
        cy.get(commentField).should('be.empty')
    }
}

export default FeedbackPage