

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, ConditionalFormattingService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [ConditionalFormattingService],
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings allowConditionalFormatting='true' width=width height='350'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public height?: number;
    public dataSourceSettings?: IDataOptions;

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
                label: 'Germany',
                conditions: 'Between',
                value1: 500,
                value2: 50000,
                style: {
                    backgroundColor: '#f48fb1',
                    color: 'black',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                }
            }
        ]
        };
    }
}



