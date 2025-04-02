import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'
import { Component } from '@angular/core';
import { PivotView, GroupingBarService, GroupingService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Group_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
    imports: [

        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    providers: [GroupingBarService, GroupingService],
    // specifies the template string for the pivot table component
    template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' allowGrouping='true' [width]=width height=height></ejs-pivotview>`
})

export class AppComponent {

    public width?: string;
    public height?: number;
    public dataSourceSettings?: DataSourceSettingsModel;

    ngOnInit(): void {
        this.width = "100%";
        this.height = 350;
        this.dataSourceSettings = {
            dataSource: Group_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Product_ID', caption: 'Product ID' }],
            rows: [{ name: 'Date', caption: 'Date' }],
            values: [
                { name: 'Sold', caption: 'Unit Sold' },
                { name: 'Amount', caption: 'Sold Amount' },
            ],
            formatSettings: [{ name: 'Amount', format: 'C' }],
            groupSettings: [
                { name: 'Product_ID', type: 'Number', rangeInterval: 3 },
                {
                    name: 'Date',
                    type: 'Date',
                    groupInterval: ['Years', 'Months'],
                    startingAt: new Date(2015, 6, 1),
                    endingAt: new Date(2017, 6, 31),
                },
            ],
            filters: [],
        };
    }
}



