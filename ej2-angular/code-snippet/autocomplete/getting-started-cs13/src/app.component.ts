import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, AutoCompleteModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the AutoComplete component and
    // input element for checking the two-way binding support using value property
    template: `<ejs-autocomplete id='atcelement' [dataSource]='sportsData' [(value)]='value'></ejs-autocomplete>
    <div style='margin-top: 50px'>
        <input type="text" [(ngModel)]="value" style="width:245px;height:25px" />
     </div>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of complex data
    public sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics'];
    // set a value to pre-select
    public value: string = 'Badminton';
}


