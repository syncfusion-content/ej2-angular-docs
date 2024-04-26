import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { FormsModule } from '@angular/forms'



import { Component } from '@angular/core';

@Component({
imports: [
         MaskedTextBoxModule, FormsModule
    ],


standalone: true,
    selector: 'app-root',
    // input element for checking the two-way binding support using value property
    template: `
     <div class='e-input-group' style='margin-bottom:30px'>
        <ejs-input class='e-input' type='text' [(ngModel)]='value' placeholder='Mobile Number' />
     </div>
     <ejs-maskedtextbox mask='000-000-0000' [(value)]='value'></ejs-maskedtextbox>
    `
})
export class AppComponent {
    public value: any;
    constructor() {
    }
}



