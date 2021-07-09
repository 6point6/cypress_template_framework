/*

A variable to hold the element
A function to perform an action on elemets on the AccountPage

*/ 

const account_summary_tab = '#signin_button#account_summary_tab'

class AccountPage{

    static acctSummaryTabIsVisible(){
        cy.get('#account_summary_tab').should('be.visible')
    }
}

export default AccountPage