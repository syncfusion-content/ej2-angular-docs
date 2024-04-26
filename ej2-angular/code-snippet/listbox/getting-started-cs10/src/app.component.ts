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
                <ejs-listbox id="listbox" [dataSource]="data" height="290px"></ejs-listbox></div>`
})

export class AppComponent {
public data: { [key: string]: Object }[] = [
    { text: 'Account Settings', id: 'list-01' },
    { text: 'Address Book', id: 'list-02' },
    { text: 'Delete', id: 'list-03' },
    { text: 'Forward', id: 'list-04' },
    { text: 'Reply', id: 'list-05' },
    { text: 'Reply All', id: 'list-06' },
    { text: 'Save All Attachments', id: 'list-07' },
    { text: 'Save As', id: 'list-08' },
    { text: 'Touch/Mouse Mode', id: 'list-09' },
    { text: 'Undo', id: 'list-10' }
];
}



