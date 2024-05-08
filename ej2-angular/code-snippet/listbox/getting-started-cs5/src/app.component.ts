import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListBoxComponent, ListBoxAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';
import { DataManager,ODataV4Adaptor,Query } from '@syncfusion/ej2-data';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, ListBoxAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div class="e-section-control">
                <ejs-listbox [dataSource]="data" [fields]="setfield" [query]="query"></ejs-listbox></div>`
})

export class AppComponent {
    public data:DataManager = new DataManager({
          url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
           adaptor: new ODataV4Adaptor,
    })
    public query = new Query().from('Products').select('ProductID,ProductName').take(10);

    public setfield = { text: "ProductName" }
}


