import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { FormsModule } from '@angular/forms'



import { Component } from '@angular/core';

@Component({
imports: [
        
        NumericTextBoxModule,
        FormsModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets currency with 2 numbers of decimal places format
    template: `
            <ejs-numerictextbox format='c2' value='10'></ejs-numerictextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


