import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService, PageService } from '@syncfusion/ej2-angular-grids'



import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [locale]='locale' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width=150></e-column>
                    <e-column field='OrderDate' headerText='OrderDate' [format]='formatOptions' textAlign='Right' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public formatOptions?: object;
    public locale: string = 'es-AR';

    ngOnInit(): void {
        setCulture('es-AR');
        setCurrencyCode('ARS');
        loadCldr(
          cagregorian,
          currencies,
          numbers,
          timeZoneNames
        );
            
        this.formatOptions= { type: 'date', format: 'yyyy-MMM-dd'};
        this.data = data;
    }
}



