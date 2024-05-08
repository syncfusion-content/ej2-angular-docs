import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { L10n } from '@syncfusion/ej2-base';

@Component({
imports: [
        FormsModule, ReactiveFormsModule, ComboBoxModule,ButtonModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the ComboBox component
    template: `<ejs-combobox id='comboelement' #samples [dataSource]='data' [query]='query' [fields]='fields' [placeholder]='text' [locale]='locale'></ejs-combobox>`
})
export class AppComponent implements OnInit {
    constructor() {
    }
    //set the placeholder text in french to ComboBox input
    public text: string = "Sélectionnez un élément";
    // bind remotedata to showcase actionFailureTemplate in offline
    public data: DataManager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    // map appropriate column
    public fields: Object = { text: 'ContactName', value: 'CustomerID' };
    // take 0 item to showcase noRecordsTemplate property
    public query: Query = new Query().select(['ContactName', 'CustomerID']).take(0);
    //set culture to ComboBox component
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


