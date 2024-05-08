import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, PageService, ToolbarService, EditService,ExcelExportService,PdfExportService,SearchService  } from '@syncfusion/ej2-angular-grids'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json'
import frFRLocalization from './locale.json';

L10n.load(frFRLocalization);


setCulture('fr-FR'); // Change the Grid culture
setCurrencyCode('EUR');

@Component({
imports: [
        
        GridModule,
        ButtonModule
    ],

providers: [PageService, ToolbarService, EditService,ExcelExportService,PdfExportService,SearchService ],
standalone: true,
    selector: 'app-root',
    template: `
    <button ejs-button id="frButton" cssClass="e-outline" (click)="ChangeFrLocale()">Change FR Locale</button>
    <button ejs-button id="enButton" style="margin-left:5px" cssClass="e-outline" (click)="ChangeEnLocale()">Change En Locale</button>
    <ejs-grid style="padding: 10px 10px" [dataSource]='data' [allowPaging]='true' height='220px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='Freight' headerText='Freight' format="C2"  width=90></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="100"></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
        loadCldr(
            cagregorian,
            currencies,
            numbers,
            timeZoneNames,
            numberingSystems
        );
    }

    ChangeFrLocale() {
        setCulture('fr-FR'); // Change the Grid culture to French locale
        setCurrencyCode('EUR'); // Change the currency code based on French culture
    }

    ChangeEnLocale() {
        setCulture('en-US'); // Change the Grid culture to English locale
        setCurrencyCode('USD'); // Change the currency code based on American English culture
    }
}



