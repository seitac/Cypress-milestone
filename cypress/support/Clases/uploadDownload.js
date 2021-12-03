/// <reference types="cypress"/>
import sl from "../selectors/sUploadDownload.js"


export class UpDnw{
    visitWeb(){
        cy.visit("https://demoqa.com/upload-download")
    }

    dwnButton(){
        return cy.get(sl.dwnButtob)
    }

    upButton(){
        return cy.get(sl.uplButton)
    }

    readFile(){
        const path = require("path");
        const downloadsFolder = Cypress.config("downloadsFolder");
        cy.readFile(path.join(downloadsFolder, sl.file)).should("exist");
    }

    attfile1(){
        return cy.get(sl.uplButton).attachFile(sl.filepath1)
    }

    attfile2(){
        return cy.get(sl.uplButton).attachFile(sl.filepath2)
    }



}

export const updnw = new UpDnw();