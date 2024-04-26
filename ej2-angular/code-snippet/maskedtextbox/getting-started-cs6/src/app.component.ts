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
    // sets the prompting symbol to the MaskedTextBox
    // sets mask format to the MaskedTextBox
    template: `
            <ejs-maskedtextbox promptChar="#" mask='999-999-9999'></ejs-maskedtextbox>
            `
})
export class AppComponent {
    constructor() {
    }
}


