import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListBoxComponent,ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, ListBoxAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class="e-section-control">
                <ejs-listbox [dataSource]="data"></ejs-listbox></div>`
})

export class AppComponent {
public data: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis', 'Basket Ball', 'Base Ball', 'Hockey', 'Volley Ball'];
}



