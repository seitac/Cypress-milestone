/// <reference types="cypress" />
import { modalClass } from "../support/Clases/modal.js"
import data from "../fixtures/data.js"

describe("Enter Webpage", () => {
    beforeEach("Setup", () => {
        modalClass.visitWeb()
    });

    it("Test Small Button", () => {
        modalClass.getSmallBtn().click();
        modalClass.getContent().should("contain", data.contSmall);
        modalClass.getSmallBody().should("have.text", data.bodySmall)
        modalClass.getClose().click();
        modalClass.getContent().should("not.exist");
        modalClass.getSmallBtn().click();
        modalClass.getSmallClose().click();
        modalClass.getContent().should("not.exist");

    })

    it("Test Large Button", () => {
        modalClass.getLargeBtn().click();
        modalClass.getContent().should("contain", data.contLarge);
        modalClass.getSmallBody().should("contain.text", data.bodyLarge)
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