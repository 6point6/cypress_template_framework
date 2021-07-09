/*

variables to hold the elements
Functions to perform different actions on elemets on the LoginPage

*/ 

const username_field = '#user_login'
const password_field = '#user_password'
const submit_btn = 'input[name="submit"]'
const errorMsg = '.alert-error'

class LoginPage{
    
    static enterUsername(username){
        cy.get(username_field).should('be.visible')
        cy.get(username_field).type(username)
    }

    static enterPassword(password){
        cy.get(password_field).should('be.visible')
        cy.get(password_field).type(password)
    }

    static clickOnSubmitBtn(){
        cy.get(submit_btn).should('be.visible')
        cy.get(submit_btn).click()
    }

    static displayErrorMsg(){
        cy.get(errorMsg).should('be.visible')
        cy.get(errorMsg).contains('Login and/or password are wrong.')
    }
}

export default LoginPage