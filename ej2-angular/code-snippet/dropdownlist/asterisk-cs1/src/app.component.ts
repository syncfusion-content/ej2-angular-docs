import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, DropDownListModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the DropDownList component with dataSource
    template: `<ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder = 'Select a game' floatLabelType="Auto"></ejs-dropdownlist>`,
    styles: [
        `
            .e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
                content: ' *';
                color: red;
            }
        `,
      ],
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
}


