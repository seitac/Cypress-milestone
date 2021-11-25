/// <reference types="cypress" />
import sl from "../support/selectors/sModal.js"
import { modalClass } from "../support/Clases/modal.js"

describe("Enter Webpage", () => {
    beforeEach("Setup", () => {
        modalClass.visitWeb()
    });

    it("Test Small Button", () => {
        modalClass.getSmallBtn().click();
        modalClass.getContent().should("contain", sl.contSmall);
        modalClass.getSmallBody().should("have.text", sl.bodySmall)
        modalClass.getClose().click();
        modalClass.getContent().should("not.exist");
        modalClass.getSmallBtn().click();
        modalClass.getSmallClose().click();
        modalClass.getContent().should("not.exist");

    })

    it("Test Large Button", () => {
        modalClass.getLargeBtn().click();
        modalClass.getContent().should("contain", sl.contLarge);
        modalClass.getSmallBody().should("contain.text", sl.bodyLarge)
        modalClass.getClose().click();
        modalClass.getContent().should("not.exist");
        modalClass.getLargeBtn().click();
        modalClass.getLargeClose().click()
        modalClass.getContent().should("not.exist");
    })

    it("Test outside click (Small)",() => {
        modalClass.getSmallBtn().click();
        modalClass.getModal().click();
        modalClass.getModal().should("not.exist");
    })

    it("Test outside click (large)",() => {
        modalClass.getLargeBtn().click();
        modalClass.getModal().click("bottom", {force:true});
        modalClass.getModal().should("not.exist");
    })

    it("Close with esc key",()=>{
        modalClass.getLargeBtn().click();
        cy.get('body').trigger('keydown', { keyCode: 27});
        modalClass.getModal().should("not.exist");
    })





})