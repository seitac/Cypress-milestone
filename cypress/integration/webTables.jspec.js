/// <reference types="cypress"/>

import { tableClass } from "../support/Clases/table";


describe("Tables", () => {
    before("Setup", () => {
        tableClass.visitWeb();        
    });

    it('Add', () => {
        tableClass.getAddButton().click();
        tableClass.getModalContent().should("exist");
        
    });
})