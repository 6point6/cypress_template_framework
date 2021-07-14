/*

variables to hold the elements
Functions to perform different actions on elemets on the LoginPage

*/

const username_field = '#user_login'
const password_field = '#user_password'
const submit_btn = 'input[name="submit"]'
const errorMsg = '.alert-error'

class LoginPage {

    static enterUsername(username) {
        cy.get(username_field).type(username)
    }

    static enterPassword(password) {
        cy.get(password_field).type(password)
    }

    static clickOnSubmitBtn() {
        cy.get(submit_btn).click()
    }

    static verifyErrorMsg(expected) {
        //Error text includes new line characters and spaces that we need to remove
        cy.get(errorMsg).invoke('text').then(msg => {
            const actual = msg.trim()
            expect(actual).to.eq(expected)
        })
    }
}

export default LoginPage