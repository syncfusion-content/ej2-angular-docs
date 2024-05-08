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
import numberingSystems from './numberingSystems.json'
import deDELocalization from './locale.json'

L10n.load(deDELocalization);

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService, PageService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [allowGrouping]="true" height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='Freight' headerText='Freight' [format]='formatOptions' textAlign='Right' width=80></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public formatOptions?: object;
    

    ngOnInit(): void {
        setCulture('de-DE');
        setCurrencyCode('EUR');

        loadCldr(
            cagregorian,
            currencies,
            numbers,
            timeZoneNames,
            numberingSystems
        );

        this.data = data;
        this.formatOptions = { format: 'C2', useGrouping: false, minimumSignificantDigits: 1, maximumSignificantDigits: 3 }
    }
}



