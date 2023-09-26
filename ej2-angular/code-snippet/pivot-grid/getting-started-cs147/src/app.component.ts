

import { Component } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, GroupingBarService, GroupingService } from '@syncfusion/ej2-angular-pivotview';
import { Group_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [GroupingBarService, GroupingService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings showGroupingBar='true' allowGrouping='true' width=width height=height></ejs-pivotview>`
})

export class AppComponent {

    public width?: string;
    public height?: number;
    public dataSourceSettings?: IDataOptions;

    ngOnInit(): void {

        this.width = "100%";
        this.height = 350;

        this.dataSourceSettings = {
            dataSource: Group_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            formatSettings: [{ name: 'Amount', format: 'C' }, { name: 'Product_ID', format: 'N0' },
            { name: 'Date', type: 'date', format: 'dd/MM/yyyy-hh:mm a' }],
            rows: [{ name: 'Date', caption: 'Date' }],
            columns: [{ name: 'Product_ID', caption: 'Product ID' },
            { name: 'Products', caption: 'Products' }],
            values: [{ name: 'Sold', caption: 'Unit Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            filters: []
        };
    }
 }



