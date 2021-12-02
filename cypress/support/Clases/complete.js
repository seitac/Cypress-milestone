/// <reference types="cypress" />
import sl from "../selectors/sComplete.js"

export class AutoComplete{
    visitWeb(){
        cy.visit("https://demoqa.com/auto-complete")
    }

    getMultipleField(){
        return cy.get(sl.multipleColor)
    }

    getMultipleFilled(){
        return cy.get(sl.multipleFilled)
    }
    
    getMultipleColors(){
        return cy.get(sl.multipleObject)
    }
    getFirstOnList(){
        return cy.get(sl.firstColorList)
    }

    getSingleField(){
        return cy.get(sl.singleColor)
    }

    getList(){
        return cy.get(sl.multipleObjectList)
    }
    getIndicator(){
        return cy.get(sl.autoIndicator)
    }

}
export const autoComplete = new AutoComplete();
