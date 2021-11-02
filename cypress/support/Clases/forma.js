/// <reference types="cypress" />
import sl from "/cypress/support/selectors.js";


export class FormObjects {
    visitWeb(){
        cy.visit("https://demoqa.com/automation-practice-form");
    }

    getName(){
       return cy.get(sl.firstName)
    }

    getLastname(){
       return cy.get(sl.lastName)
    }

    getEmail(){
        return cy.get(sl.userEmail)
    }

    getRbtn(){
        return cy.get(sl.rbtnGender)
    }
    
    getNumber(){
        return cy.get(sl.userNumber)
    }
    
    getDate(){
        return cy.get(sl.dateOfBirth)
    }

    getDateMonth(){
        return cy.get(sl.datePickerNext)
    }

    getDateDay(){
        return cy.get(sl.datePickDay + 15)
    }
        
    getSubject(){
        return cy.get(sl.subject)
    }

    getHobbie(){
        return cy.get(sl.hobbies)
    }
    
    getUpload(){
        return cy.get('#uploadPicture')
    }
    
    getAddress(){
        return cy.get(sl.currentAddress)
    }

    getState(){
        return cy.get(sl.state)
    }

    getCity(){
        return cy.get(sl.city)
    }

    getSubmit() {
        return cy.get(sl.submit)
    }

    getFormRow(row) {
        return cy.get(`tbody > :nth-child(${row}) > :nth-child(2)`)
    }
}
export const formObjects = new FormObjects();