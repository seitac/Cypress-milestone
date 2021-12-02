/// <reference types="cypress" />
import { framesClass } from "../support/Clases/frames.js";



describe("iFrame Testing", () => {
    beforeEach("Setup", () => {
        cy.visit("https://demoqa.com/frames");
    });


    it('Selecting iframe 1', () => {
        framesClass.getFrame1().then(function($iframe){
            const iFrameContent = $iframe.contents().find("body")

            cy.wrap(iFrameContent).should("contain", "This is a sample page").should("not.contain", "asasdsa")
        })
    });

    it('Selecting iframe 2', () => {
        framesClass.getFrame2().then(function($iframe){
            const iFrameContent = $iframe.contents().find("body")

            cy.wrap(iFrameContent).should("contain", "This is a sample page").should("not.contain", "asasdsa")
        })
    });

})