/// <reference types="cypress" />
import { dateClass } from "../support/Clases/date.js";
import moment from 'moment';



describe("Auto complete", () =>{
    beforeEach("Setup", () => {
        dateClass.visitWeb();
    });

it("Get actual date",()=> {
    dateClass.dateField().should("have.value", dateClass.getDate());
    dateClass.dateTimeField().should("have.value", moment().format("LLL"))
})

it("Change Date Field", () => {
    dateClass.dateField().click();
    dateClass.nextMonth().click().click().click();
    dateClass.pickDay(15).click();
    dateClass.dateField().should("have.value", moment().add(3, "months").format("MM/15/YYYY"));
    

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
    dateClass.currentMonth().should("contain.text", moment().add(2, "months").format("MMMM"));
    dateClass.prevMonth().click().click().click();
    dateClass.currentMonth().should("contain.text", moment().add(-1, "months").format("MMMM"));
})

it('change date', () => {
    dateClass.dateTimeField().click();
    dateClass.getYearView().click()
    dateClass.getYearDropdown().should("contain", moment().subtract(5, "years").format("YYYY"));
    dateClass.nextMonth().click();
    dateClass.pickDay(15).click();
    dateClass.getYearTime().children().contains("10:00").click();
    dateClass.dateTimeField().should("have.value", moment().add(1, "months").format("MMMM 15, YYYY 10:00") + " AM")

});


})