import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'



import { Component } from '@angular/core';

@Component({
imports: [
         NumericTextBoxModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets the custom css for NumericTextBox
    template: `
            <ejs-numerictextbox  cssClass='e-style'  value='10'  placeholder= 'Enter Value' floatLabelType= 'Always'  ></ejs-numerictextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


