/// <reference types="cypress" />
import form from "../fixtures/form.js";
import { formObjects } from "../support/Clases/forma.js"


const filepath = 'testimage.jpeg';

describe("Form Testing", () => {
    beforeEach("Setup", () => {
        formObjects.visitWeb();
    });


    it("Fill all the fields", () => {
        formObjects.getName().type(form.name);
        formObjects.getLastname().type(form.lastName);
        formObjects.getEmail().type(form.mail);
        formObjects.getRbtn().click();
        formObjects.getNumber().type(form.number);
        formObjects.getDate().click();
        formObjects.getDateMonth().click();
        formObjects.getDateDay().click();
        formObjects.getSubject().type("m{downarrow}{downarrow}{downarrow}{enter}");
        formObjects.getHobbie().click();
        

        formObjects.getUpload().attachFile(filepath)

        
        formObjects.getAddress().type(form.address);
        
        formObjects.getState().click().contains("Haryana").click();
        formObjects.getCity().click().contains("Panipat").click();
        
        formObjects.getSubmit().click();
    

    
        formObjects.getFormRow(1).should("have.text", `${form.name} ${form.lastName}`);
        formObjects.getFormRow(2).should("have.text", form.mail);
        formObjects.getFormRow(3).should("have.text", form.gender);
        formObjects.getFormRow(4).should("have.text", form.number );
        formObjects.getFormRow(5).should("have.text", form.date);
        formObjects.getFormRow(6).should("have.text", form.subjects);
        formObjects.getFormRow(7).should("have.text", form.hobbie);
        formObjects.getFormRow(8).should("have.text", "testimage.jpeg");
        formObjects.getFormRow(9).should("have.text", form.address);
        formObjects.getFormRow(10).should("have.text", "Haryana Panipat");
    
    })
    it("Field Validation", () => {
        formObjects.getSubmit().click();
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').should("have.css", "color", "rgb(33, 37, 41)");
        formObjects.getEmail().type("asdasd");
        formObjects.getEmail().should("have.css", "border-color", "rgb(220, 53, 69)");
        formObjects.getEmail().type("sdasd@");
        formObjects.getEmail().should("have.css", "border-color", "rgb(220, 53, 69)");
        formObjects.getLastname().should("have.css", "border-color", "rgb(220, 53, 69)");
        formObjects.getName().should("have.css", "border-color", "rgb(220, 53, 69)");
        formObjects.getNumber().should("have.css", "border-color", "rgb(220, 53, 69)");
        formObjects.getNumber().type("1234567890").should("have.css", "border-color", "rgb(40, 167, 69)");
        formObjects.getRbtn().should("have.css", "border-color", "rgb(33, 37, 41)");
        formObjects.getDate().should("have.css", "border-color", "rgb(40, 167, 69)");;
        formObjects.getSubject().should("have.css", "border-color", "rgb(33, 37, 41)");
        formObjects.getHobbie().should("have.css", "border-color", "rgb(33, 37, 41)");;
        
    })
})
