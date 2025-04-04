import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'



import { Component } from '@angular/core';
import { IDataSet, PivotView, GroupingBarService, PivotActionCompleteEventArgs } from '@syncfusion/ej2-angular-pivotview';
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
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' (actionComplete)='actionComplete($event)' [width]=width></ejs-pivotview>`
})

export class AppComponent {

    public width?: string;
    public dataSourceSettings?: DataSourceSettingsModel;

    actionComplete(args: PivotActionCompleteEventArgs): void {
       if (args.actionName == 'Field sorted' || args.actionName == 'Field filtered') {
            // Triggers when the grouping bar UI actions such as sorting and filtering are completed.
        }
    }

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            allowLabelFilter: true,
            allowValueFilter: true,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
    }
 }



