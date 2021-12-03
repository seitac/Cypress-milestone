/// <reference types="cypress"/>

import { tableClass } from "../support/Clases/table";
//const { _ } = Cypress;


describe("Tables", () => {
    let nameList = [];
    let lastNameList = [];
    let ageList = [];
    let emailList = [];
    let salaryList = [];
    let departmentList = [];
    let nameListAsc = [];
    let lastNameListAsc = [];
    let ageListAsc = [];
    let emailListAsc = [];
    let salaryListAsc = [];
    let departmentListAsc = [];

    beforeEach("Setup", () => {
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
        tableClass.getBodyGroup()
        .should('have.length', 20) 

        tableClass.getRowSelect(25);
        tableClass.getBodyGroup()
        .should('have.length', 25)

        tableClass.getRowSelect(50);
        tableClass.getBodyGroup()
        .should('have.length', 50)

        tableClass.getRowSelect(100);
        tableClass.getBodyGroup()
        .should('have.length', 100)

        tableClass.getRowSelect(5);
        tableClass.getBodyGroup()
        .should('have.length', 5)
    });


    it('Get values', () => {

        tableClass.getBodyGroup()
        .should('have.length', 10);

        //Get values
        function getValues(list, child) {
            for (let index = 1; index < 11; index++) {
                cy.get(`.rt-tbody > :nth-child(${index}) > .rt-tr > :nth-child(${child})`).each(($el) => {
                    if ($el.text().trim() !== "") { 
                        list.push($el.text().trim());                    
                    }
                    list.sort();
                    cy.log(list)
                });
            
            }
        return list
        }

        getValues(nameList, 1)
        getValues(lastNameList, 2)
        getValues(ageList, 3)
        getValues(emailList, 4)
        getValues(salaryList, 5)
        getValues(departmentList, 6)


        //Get asc values
        function getAscValues(list, child) {
            cy.get(`.rt-thead > .rt-tr > :nth-child(${child})`).click();

            for (let index = 1; index < 11; index++) {
                cy.get(`.rt-tbody > :nth-child(${index}) > .rt-tr > :nth-child(${child})`).each(($el) => {
                    if ($el.text().trim() !== "") { 
                        list.push($el.text().trim());
                    }
                });
            
            }
            return list;
        }

        getAscValues(nameListAsc, 1)
        getAscValues(lastNameListAsc, 2)
        getAscValues(ageListAsc, 3)
        getAscValues(emailListAsc, 4)
        getAscValues(salaryListAsc, 5)
        getAscValues(departmentListAsc, 6)


        
        cy.get(nameListAsc).each(($span, i) => {
            expect($span).to.equal(nameList[i]);
        });

        cy.get(lastNameListAsc).each(($span, i) => {
            expect($span).to.equal(lastNameList[i]);
        });
        cy.get(ageListAsc).each(($span, i) => {
            expect($span).to.equal(ageList[i]);
        });
        cy.get(emailListAsc).each(($span, i) => {
            expect($span).to.equal(emailList[i]);
        });

        cy.get(departmentListAsc).each(($span, i) => {
            expect($span).to.equal(departmentList[i]);
        });
        
    });

    it('Search bar', () => {
        tableClass.getSearch().type("Vega");
        tableClass.getBodyGroup().should("contain", "Vega");
        tableClass.getBodyGroup().should("not.contain", "Cantrell");
        tableClass.getNoData().should("not.exist");

        tableClass.getSearch().clear().type("g");
        tableClass.getBodyGroup().should("contain", "Vega");
        tableClass.getBodyGroup().should("contain", "Gentry");
        tableClass.getBodyGroup().should("not.contain", "Cantrell");

        tableClass.getSearch().clear().type("q");
        tableClass.getNoData().should("exist");
    });



    it('Prev/Next', () => {
        tableClass.getNext().should("be.disabled");
        tableClass.getPrev().should("be.disabled");


        tableClass.getAddButton().click();
        tableClass.getModalContent().should("exist");
        tableClass.getFirstName().type("Sacha");
        tableClass.getLastName().type("Gianelli");
        tableClass.getEmail().type("sacha@email.com");
        tableClass.getAge().type("27");
        tableClass.getSalary().type("100");
        tableClass.getDepartment().type("department");
        tableClass.getSubmitForm().click();

        tableClass.getAddButton().click();
        tableClass.getModalContent().should("exist");
        tableClass.getFirstName().type("Sacha");
        tableClass.getLastName().type("Gianelli");
        tableClass.getEmail().type("sacha@email.com");
        tableClass.getAge().type("27");
        tableClass.getSalary().type("100");
        tableClass.getDepartment().type("department");
        tableClass.getSubmitForm().click();

        tableClass.getAddButton().click();
        tableClass.getModalContent().should("exist");
        tableClass.getFirstName().type("Tester");
        tableClass.getLastName().type("ASD");
        tableClass.getEmail().type("utest@email.com");
        tableClass.getAge().type("27");
        tableClass.getSalary().type("100");
        tableClass.getDepartment().type("department");
        tableClass.getSubmitForm().click();


        tableClass.getRowSelect(5);

        tableClass.getPrev().should("be.disabled");
        tableClass.getNext().should("not.be.disabled").click();
        tableClass.getGroup().should("contain", "Tester");
        tableClass.getGroup().should("not.contain", "Sacha");

        tableClass.getNext().should("be.disabled");
        tableClass.getPrev().should("not.be.disabled").click();

        tableClass.getPageInput().clear().type("2{enter}");
        tableClass.getGroup().should("contain", "Tester");
        tableClass.getGroup().should("not.contain", "Sacha");
        tableClass.getPageInput().clear().type("1{enter}");
        tableClass.getPrev().should("be.disabled");
        tableClass.getGroup().should("not.contain", "Tester");
    });

    it('Delete function', () => {
        tableClass.getGroup().should("contain", "Vega");
        tableClass.getDelete().click();
        tableClass.getGroup().should("not.contain", "Vega");
    });

    it('Edit Function', () => {
        tableClass.getModalContent().should("not.exist");
        tableClass.getEdit().click();

        tableClass.getModalContent().should("exist");
        tableClass.getFirstName().should("have.value", "Cierra").clear().type("Tester");
        tableClass.getLastName().should("have.value", "Vega").clear().type("Test");
        tableClass.getEmail().should("have.value", "cierra@example.com").clear().type("Tester@yahoo.com");
        tableClass.getAge().should("have.value", "39").clear().type("22");;
        tableClass.getSalary().should("have.value", "10000").clear().type("35000");;
        tableClass.getDepartment().should("have.value", "Insurance").clear().type("asdasd");;
        tableClass.getSubmitForm().click();
        tableClass.getGroup().should("not.contain", "Vega");
        tableClass.getGroup().should("contain", "Tester");
        tableClass.getGroup().should("contain", "22");
        tableClass.getGroup().should("contain", "asdasd");
        tableClass.getGroup().should("contain", "35000");
    });

});

