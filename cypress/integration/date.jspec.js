/// <reference types="cypress" />
import sl from "../support/selectors/sDate.js"
import { dateClass } from "../support/Clases/date.js";
import moment from 'moment';



describe("Auto complete", () =>{
    beforeEach("Setup", () => {
        dateClass.visitWeb();
    });

it("Get actual date",()=> {
    dateClass.dateField().should("have.value", moment().format("MM/DD/YYYY"));
    dateClass.dateTimeField().should("have.value", moment().format("MMMM DD, YYYY h:mm A"))
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
    dateClass.currentMonth().should("contain.text", sl.nMonth);
    dateClass.prevMonth().click().click().click();
    dateClass.currentMonth().should("contain.text", sl.pMonth);
})

it('change date', () => {
    dateClass.dateTimeField().click();
    cy.get(".react-datepicker__year-read-view").click()
    cy.get("react-datepicker__year-dropdown").should("contain", moment().subtract(5, "years").format("YYYY"));
    dateClass.nextMonth().click();
    dateClass.pickDay(15).click();
    cy.get(".react-datepicker__time-list").children().contains("10:00").click();
    dateClass.dateTimeField().should("have.value", moment().add(1, "months").format("MMMM 15, YYYY 10:00") + " AM")

});


})