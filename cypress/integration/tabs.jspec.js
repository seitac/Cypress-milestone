/// <reference types="cypress" />
import { tabClass } from "../support/Clases/tabs";
import data from "../fixtures/data.js";

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
        tabClass.tabContainer().should("contain.text", data.origCont)
        tabClass.whatTab().should("not.have.class", "active");
        tabClass.originTab().should("have.class", "active");
        tabClass.useTab().should("not.have.class", "active");
    })

    it("Check 3rd tab",() => {
        tabClass.useTab().click();
        tabClass.tabContainer().should("contain.text", data.useCont);
        tabClass.whatTab().should("not.have.class", "active");
        tabClass.originTab().should("not.have.class", "active");
        tabClass.useTab().should("have.class", "active");
    })
    it("Check first tab", () => {
        tabClass.useTab().click();
        tabClass.whatTab().click();
        tabClass.tabContainer().should("include.text", data.whatCont);
        tabClass.whatTab().should("have.class", "active");
        tabClass.originTab().should("not.have.class", "active");
        tabClass.useTab().should("not.have.class", "active");
    })
    it("Check tabs names", () => {
        tabClass.tabs().should("contain.text", "What");
        tabClass.tabs().should("contain.text", "Origin");
        tabClass.tabs().should("contain.text", "Use");
        tabClass.tabs().should("contain.text", "More");
    })
    it('More tab', () => {
        tabClass.demoTab().should("have.class", "disabled");
    });

})