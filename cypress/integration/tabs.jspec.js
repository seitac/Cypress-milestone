/// <reference types="cypress" />
import { tabClass } from "../support/Clases/tabs";
import sl from "../support/selectors/sTabs.js";

describe("Tabs Testing",()=>{
    beforeEach("Setup",()=>{
        tabClass.visitWeb();

    })
    
    
    it("Check page state", () => {
        tabClass.whatTab().should("have.class", "active");
        tabClass.originTab().should("not.have.class", "active");
        tabClass.useTab().should("not.have.class", "active");
    })

    it("Check 2nd tab", () => {
        tabClass.originTab().click();
        tabClass.tabContainer().should("contain.text", sl.origCont)
    })

    it("Check 3rd tab",() => {
        tabClass.useTab().click();
        tabClass.tabContainer().should("contain.text", sl.useCont)
    })
    it("Check first tab", () => {
        tabClass.useTab().click();
        tabClass.whatTab().click();
        tabClass.tabContainer().should("include.text", sl.whatCont)
    })
    it("Check tabs names", () => {
        tabClass.tabs().should("contain.text", "What");
        tabClass.tabs().should("contain.text", "Origin");
        tabClass.tabs().should("contain.text", "Use");
        tabClass.tabs().should("contain.text", "More");
    })
    it('More tab', () => {
        cy.get(id="demo-tab-more").should("not.be.clickable")
    });

})