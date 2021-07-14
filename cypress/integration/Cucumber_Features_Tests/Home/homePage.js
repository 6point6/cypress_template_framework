/*

variables to hold the elements
Functions to perform different actions on elemets on the FeedbackPage

*/ 

const url = '/index.html'
const signinBtn = '#signin_button'
const feedback = '#feedback'

class HomePage{

    static navToHomePage(){
        cy.visit(url)
        cy.url().should('eq', Cypress.config().baseUrl + url)
    }

    static clickOnSignInbtn(){
        cy.get(signinBtn).should('be.visible')
        cy.get(signinBtn).click()
    }

    static clickOnFeedback(){
        cy.get(feedback).should('be.visible')
        cy.get(feedback).click()
    }
}

export default HomePage

