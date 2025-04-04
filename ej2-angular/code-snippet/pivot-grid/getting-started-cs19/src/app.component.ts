import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView, ConditionalFormattingService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [ConditionalFormattingService],
  // specifies the template string for the pivot table component
  template: `<div class="col-md-8"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings allowConditionalFormatting='true' [width]=width  height='350'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public height?: number;
    public dataSourceSettings?: DataSourceSettingsModel;
    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.width = '100%';
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            conditionalFormatSettings: [
                {
                    measure: 'In_Stock',
                    value1: 500,
                    conditions: 'GreaterThan',
                    style: {
                        backgroundColor: '#80cbc4',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                }
            ]
        };
    }
}



