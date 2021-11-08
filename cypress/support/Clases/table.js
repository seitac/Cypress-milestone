/// <reference types="cypress"/>
import sl from "../selectors/sTables.js"

export class Table{
    visitWeb(){
        cy.visit("https://demoqa.com/webtables")
    }

    getSearch(){
        return cy.get(sl.searchBar)
    }

    getAddButton(){
        return cy.get(sl.addButton)
    }

    getModalContent(){
        return cy.get(sl.modalcontent)
    }

    getFirstName(){
        return cy.get(sl.firstName)
    }

    getLastName(){
        return cy.get(sl.lastName)
    }

    
}

export const tableClass = new Table();