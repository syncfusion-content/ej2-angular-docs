import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'


import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule,ListBoxAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class="e-section-control">
                <ejs-listbox [dataSource]="data"></ejs-listbox></div>`
})

export class AppComponent {
public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom' },
    { text: 'Bugatti Chiron' },
    { text: 'Bugatti Veyron Super Sport' },
    { text: 'SSC Ultimate Aero' },
    { text: 'Koenigsegg CCR' },
    { text: 'McLaren F1' },
    { text: 'Aston Martin One- 77' },
    { text: 'Jaguar XJ220' },
    { text: 'McLaren P1' },
    { text: 'Ferrari LaFerrari' }
];
}



