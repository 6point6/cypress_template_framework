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

    static fillFeedbackForm(){
        cy.get(nameField).type("England")
        cy.get(emailField).type("England@test.com")
        cy.get(subjectField).type("England")
        cy.get(commentField).type("England")
    }

    static clickOnSendMsg(){
        cy.get(sendMsg).click()
    }

    static feedbackTitleIsVisible(){
        cy.get(feedbackTitle).should('be.visible')
    }

    static feedbackMsgSentSuccessfully(){
        cy.get(feedbackMsgSent).should('be.visible')
        cy.get(feedbackMsgSent).contains('Thank you for your comments')
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