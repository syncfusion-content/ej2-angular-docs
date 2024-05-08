import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListBoxComponent, ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, ListBoxAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class="e-section-control">
                <ejs-listbox [dataSource]="data" [fields]="setfield"></ejs-listbox></div>`
})

export class AppComponent {
public data: { [key: string]: Object }[] = [
    { Id: 'game1', Sports: { Name: 'Badminton'} },
    { Id: 'game2', Sports: { Name: 'Cricket'} },
    { Id: 'game3', Sports: { Name: 'Football'} },
    { Id: 'game4', Sports: { Name: 'Golf'} },
    { Id: 'game5', Sports: { Name: 'Tennis'} },
    { Id: 'game6', Sports: { Name: 'Basket Ball'} },
    { Id: 'game7', Sports: { Name: 'Base Ball'} },
    { Id: 'game8', Sports: { Name: 'Hockey'} },
    { Id: 'game9', Sports: { Name: 'Volley Ball'} }
];

public setfield = { text: "Sports.Name" }
}


