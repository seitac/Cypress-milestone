/// <reference types="cypress" />
import sl from "../selectors/sModal.js";


export class ModalClass {
    visitWeb(){
        cy.visit("https://demoqa.com/modal-dialogs")
    }

    getSmallBtn(){
        return cy.get(sl.smallBtn)
    }

    getContent(){
        return cy.get(sl.content)
    }

    getSmallBody(){
        return cy.get(sl.contentBody)
    }

    getSmallClose(){
        return cy.get(sl.closeSmallBtn)
    }

    getClose(){
        return cy.get(sl.closeBtn)
    }

    getLargeBtn(){
        return cy.get(sl.largeBtn)
    }

    getLargeClose(){
        return cy.get(sl.closeLargeBtn)
    }

    getModal(){
        return cy.get(sl.modal)
    }
}
export const modalClass = new ModalClass();