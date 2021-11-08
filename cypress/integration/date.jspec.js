/// <reference types="cypress" />
import sl from "../support/selectors/sDate.js"
import { DateClass, dateClass } from "../support/Clases/date.js";


describe("Auto complete", () =>{
    before("Setup", () => {
        dateClass.visitWeb();
    });

it("Get actual date",()=> {
    dateClass.dateField().should("have.value", dateClass.getDate());
})

it("Change Date Field", () => {
    dateClass.dateField().click();
    
    //Hacer funcion para poder calcular el mes a contener
    dateClass.pickDay(sl.day).click();
    dateClass.dateField().should("have.value", `11/${sl.day}/2021`);

})
it("Check all months", () => {
    dateClass.dateField().click();
    dateClass.checkMonth();
})

it("Check years", () => {
    dateClass.dateField().click();
    dateClass.checkYear();
})


it("Check Prev/Next Arrows", () => {
    dateClass.dateField().click();
    dateClass.nextMonth().click().click();
    dateClass.currentMonth().should("contain.text", sl.nMonth);
    dateClass.prevMonth().click().click().click();
    dateClass.currentMonth().should("contain.text", sl.pMonth);


})


})