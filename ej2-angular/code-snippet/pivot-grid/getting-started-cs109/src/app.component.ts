import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, FieldListService, CalculatedFieldService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [FieldListService, CalculatedFieldService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width allowCalculatedField='true' showFieldList='true'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            columns: [{ name: 'Date', caption: 'Date' }, { name: 'Product' }],
            expandAll: false,
            enableSorting: true,
            filters: [],
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            rows: [{ name: 'Country' }, { name: 'State' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Quantity', caption: 'Quantity' }],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };
        this.width = "100%";
    }
}


