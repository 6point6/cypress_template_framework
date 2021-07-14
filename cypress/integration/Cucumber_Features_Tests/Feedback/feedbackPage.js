/*

variables to hold the elements
Functions to perform different actions on elemets on the FeedbackPage

*/ 

const nameField = '#name'
const emailField = '#email'
const subjectField = '#subject'
const commentField = '#comment'
const sendMsg = 'input[name="submit"]'
const feedbackTitle = '#feedback-title'
const feedbackMsgSent = '.offset3'
const clearBtn = 'input[name="clear"]'

class FeedbackPage{

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

    static clickOnClearbtn(){
        cy.get(clearBtn).should('be.visible')
        cy.get(clearBtn).click()
    }

    static emptyFeedbackForm(){
        cy.get(nameField).should('be.empty')
        cy.get(emailField).should('be.empty')
        cy.get(subjectField).should('be.empty')
        cy.get(commentField).should('be.empty')
    }
}

export default FeedbackPage