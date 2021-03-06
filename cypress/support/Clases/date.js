/// <reference types="cypress" />
import sl from "../selectors/sDate.js"




export class DateClass{
    visitWeb(){
        cy.visit("https://demoqa.com/date-picker")
    }

    dateField(){
        return cy.get(sl.selectDate)
    }

    dateTimeField(){
        return cy.get(sl.dateAndTime)
    }

    currentMonth(){
        return cy.get(sl.currentMonth)
    }

    nextMonth(){
        return cy.get(sl.monthNext)
    }

    prevMonth(){
        return cy.get(sl.monthPrev)
    }

    month(){
        return cy.get(sl.monthSelect)
    }

    year(){
        return cy.get(sl.yearSelect)
    }

    getDate(){
        const date = new Date();
        let day = date.getDate();
        const month = date.getMonth() +1;
        if(day.toString().length === 1){
            day = `0${day}`
            }
        const year = date.getFullYear();
        const dateStr = `${month}/${day}/${year}`
        return dateStr
    }

    pickDay(day){
        return cy.get(`.react-datepicker__day--0${day}`)
    }

    checkMonth(){
        sl.monthList.forEach(month => {
            cy.get(sl.monthPicker).should("contain.text", month)
        });
    }

    checkYear(){
        sl.yearList.forEach(year => {
            cy.get(sl.yearPicker).should("contain.text", year)
        });
    }


}
export const dateClass = new DateClass();