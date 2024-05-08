import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, SortService } from '@syncfusion/ej2-angular-grids'



import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json'

@Component({
imports: [
        
        GridModule
    ],

providers: [SortService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' locale='ar' [allowSorting]="true" height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 [sortComparer]="sortComparer"></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100 [sortComparer]="sortComparer"></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width=80 [sortComparer]="sortComparer"></e-column>
                    <e-column field='OrderDate' headerText='OrderDate' [format]='formatOptions' textAlign='Right' width=120 [sortComparer]="sortComparer"></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public formatOptions?: object;

    ngOnInit(): void {
        setCulture('ar');
        setCurrencyCode('QAR');
        loadCldr(
            cagregorian,
            currencies,
            numbers,
            timeZoneNames,
            numberingSystems
        );
        this.formatOptions = { type: 'date', format: 'yyyy/MMM/dd' };
        this.data = data;
    }

    public sortComparer = (reference: number | Date | string, comparer: number | Date | string, sortOrder: 'Ascending' | 'Descending') => {
        const referenceDate = new Date(reference);
        const comparerDate = new Date(comparer);
        if (typeof reference === 'number' && typeof comparer === 'number') {
            // Numeric column sorting
            return sortOrder === 'Ascending' ? comparer - reference : reference - comparer;
        } else if (!isNaN(referenceDate.getTime()) && !isNaN(comparerDate.getTime())) {
            // Date column sorting
            return sortOrder === 'Ascending' ? comparerDate.getTime() - referenceDate.getTime() : referenceDate.getTime() - comparerDate.getTime();
        }
        else {
            // Default sorting for other types
            const intlCollator = new Intl.Collator(undefined, { sensitivity: 'variant', usage: 'sort' });
            const comparisonResult = intlCollator.compare(String(reference), String(comparer));
            return sortOrder === 'Ascending' ? -comparisonResult : comparisonResult;
        }
    };
}



