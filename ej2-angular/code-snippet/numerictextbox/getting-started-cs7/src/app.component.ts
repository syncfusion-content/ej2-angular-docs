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
    // restricts number of decimals to be entered in the NumericTextBox by using validateDecimalOnType property
    // sets number of decimal places to be allowed by the NumericTextBox
    template: `
             <div class='wrap'>
               <ejs-numerictextbox [validateDecimalOnType]='true' decimals='3' format='n3' value='10' placeholder='ValidateDecimalOnType Enabled' floatLabelType= 'Auto'></ejs-numerictextbox>
            </div>
            <div class='wrap'>
               <ejs-numerictextbox decimals='3' format='n3' value='10' placeholder='ValidateDecimalOnType Disabled' floatLabelType= 'Auto'></ejs-numerictextbox>
            </div>
            `
})
export class AppComponent {
    constructor() {
    }
}


