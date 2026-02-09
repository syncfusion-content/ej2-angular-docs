import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
    imports: [NumericTextBoxModule, FormsModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the NumericTextBox component
    // sets the minimum and maximum range values
    // strictMode has been enabled by defualt
    template: ` <ejs-numerictextbox min='10' max='20' value='16' step='2'></ejs-numerictextbox> `
})

export class AppComponent {
    constructor() { }
}
