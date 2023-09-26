

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, ConditionalFormattingService, PivotView,
    FieldListService, ToolbarService, ToolbarItems, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  providers: [FieldListService, ToolbarService, ConditionalFormattingService,],
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowConditionalFormatting='true' width=width showToolbar='true' [toolbar]='toolbarOptions'></ejs-pivotview></div>`
})
export class AppComponent implements OnInit {
  public dataSourceSettings?: IDataOptions;
  public width?: string;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;
    public toolbarOptions?: ToolbarItems[];
    ngOnInit(): void {
        this.toolbarOptions = ['ConditionalFormatting'] as ToolbarItems[];
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            conditionalFormatSettings: [
                {
                    measure: 'In_Stock',
                    value1: 5000,
                    conditions: 'LessThan',
                    style: {
                        backgroundColor: '#80cbc4',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                },
                {
                    value1: 3400,
                    value2: 40000,
                    measure: 'Sold',
                    conditions: 'Between',
                    style: {
                        backgroundColor: '#f48fb1',
                        color: 'black',
                        fontFamily: 'Tahoma',
                        fontSize: '12px'
                    }
                }
            ]
        };
        this.width = '100%';
    }
}



