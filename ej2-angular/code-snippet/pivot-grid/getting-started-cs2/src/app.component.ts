import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component, OnInit } from '@angular/core';
import { GroupingBarService, AggregateTypes, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
imports: [
        
        PivotViewAllModule,
        PivotFieldListAllModule
    ],


standalone: true,
  selector: 'app-container',
  providers: [GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showGroupingBar='true' [aggregateTypes]='aggregateTypesOption'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public dataSourceSettings?: DataSourceSettingsModel;
    public width?: string;
    public aggregateTypesOption?: AggregateTypes[];
    ngOnInit(): void {
        this.width = '100%';
        this.aggregateTypesOption = ['DistinctCount', 'Avg', 'Product'],
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount', type: 'Sum' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            filters: [],
        };
    }
}



