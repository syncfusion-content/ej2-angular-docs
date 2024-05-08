import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { FormsModule } from '@angular/forms'



import { Component } from '@angular/core';

@Component({
imports: [
         MaskedTextBoxModule, FormsModule
    ],


standalone: true,
    selector: 'app-root',
    // sets mask format to the MaskedTextBox
    template: `
            <ejs-maskedtextbox [customCharacters]="customMaskChar" mask='00:00 >PM' placeholder='Time (ex: 10:00 PM, 10:00 AM)' floatLabelType= 'Always'></ejs-maskedtextbox>
            `
})
export class AppComponent {
    // sets custom characters collection for non-mask elements 'P' and 'M'
    public customMaskChar: Object = { P: 'P,A,p,a', M: 'M,m'};
    constructor() {
    }
}


