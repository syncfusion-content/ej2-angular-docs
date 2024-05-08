import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListBoxComponent, ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, ListBoxAllModule
    ],


standalone: true,
    selector: 'app-container',
    // specifies the template string for the ListBox component with dataSource
    template: `<div class="e-section-control">
                <ejs-listbox [dataSource]='data' cssClass='e-horizontal-listbox'></ejs-listbox></div>`
})
export class AppComponent {
    // defined the array of object
    public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' }
];
}



