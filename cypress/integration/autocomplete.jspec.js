/// <reference types="cypress" />
import sl from "../support/selectors/sComplete.js";
import { autoComplete } from "../support/Clases/complete.js";
import text from "../fixtures/data.js"

describe("Auto complete", () =>{
    beforeEach("Setup", () => {
        autoComplete.visitWeb();
    });


    it("Check list", () => {
        autoComplete.getMultipleField().type("e");
        
        text.colorList.forEach(function (value) {
            autoComplete.getList()
            .should('contain', value)
        })

    })

    it("Complete multi form", () => {
        autoComplete.getMultipleField().type("e");
        autoComplete.getMultipleField().contains(text.vColor).click();
        autoComplete.getMultipleField().type("a");
        autoComplete.getMultipleField().contains(text.aColor).click();
        autoComplete.getMultipleField().type("g");
        autoComplete.getFirstOnList().click();
        autoComplete.getMultipleFilled().should("contain.text", text.gColor);
        autoComplete.getMultipleFilled().should("contain.text", text.vColor);
        autoComplete.getMultipleFilled().should("contain.text", text.aColor);

    })

    it("Delete color",()=> {
        autoComplete.getMultipleField().type("e");
        autoComplete.getMultipleField().contains(text.vColor).click();
        autoComplete.getMultipleField().type("a");
        autoComplete.getMultipleField().contains(text.aColor).click();
        autoComplete.getMultipleField().type("g");
        autoComplete.getFirstOnList().click();
        
        text.colorListsDelete.forEach(function (color) {
            autoComplete.getMultipleColors().contains(color).siblings(sl.sib).click();    
        })
        autoComplete.getMultipleField().should("not.contain.text");

    
    })
    it("Delete All", () => {
        autoComplete.getMultipleField().type("e");
        autoComplete.getMultipleField().contains(text.vColor).click();
        autoComplete.getMultipleField().type("a");
        autoComplete.getMultipleField().contains(text.aColor).click();
        autoComplete.getMultipleField().type("g");
        autoComplete.getFirstOnList().click();
        autoComplete.getIndicator().click();
        autoComplete.getMultipleField().should("not.contain.text");


    })

    it("Complete simple form", () => {
        autoComplete.getSingleField().type("e");
        autoComplete.getSingleField().contains(text.vColor).click();
        autoComplete.getSingleField().should("contain.text", text.vColor);
        autoComplete.getSingleField().type("b");
        autoComplete.getSingleField().contains(text.bColor).click();
        autoComplete.getSingleField().should("contain.text", text.bColor);
        autoComplete.getSingleField().should("not.contain.text", text.vColor);
        autoComplete.getSingleField().type(text.randomText);
        
        //Hay algun metodo mas efectivo para "salir" del imput?
        cy.get('.col-md-6').click();
        autoComplete.getSingleField().should("not.contain.text", text.randomText);

    })

    it("Checkear for duplicates on list",()=>{
        autoComplete.getMultipleField().type("e");
        autoComplete.getMultipleField().contains(text.vColor).click();
        autoComplete.getMultipleField().type("e");
        autoComplete.getList().should("not.contain.text", text.vColor);
    })

    it("Tab Check", () => {
        autoComplete.getMultipleField().type("u").trigger('keydown', { keyCode: 9});
        autoComplete.getMultipleFilled().should("contain.text", text.uColor);
    })


})
