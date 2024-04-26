import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { FormsModule } from '@angular/forms'



import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
        
        NumericTextBoxModule,
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets the format using custom format string `#`
    // sets the format using custom format string `0`
    template: `
            <div class='wrap'>
               <ejs-numerictextbox format='###.##' value='10' placeholder='Custom format string #' floatLabelType= 'Auto'></ejs-numerictextbox>
             </div>
            <div class='wrap'>
               <ejs-numerictextbox format='000.00' value='10' placeholder='Custom format string 0' floatLabelType= 'Auto'></ejs-numerictextbox>
             </div>
            `
})
export class AppComponent {
    constructor() {
    }
}


