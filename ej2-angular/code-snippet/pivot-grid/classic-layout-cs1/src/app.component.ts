import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, FieldListService } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit } from '@angular/core';
import { IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Pivot_Data } from './datasource';
import { Browser } from '@syncfusion/ej2-base';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    providers: [FieldListService],
    // specifies the template string for the pivot table component
    template: `<ejs-pivotview #pivotview id='PivotView' height='450' [dataSourceSettings]=dataSourceSettings [width]=width [showFieldList]='true' [gridSettings]='gridSettings'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: DataSourceSettingsModel;
    public gridSettings?: GridSettings;
    public width?: string;

    ngOnInit(): void {
        this.width = '100%';

        this.gridSettings = {
            columnWidth: Browser.isDevice ? 100 : 120,
            layout: 'Tabular'
        } as GridSettings;

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Quarter' }],
            rows: [
                { name: 'Product_Categories', caption: 'Product Categories' },
                { name: 'Products' },
                { name: 'Order_Source', caption: 'Order Source' },
            ],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            drilledMembers: [
                { name: 'Product_Categories', items: ['Accessories', 'Bikes'] },
                { name: 'Products', delimiter: '##', items: ['Accessories##Helmets'] },
            ],
            filterSettings: [
                {
                    name: 'Products',
                    type: 'Exclude',
                    items: ['Cleaners', 'Fenders'],
                },
            ],
            expandAll: false,
            values: [
                { name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' },
            ],
            filters: [],
        };
    }
}



