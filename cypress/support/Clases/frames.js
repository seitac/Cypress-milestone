/// <reference types="cypress" />
import sl from "../selectors/sFrames.js"

export class Frames{
    visitWeb(){
        cy.visit("https://demoqa.com/frames")
    }

    getFrame1(){
        return cy.get(sl.frame1)
    }
    getFrame2(){
        return cy.get(sl.frame2)
    }

}
export const framesClass = new Frames();
