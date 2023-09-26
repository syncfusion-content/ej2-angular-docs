

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, HyperlinkSettings } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [hyperlinkSettings]=hyperlinkSettings width=width></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public hyperlinkSettings?: HyperlinkSettings;

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Year', items: ['FY 2015'] }, { name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.hyperlinkSettings = {
           headerText: 'FY 2015.Q1.Units Sold',
           cssClass: 'e-custom-class'
        } as HyperlinkSettings;
        this.width = '100%';
    }
}



