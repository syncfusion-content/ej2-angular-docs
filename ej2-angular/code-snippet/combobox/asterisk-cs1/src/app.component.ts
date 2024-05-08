import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, ComboBoxModule,ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the ComboBox component with dataSource
    template: `<ejs-combobox id='comboelement' [dataSource]='data' placeholder = 'Select a game' floatLabelType="Auto"></ejs-combobox>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Cricket', 'Football', 'Rugby', 'Snooker', 'Tennis'];
}


