/// <reference types="cypress"/>

import { updnw } from "../support/Clases/uploadDownload";

describe("Upload & Download", () => {
    beforeEach("Setup", () => {
        updnw.visitWeb();        
    });
    
    it('Check Download', () => {
        updnw.dwnButton().click().wait(2000);
        updnw.readFile();
    });

    it('Check Upload', () => {
        updnw.attfile1();
        updnw.upButton().should("exist", "testimage.jpeg")
        updnw.attfile2();
        updnw.upButton().should("have.value", "C:\\fakepath\\testimage2.jpeg")
        updnw.upButton().should("not.have.value", "C:\\fakepath\\testimage1.jpeg")
    });
})

