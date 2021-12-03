/// <reference types="cypress"/>
import sl from "../selectors/sWebTables.js"

export class Table{
    visitWeb(){
        cy.visit("https://demoqa.com/webtables")
    }

    getSearch(){
        return cy.get(sl.searchBar)
    }

    getAddButton(){
        return cy.get(sl.addButton)
    }

    getModalContent(){
        return cy.get(sl.modalcontent)
    }

    getFirstName(){
        return cy.get(sl.firstName)
    }

    getLastName(){
        return cy.get(sl.lastName)
    }

    getEmail(){
        return cy.get(sl.mail)
    }

    getAge(){
        return cy.get(sl.age)
    }

    getSalary(){
        return cy.get(sl.salary)
    }

    getDepartment(){
        return cy.get(sl.department)
    }

    getSubmitForm(){
        return cy.get(sl.submitForm)
    }

    getTableRow(row){
        return cy.get(`:nth-child(${row})`)
    }

    getRowSelect(row){
        return cy.get(sl.rowSelect).select(`${row} rows`)
    }
    getBody(){
        return cy.get(sl.body)
    }
    getBodyGroup(){
        return cy.get(sl.bodyGroup)
    }
    getTable(){
        return cy.get(sl.table)
    }
    getNoData(){
        return cy.get(sl.noData)
    }
    getNext(){
        return cy.get(sl.next)
    }
    getPrev(){
        return cy.get(sl.previous)
    }
    getGroup(){
        return cy.get(sl.group)
    }
    getPageInput(){
        return cy.get(sl.pageInput)
    }
    getDelete(){
        return cy.get(sl.deleteBtn)
    }
    getEdit(){
        return cy.get(sl.editBtn)
    }
}

export const tableClass = new Table();