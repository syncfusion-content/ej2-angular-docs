import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MentionModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { L10n } from '@syncfusion/ej2-base';
@Component({
imports: [
        FormsModule, ReactiveFormsModule, MentionModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention [dataSource]='customerData' [fields]='fields' [query]= 'query' [locale]='locale' [target]='mentionTarget'></ejs-mention>`,


})
export class AppComponent implements OnInit {
    constructor() {}
    public customerData: DataManager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    public mentionTarget: string = '#mentionElement';
    public fields: Object = { text: 'ContactName', value: 'CustomerID' };
    public query: Query = new Query().select(['ContactName', 'CustomerID']).take(0);
    public locale: string = 'fr-BE';
    ngOnInit(): void {
        L10n.load({
            'fr-BE': {
            'mention': {
                    'noRecordsTemplate': "Aucun enregistrement trouvé",
                }
            }
        });
    }
}




