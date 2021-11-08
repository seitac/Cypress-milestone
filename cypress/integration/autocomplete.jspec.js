/// <reference types="cypress" />
import sl from "../support/selectors/sComplete.js";
import { autoComplete } from "../support/Clases/complete.js"


describe("Auto complete", () =>{
    before("Setup", () => {
        autoComplete.visitWeb();
    });


    it("Check list", () => {
        autoComplete.getMultipleField().type("e");
        
        sl.colorList.forEach(function (value) {
            autoComplete.getList()
            .should('contain', value)
        })

    })

    it("Complete multi form", () => {
        autoComplete.getMultipleField().type("e");
        autoComplete.getMultipleField().contains(sl.vColor).click();
        autoComplete.getMultipleField().type("a");
        autoComplete.getMultipleField().contains(sl.aColor).click();
        autoComplete.getMultipleField().type("g");
        autoComplete.getFirstOnList().click();

    })
    it("Check multi form", () => {
        
        autoComplete.getMultipleFilled().should("contain.text", sl.gColor);
        autoComplete.getMultipleFilled().should("contain.text", sl.vColor);
        autoComplete.getMultipleFilled().should("contain.text", sl.aColor);

    })
    it("Delete color",()=> {
        sl.colorListsDelete.forEach(function (color) {
            autoComplete.getMultipleColors().contains(color).siblings(".css-xb97g8").click();    
        })
        autoComplete.getMultipleField().should("not.contain.text");

    
    })
    it("Delete All", () => {
        autoComplete.getMultipleField().type("e");
        autoComplete.getMultipleField().contains(sl.vColor).click();
        autoComplete.getMultipleField().type("a");
        autoComplete.getMultipleField().contains(sl.aColor).click();
        autoComplete.getMultipleField().type("g");
        autoComplete.getFirstOnList().click();
        cy.get('.auto-complete__indicator').click();
        autoComplete.getMultipleField().should("not.contain.text");


    })

    it("Complete simple form", () => {
        autoComplete.getSingleField().type("e");
        autoComplete.getSingleField().contains(sl.vColor).click();
        autoComplete.getSingleField().should("contain.text", sl.vColor);
        autoComplete.getSingleField().type("b");
        autoComplete.getSingleField().contains(sl.bColor).click();
        autoComplete.getSingleField().should("contain.text", sl.bColor);
        autoComplete.getSingleField().should("not.contain.text", sl.vColor);
        autoComplete.getSingleField().type(sl.randomText);
        
        //Hay algun metodo mas efectivo para "salir" del imput?
        cy.get('.col-md-6').click();
        autoComplete.getSingleField().should("not.contain.text", sl.randomText);

    })

    it("Checkear for duplicates on list",()=>{
        autoComplete.getMultipleField().type("e");
        autoComplete.getMultipleField().contains(sl.vColor).click();
        autoComplete.getMultipleField().type("e");
        autoComplete.getList().should("not.contain.text", sl.vColor);
    })

    it("Tab Check", () => {
        autoComplete.getMultipleField().type("u").trigger('keydown', { keyCode: 9});
        autoComplete.getMultipleFilled().should("contain.text", "Blue");
    })


})
