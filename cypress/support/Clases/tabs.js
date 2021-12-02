/// <reference types="cypress" />
import sl from "../selectors/sTabs.js"

export class TabClass {
    visitWeb(){
        cy.visit("https://demoqa.com/tabs")
    }

    whatTab(){
        return cy.get(sl.whatTab)
    }

    originTab(){
        return cy.get(sl.originTab)
    }

    useTab(){
        return cy.get(sl.useTab)
    }

    tabContainer(){
        return cy.get(sl.tabContainer)
    }
    tabs(){
        return cy.get(sl.tabNav)
    }
    demoTab(){
        return cy.get(sl.tabDemo)
    }
}

export const tabClass = new TabClass();
