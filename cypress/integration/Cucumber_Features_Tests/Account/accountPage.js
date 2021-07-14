/*

A variable to hold the element
A function to perform an action on elemets on the AccountPage

*/ 

const url = '/bank/account-summary.html'
const account_summary_tab = '#account_summary_tab'

class AccountPage{

    static acctSummaryTabIsSelected(){
        cy.url().should('eq', Cypress.config().baseUrl + url)
        cy.get(account_summary_tab).should('have.class', 'active')
    }
}

export default AccountPage