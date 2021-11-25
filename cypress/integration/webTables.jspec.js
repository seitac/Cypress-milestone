/// <reference types="cypress"/>

import { tableClass } from "../support/Clases/table";
const { _ } = Cypress;


describe("Tables", () => {
    before("Setup", () => {
        tableClass.visitWeb();        
    });

    it('Add', () => {
        tableClass.getAddButton().click();
        tableClass.getModalContent().should("exist");
        tableClass.getFirstName().type("Sacha");
        tableClass.getLastName().type("Gianelli");
        tableClass.getEmail().type("sacha@email.com");
        tableClass.getAge().type("27");
        tableClass.getSalary().type("100");
        tableClass.getDepartment().type("department");
        tableClass.getSubmitForm().click();
    });

    it('Row Check', () => {
        tableClass.getRowSelect(20);
        cy.get(".rt-tbody")
        .get('.rt-tbody > .rt-tr-group')
        .should('have.length', 20) 

        tableClass.getRowSelect(25);
        cy.get(".rt-tbody")
        .get('.rt-tbody > .rt-tr-group')
        .should('have.length', 25) 

        tableClass.getRowSelect(50);
        cy.get(".rt-tbody")
        .get('.rt-tbody > .rt-tr-group')
        .should('have.length', 50) 

        tableClass.getRowSelect(100);
        cy.get(".rt-tbody")
        .get('.rt-tbody > .rt-tr-group')
        .should('have.length', 100) 

        tableClass.getRowSelect(5);
        cy.get(".rt-tbody")
        .get('.rt-tbody > .rt-tr-group')
        .should('have.length', 5) 

        // tableClass.getTableRow(10).should("be.visible");
        // tableClass.getTableRow(11).should("not.be.visible");

        // tableClass.getRowSelect(5);
        // tableClass.getTableRow(5).should("be.visible");
        // to check tableClass.getTableRow(6).should("not.be.visible");

        // tableClass.getRowSelect(20);
        // tableClass.getTableRow(11).should("be.visible");
        // tableClass.getTableRow(21).should("not.be.visible");

        // tableClass.getRowSelect(25);
        // tableClass.getTableRow(21).should("be.visible");
        // tableClass.getTableRow(26).should("not.exist");        

        // tableClass.getRowSelect(50);
        // tableClass.getTableRow(26).should("be.visible");
        // tableClass.getTableRow(51).should("not.exist");

        // tableClass.getRowSelect(100);
        // tableClass.getTableRow(51).should("be.visible");
        // tableClass.getTableRow(101).should("not.exist");
    });

    it('Get values', () => {
        //cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').then()

        cy.get(".rt-table")
        .get('.rt-tbody > .rt-tr-group')
        .should('have.length', 10) 

    });

    it('get values only', () => {
        cy.get(".rt-table").within(() => {
            cy.get('.rt-tbody > .rt-tr-group')
            .should('have.length', 10) 
        })
        cy.get('.rt-thead > .rt-tr > :nth-child(1)').click()
        cy.get(".-sort-asc").should("be.visible");
        
        const toStrings = (cells$) => _.map(cells$, 'textContent')
        const toNumbers = (prices) => _.map(prices, Number)

        cy.get('[role="rowgroup"] > .rt-tr').first()
        .then(toStrings)
        //.then(toNumbers)
        .then((prices) => {

        const sorted = _.sortBy(prices)

        expect(prices, 'cells are sorted').to.deep.equal(sorted)
    });
});
});

