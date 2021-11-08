/// <reference types="cypress" />
import form from "../support/form.js";
import { formObjects } from "../support/Clases/forma.js"

const filepath = 'testimage.jpeg';

describe("Form Testing", () => {
    before("Setup", () => {
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
    })

    it("Student Name Test", () => {
        formObjects.getFormRow(1).should("have.text", form.name + " " + form.lastName);
    })
    it("Student Email Test", () => {
        formObjects.getFormRow(2).should("have.text", form.mail);
    })
    it("Gender Test", () => {
        formObjects.getFormRow(3).should("have.text", form.gender);
    })  
    it("Number Test", () => {
        formObjects.getFormRow(4).should("have.text", form.number );
    })  
    it("Date of Birth Test", () => {
        formObjects.getFormRow(5).should("have.text", form.date);
    })
    it("Subjects Test", () => {
        formObjects.getFormRow(6).should("have.text", form.subjects);
    })
    it("Hobbies Test", () => {
        formObjects.getFormRow(7).should("have.text", form.hobbie);
    })
    it("Picture test", () => {
        formObjects.getFormRow(8).should("have.text", "testimage.jpeg");
    })
    it("Address Test", () => {
        formObjects.getFormRow(9).should("have.text", form.address);
    })
    it("State and City Test", () => {
        formObjects.getFormRow(10).should("have.text", "Haryana Panipat");
        cy.get('body').trigger('keydown', { keyCode: 27});
    })
})

//Do describe("Field Validation", () => {







        //cy.get(".subjects-auto-complete__value-container > div > div").should("have.text", "Commerce");


        //cy.get('#hobbiesWrapper > .col-md-9 col-sm-12 > :nth-child(2)').click();
        
        // cy.get(sl.subject).type("m");
        // cy.get(sl.subjectFillTable).contains("Maths").should("exist");
        
        //cy.get('id="dateOfBirthInput').click().;
        // column.forEach(function (value) {
        //     cy.get(".subjects-auto-complete__option")
        //       .should('contain', value)
        // })
        
        //cy.get(".subjects-auto-complete__value-container").type("m{downarrow}{downarrow}{downarrow}{enter}");
        
        //cy.get('.form-file-label').click();

        // column2.forEach(function (value) {
        //     cy.get(".css-11unzgr")
        //       .should('contain', value)
        // })
        
        // cy.get("#submit").click();
        // cy.get('tbody > :nth-child(1) > :nth-child(2)').contains("Nombre Apellido").should("be.visible");
        // cy.get('tbody > :nth-child(2) > :nth-child(2)').contains("sacha@email.com").should("be.visible");
        //cy.get("#dateOfBirthInput").should("have.value", "22 Nov 2021");