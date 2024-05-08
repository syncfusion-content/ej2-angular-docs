import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { L10n } from '@syncfusion/ej2-base';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, AutoCompleteModule, ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the AutoComplete component
    template: `<ejs-autocomplete id='atcelement' [dataSource]='data' [query]='query' [fields]='fields' [placeholder]='text' [locale]='locale'></ejs-autocomplete>`
})
export class AppComponent implements OnInit {
    constructor() {
    }
    //set the placeholder text in french to AutoComplete input
    public text: string = 'Trouver un client';
    // bind remotedata to showcase actionFailureTemplate in offline
    public data: DataManager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    //map the appropriate columns to fields property
    public fields: Object = { value: 'ContactName' };
    //bind the Query instance to query property
    public query: Query = new Query().select(['ContactName', 'CustomerID']).take(0);
    // set placeholder to AutoComplete input element
    public locale: string = 'fr-BE';
    ngOnInit(): void {
        L10n.load({
            'fr-BE': {
            'dropdowns': {
                    'noRecordsTemplate': "Aucun enregistrement trouvé",
                    'actionFailureTemplate': "Modèle d'échec d'action"
                }
            }
        });
    }
}



