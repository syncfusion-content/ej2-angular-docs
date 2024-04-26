import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';
@Component({
imports: [
        FormsModule, ReactiveFormsModule, MultiSelectModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='sportsData' [fields]='fields'[placeholder]='placeholder'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    //set the data to dataSource property
    public sportsData: Object[] =  [
        { id: 'Game1', sports: 'Badminton' },
        { id: 'Game2', sports: 'Basketball' },
        { id: 'Game3', sports: 'Cricket' },
        { id: 'Game4', sports: 'Football' },
        { id: 'Game5', sports: 'Golf' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'sports', value: 'id' };
    // set placeholder to MultiSelect input element
    public placeholder: string = 'Select games';
}



